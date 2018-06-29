import React from 'react';

import Pet from './components/Pet';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdoptPet() {
    console.log(`'handleAdoptPet' ran`);
  }

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={this.handleAdoptPet} />
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={this.handleAdoptPet} />
      </div >
    );
  }
}
