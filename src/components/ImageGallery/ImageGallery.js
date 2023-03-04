import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryList, ErrorInfo } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ButtonLoadMore } from '../ButtonLoadMore/ButtonLoadMore';
import { Loader } from '../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import SearchService from '../../services/search-service';

const searchService = new SearchService();

const IMAGES_PER_PAGE = 12;

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  IS_MORE: 'is_more',
  IS_END: 'is_end',
  ERROR: 'error'
}

export class ImageGallery extends Component {

  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

  state = {
    results: [],
    status: Status.IDLE,
    error: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      searchService.setNewQuery(this.props.searchQuery, IMAGES_PER_PAGE);
      this.performQuery();
    }
    
    if ((this.state.results !== prevState.results) && (searchService.page > 1)) {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }  
  }

  performQuery = async() => {
    try {
      this.setState({ status: Status.LOADING });

      const data = await searchService.getNextData();

      if (!data || (data.length === 0)) {
        this.setState({
          results: [],
          status: Status.ERROR,
          error: 'Sorry, there are no images matching your search query. Please try again.'
        });
        return;
      }
        
      if (searchService.page === 1) {
        toast.success(`We found ${searchService.resultsQty} images.`);
      }

      this.setState(prevState => ({
        results: (searchService.page === 1) ? [...data] : [...prevState.results, ...data],
        status: searchService.isLastPage() ? Status.IS_END : Status.IS_MORE,
      }));

    } catch (err) {
        this.setState({
          results: [],
          status: Status.ERROR,
          error: String(err)
        });
    }
  }
  
  onLoadMore = () => {
    searchService.incrementPage();
    this.performQuery();
  }

  render() {
    const { results, status, error } = this.state;

    return (
      <>
        <ImageGalleryList>
          {results.map(item => (
            <ImageGalleryItem key={item.id} item={item} />
          ))}
        </ImageGalleryList>
        {status === Status.LOADING &&
          <Loader />
        }
        {status === Status.IS_MORE &&
          <ButtonLoadMore onClick={this.onLoadMore} />
        }
        {status === Status.ERROR &&
          <ErrorInfo>{error}</ErrorInfo>
        }
        <Toaster position="top-right"/>
      </>
    );
  }  
};

