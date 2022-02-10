import React, { memo, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";

// Redux
import {
  getCharactersSelector,
  getLoadingState
} from "../../../redux/selectors";

// Actions
import { fetchCharacters } from "../../../redux/actions";
import { loading } from "../../../redux/actions";

// Component
import Message from "../../common/message/message";
import CharacterCard from "./CharacterCard"
import ProductDetail from "./CharacterDetail";
import Numbers from "./Numbers";
import Pagination from "./Pagination";

// Style
import "./style/Characters.scss";


const Charaters = ({
  characters,
  fetchCharacters,
  loading,
  location,
  isLoading,
}) => {
  const searchQuery = new URLSearchParams(location.search).get("search");
  const abortController = useMemo(() => new window.AbortController(), []);
  const [ characterList, setCharacterList] = useState(characters && characters.results)
  const [ character, setCharacter ] = useState()
  const [ message, setMessage ] = useState()
  const [ pagination, setPagination ] = useState()
  const [ page, setPage ] = useState(1)

  useEffect(() => {
    const load = async () => {
      loading(true);
      await fetchCharacters(searchQuery, abortController, page)
      await loading(false);
    };

    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, loading, abortController, fetchCharacters, page]);

  useEffect(() => {
    setPage(1)
  }, [searchQuery])

  useEffect(() => {
    
    if(characters && characters.results ) {
      setCharacterList(characters.results)
      setPagination(characters.info)
    } else {
      setCharacterList([])
      setMessage(characters.message)
    }
    
  }, [setCharacterList, characters]);

  return (
    <>
    <Numbers />
    <div className={`containerCharacters`}>
      <div className={`listCharacters`}>
      {characterList && characterList.length ? (
          characterList.map((item, index) => (
            <CharacterCard
              key={index}
              setCharacter={setCharacter}
              character={item}
            />
          ))
        ) : (
          <Message show={!isLoading} text={message} />
        )}
        <Pagination page={page} setPage={setPage} pagination={pagination} />
      </div>
      <ProductDetail character={character} />
    </div>
    </>
  );
};

Charaters.defaultProps = {
  characters: [],
  isLoading: false,
};

const mapStateToProps = (state) => ({
  characters: getCharactersSelector(state),
  isLoading: getLoadingState(state),
});

export default connect(mapStateToProps, { loading, fetchCharacters })(memo(Charaters));
