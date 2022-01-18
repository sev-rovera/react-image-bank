import { Component } from 'react';
import axios from 'axios';
//import unsplash from '../api/unsplash';
import '../styles/App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

  state = { images: [] }

  /* API call: we pass this function as a prop to the SearchBar child component
  It'll be called when the form in the SearchBar component is submitted */
  handleSearchSubmit = async (term) => {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: term },
        headers: {
          'Authorization': 'Client-ID DWpXUqOHifDYUuhearjcQznSOoiEdIsP6TcRkB8AGZA'
        }
      }
    )
    this.setState({ images: response.data.results })
  }

  // same API call using axios but with some configuration in a separate file (unsplash.js)
  /*
  handleSearchSubmit = async (term) => {
    const response = await unsplash.get(
      '/search/photos',
      {
        params: { query: term }
      }
    )
    this.setState({ images: response.data.results })
  }
  */

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={ this.handleSearchSubmit } />
        Found { this.state.images.length } images
        <ImageList images={ this.state.images } />
      </div>
    );
  }
}

export default App;
