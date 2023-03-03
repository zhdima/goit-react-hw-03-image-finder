import PropTypes from 'prop-types';
import { Component } from 'react';
//import { ContactItem } from '../ContactItem/ContactItem';
import { ListItem } from './ImageGallery.styled';
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      searchService.setNewQuery(this.props.searchQuery, IMAGES_PER_PAGE);
      this.performQuery();
    }
  }

  performQuery = async() => {
    try {
      this.setState({ status: Status.LOADING });

      const data = await searchService.getNextData();

      if (!data || (data.length === 0)) {
        alert('Sorry, there are no images matching your search query. Please try again.');
        this.setState({ results: [], status: Status.ERROR });
        return;
      }
        
      if (searchService.page === 1) {
        console.log(`We found ${searchService.resultsQty} images.`);
      }

      this.setState(prevState => ({
        results: (searchService.page === 1) ? [...data] : [...prevState.results, ...data],
        status: searchService.isLastPage() ? Status.IS_END : Status.IS_MORE,
      }));

    } catch (err) {
      console.error(err);
      this.setState({ results: [], status: Status.ERROR });
    }
  }
  
  onLoadMore = () => {
    searchService.incrementPage();
    this.performQuery();
  }

  render() {
    const { results } = this.state;

    return (
      <ul>
        {results.map(item => (
          <ListItem key={item.id}>
            {/* <ContactItem contact={contact} onDeleteContact={onDeleteContact} /> */}
            {item.webformatURL}
            {item.largeImageURL}
          </ListItem>
        ))}
      </ul>
    );
  }  
};

