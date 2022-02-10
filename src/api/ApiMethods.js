import { backendExpress, character, location, episode } from "./urls";

const queryString = require('query-string');



export const getCharacters = (query, abortController) => async () => {
    try {
      
      const response = await fetch(
        `${backendExpress}${character}${query? `?${queryString.stringify(query)}` : ''}`,
        {
          signal: abortController.signal,
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const { ok, status } = response
      if (!ok) {
        const message = await response.json()
        console.error(message);
        switch (status) {
          case 404:
            return { message: "No encontramos personajes." };
          default:
            return { message: "Algo salió mal, inténtelo de nuevo." };
        }
      }
      const data = await response.json()
      return data
    } catch (err) {
      if (err.name !== 'AbortError') {
        throw err
      }
    }
};



export const getLocations= (query, abortController) => async () => {
  try {
    
    const response = await fetch(
      `${backendExpress}${location}${query? `?${queryString.stringify(query)}` : ''}`,
      {
        signal: abortController.signal,
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const { ok, status } = response
    if (!ok) {
      const message = await response.json()
      console.error(message);
      switch (status) {
        case 404:
          return { message: "No encontramos locations." };
        default:
          return { message: "Algo salió mal, inténtelo de nuevo." };
      }
    }
    const data = await response.json()
    return data
  } catch (err) {
    if (err.name !== 'AbortError') {
      throw err
    }
  }
};



export const getEpisodes = (query, abortController) => async () => {
  try {
    
    const response = await fetch(
      `${backendExpress}${episode}${query? `?${queryString.stringify(query)}` : ''}`,
      {
        signal: abortController.signal,
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const { ok, status } = response
    if (!ok) {
      const message = await response.json()
      console.error(message);
      switch (status) {
        case 404:
          return { message: "No encontramos episodios." };
        default:
          return { message: "Algo salió mal, inténtelo de nuevo." };
      }
    }
    const data = await response.json()
    return data
  } catch (err) {
    if (err.name !== 'AbortError') {
      throw err
    }
  }
};
