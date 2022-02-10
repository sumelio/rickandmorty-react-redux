import {
  FETCH_CHARACTERS,
  LOADING,
  FETCH_LOCATIONS,
  FETCH_EPISODES,
  FETCH_CHARACTERS_NUMBER,
} from "../../constants";
import { createAction } from "redux-actions";
import { getCharacters, getEpisodes, getLocations } from "../../api/ApiMethods";

const getQuery = (search, page) => {
  const query = {
    name: search,
    page
  };

  return search ? query : undefined;
};

export const fetchCharacters = createAction(
  FETCH_CHARACTERS,
  (search, abortController, page = 1) => getCharacters(getQuery(search, page), abortController)()
);

export const fetchCharactersNumber = createAction(
  FETCH_CHARACTERS_NUMBER,
  (search, abortController) => getCharacters(getQuery(search), abortController)()
);

export const fetchLocations = createAction(
  FETCH_LOCATIONS,
  (search, abortController) => getLocations(getQuery(search), abortController)()
);

export const fetchEpisode = createAction(
  FETCH_EPISODES,
  (search, abortController) => getEpisodes(getQuery(search), abortController)()
);

export const loading = createAction(LOADING, (isLoading) => isLoading);
