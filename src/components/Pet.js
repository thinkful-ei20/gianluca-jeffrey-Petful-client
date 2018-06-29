import React from 'react';

export default function (props) {
  return (
    <section>
      <header>
        <h2>{props.petToAdopt.name}</h2>
        <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription} />
      </header>
      <main>
        <dl>
          <dt>Sex</dt>
          <dd>{props.petToAdopt.sex}</dd>
          <dt>Age</dt>
          <dd>{props.petToAdopt.age}</dd>
          <dt>Breed</dt>
          <dd>{props.petToAdopt.breed}</dd>
          <dt>Story</dt>
          <dd>{props.petToAdopt.story}</dd>
        </dl>
        <button onClick={props.onAdoptPet}>Adopt</button>
      </main>
    </section>
  );
}
