import React, { useState } from "react";

const ControlledForm = () => {
    const MAX_LENGTH = 30; // Feel free to change the value
    const [character, setCharacter] = useState('');
    const handleSubmit = event => event.preventDefault();
    const handleChange = event => {
      if (event.target.value.length <= MAX_LENGTH) {
        setCharacter(event.target.value);
      }
    };
  
    // SOLUTION for conditional border color : compute a BOOLEAN
    // telling if we've reached the maximum, and use it in the input's className
    const maximumReached = character.length >= MAX_LENGTH;
    // SOLUTION for displaying the number of remaining characters :
    // we compute it here and use it below
    const numRemaining = MAX_LENGTH - character.length;
  
    return (
      <form className="QuoteForm" onSubmit={handleSubmit}>
        <label htmlFor="character">Character:</label>
        <input
          className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
          id="name"
          name="character"
          type="text"
          value={character}
          onChange={handleChange}
        />
        <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
      </form>
    );
};

export default ControlledForm;
