import React, { memo, useEffect, useState, useMemo } from 'react';
import { connect } from "react-redux";

import { fetchCharactersNumber, fetchEpisode, fetchLocations } from '../../../redux/actions';

// Redux
import {
  getCharactersNumberSelector,
  getLocationsSelector,
  getEpisodesSelector

} from "../../../redux/selectors";

// Style
import "./style/Numbers.scss";

const Numbers = ({
  charactersNumber,
  locationsNumber,
  episodesNumber,
  fetchCharactersNumber,
  fetchEpisode,
  fetchLocations,
}) => {
  const [loading, setIsloading] = useState();
  const abortController = useMemo(() => new window.AbortController(), []);

  useEffect(() => {
    const load = async () => {
      setIsloading(true);
      await Promise.all([
        fetchCharactersNumber("", abortController),
        fetchLocations("", abortController),
        fetchEpisode("", abortController),
      ]);
      await setIsloading(false);
    };

    load();
  }, [abortController, fetchCharactersNumber, fetchEpisode, fetchLocations]);

  useEffect(() => {}, [charactersNumber, locationsNumber, episodesNumber]);

  const getCount = (data) => {
    if (!data || !data.info) {
      return "";
    }

    return data.info.count;
  };
  return (
    <div className="containerNumbers">
      {!loading && (
        <>
          <div className="containerNumbers-text">La serie en números:</div>
          <div className="containerNumbers-text">
            {getCount(episodesNumber)} Número de episodios
          </div>
          <div className="containerNumbers-text">
            {getCount(locationsNumber)} Número de locations
          </div>
          <div className="containerNumbers-text">
            {getCount(charactersNumber)} Número de personajes
          </div>
        </>
      )}
    </div>
  );
};

Numbers.defaultProps = {
  charactersNumbe: {}, locationsNumber: {}, episodesNumber: {}
};

const mapStateToProps = (state) => {
  debugger
  return {
    charactersNumber: getCharactersNumberSelector(state),
    locationsNumber: getLocationsSelector(state),
    episodesNumber: getEpisodesSelector(state),
  }
};

export default connect(mapStateToProps, { fetchCharactersNumber, fetchEpisode, fetchLocations })(memo(Numbers));
