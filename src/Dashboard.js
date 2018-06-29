import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  onAdopt() {
    console.log(`'onAdopt' ran`);
  }

  render() {
    return (
      <div>
        <section>
          <header>
            <h2>{this.props.catToAdopt.name}</h2>
            <img src={this.props.catToAdopt.imageURL} alt={this.props.catToAdopt.imageDescription} />
          </header>
          <main>
            <dl>
              <dt>Sex</dt>
              <dd>{this.props.catToAdopt.sex}</dd>
              <dt>Age</dt>
              <dd>{this.props.catToAdopt.age}</dd>
              <dt>Breed</dt>
              <dd>{this.props.catToAdopt.breed}</dd>
              <dt>Story</dt>
              <dd>{this.props.catToAdopt.story}</dd>
            </dl>
            <button onClick={this.onAdopt}>Adopt</button>
          </main>
        </section>
        <section>
          <header>
            <h2>{this.props.dogToAdopt.name}</h2>
            <img src={this.props.dogToAdopt.imageURL} alt={this.props.dogToAdopt.imageDescription} />
          </header>
          <main>
            <dl>
              <dt>Sex</dt>
              <dd>{this.props.dogToAdopt.sex}</dd>
              <dt>Age</dt>
              <dd>{this.props.dogToAdopt.age}</dd>
              <dt>Breed</dt>
              <dd>{this.props.dogToAdopt.breed}</dd>
              <dt>Story</dt>
              <dd>{this.props.dogToAdopt.story}</dd>
            </dl>
            <button onClick={this.onAdopt}>Adopt</button>
          </main>
        </section>
      </div >
    );

  }

}
