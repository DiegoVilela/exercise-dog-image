import React, { Component } from 'react';

class Dog extends Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);

    this.state = {
      loading: true,
      dog: [],
    };
  }

  async fetchDog() {
    this.setState(
      { loading: true }, // updater
      async () => { // callback run after the state setting
        const endpoint = 'https://dog.ceo/api/breeds/image/random';
        const response = await fetch(endpoint);
        const data = await response.json();
        const dog = await data.message;
        this.setState({ loading: false, dog });
      }
    );
  }

  componentDidMount() {
    this.fetchDog();
  }

  showLoading = () => <span>Loading...</span>
 
  renderDogElement(dog) {
    return(
      <div className="wrap">
        <img src={ dog } alt='A random dog.' />
        <button type="button" onClick={ this.fetchDog }>One More</button>
      </div>
    );
  }

  render() {
    const { loading, dog } = this.state;

    return(
      <div className="container">
        <h1>Random Dogs</h1>
        {(loading) ? this.showLoading() : this.renderDogElement(dog)}
      </div>
    );
  }  
}

export default Dog;
