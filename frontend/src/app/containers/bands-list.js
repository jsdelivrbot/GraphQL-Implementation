import React, {Component} from 'react';
import BandQuery from '../queries/band_queries';

class BandsList extends Component {

  componentDidMount() {
    this.onFetchBands();
  }

  render() {
    return(
      <div>

      </div>
    );
  }

  onFetchBands = () => {
    this.axiosEndpoint.get('', { query: BandQuery.GET_BANDS})
      .then(result => console.log(result));
  }

  axiosEndpoint = () => axios.create({
    baseURL: 'http://localhost/bands'
  });
}