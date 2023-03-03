import { Component } from 'react';
import { Layout } from './Layout';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {

  state = {
    searchQuery: '',
  }

  handleSearch = searchQuery => this.setState({ searchQuery });

  render() {

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </Layout>
    );
  }  
};
