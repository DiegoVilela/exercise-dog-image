import React, { Component } from 'react';

class Dog extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      dog: [],
    };
  }

  async componentDidMount() {
    const endpoint = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(endpoint);
    const data = await response.json();
    const dog = await data.message;

    this.setState({
      loading: false,
      dog,
    });
  }

  showLoading = () => <span>Loading...</span>
 
  render() {
    const { loading, dog } = this.state;

    if (loading) return this.showLoading();

    return <img src={ dog } alt='A random dog.' />
  }  
}

export default Dog;
