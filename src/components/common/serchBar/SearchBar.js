import React, {useRef, useEffect, useState, useCallback} from 'react';
import {withRouter} from 'react-router';
import { connect } from "react-redux";
import {
    getLoadingState
  } from "../../../redux/selectors";

import './style/SearchBar.scss';
import Button from "../Button";
import Input from "../Input";
import Spinner from '../Spinner';


const SearchBar = (props) => {

    const searchInput = useRef('');
    const [searchInputValue, setSearchInputValue] = useState('');
    let searchParam = new URLSearchParams(props.location.search).get("search");

    const handleSearchSubmit = useCallback( e => {
        e.preventDefault();
        const [searchInput] = e.target.children;
        props.history.push({pathname: '/', search:`search=${searchInput.value}`, state:searchInput.value});
    }, [props.history])

    useEffect( () => {
        setSearchInputValue(searchParam);
        searchInput.current.focus()
    }, [searchParam] );

    return (
                <form
                  className="searchBarContainer"
                  onSubmit={handleSearchSubmit}
                >
                  <Input
                    defaultValue={
                      searchInputValue && searchInputValue !== ""
                        ? searchInputValue
                        : ""
                    }
                    reference={searchInput}
                    placeholder=""
                    type="text"
                  />
                  <Button
                    type="submit"
                    alt="Buscar"
                    content={
                      props.isLoading ? (
                        <Spinner size={20} />
                      ) : (
                        'Buscar'
                      )
                    }
                  />
                </form>
    );
};

  
  const mapStateToProps = (state) => ({
    isLoading: getLoadingState(state),
  });
  
  export default connect(mapStateToProps, {})(
    withRouter(SearchBar)
  );