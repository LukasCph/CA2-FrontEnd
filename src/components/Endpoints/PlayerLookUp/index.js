import React, { useState, useEffect } from 'react';
//const hiscores = require('osrs-json-hiscores');

// Url
import { highscorelookup } from '../../../settings';

// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container } from './PlayerLookUp.styles';

const PlayerLookUp = () => {
const URL = highscorelookup;

  const fetchPlayer = async (highscorelookup) => {
    return fetch(highscorelookup, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html; charset=ISO-8859-1',
      },
    })
    .then(response => response)
    .then((data) => console.log(data))
  };

  const getPlayer = async () => {
  fetchPlayer(URL);
  };

  return (
    <MyBody>
      <div> Find a players stats </div>
      
      <Container>
        <button onClick={getPlayer}>Find Player</ button>
      </Container>
    </MyBody>
  );
}

export default PlayerLookUp;
