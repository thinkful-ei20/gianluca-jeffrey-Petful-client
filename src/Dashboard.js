import React from 'react';
import { connect } from 'react-redux';
import { cats, dogs } from './actions';
import Pet from './components/Pet';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadCat();
    this.props.loadDog();
  }

  handleAdoptPet() {
    console.log(`'handleAdoptPet' ran`);
  }

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={this.handleAdoptPet} />
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={this.handleAdoptPet} />
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
  loadDog: () => dispatch(dogs.fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
