import React from 'react';
import { connect } from 'react-redux';

import { cats, dogs } from './actions';

import Pet from './components/Pet';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadCat();
    this.props.loadDog();
  }

  handleAdoptCat() {
    console.log(`'handleAdoptCat' ran`);
    cats.adoptCat();
    // this.props.unloadCat();
  }

  handleAdoptDog() {
    console.log(`'handleAdoptDog' ran`);
    dogs.adoptDog();
    // this.props.unloadDog();
  }

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={this.handleAdoptCat} />
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={this.handleAdoptDog} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
});

const mapDispatchToProps = dispatch => ({
  loadCat: () => dispatch(cats.fetchCat()),
  // unloadCat: () => dispatch(cats.adoptCat()),
  loadDog: () => dispatch(dogs.fetchDog()),
  // unloadDog: () => dispatch(dogs.adoptDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
