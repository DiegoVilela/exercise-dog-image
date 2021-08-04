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
    console.log(dog);
  }

  showLoading = () => <span>Loading...</span>
 
  render() {
    const { loading } = this.state;

    if (loading) return this.showLoading();

    return <h1>Hi</h1>
  }  
}

export default Dog;
