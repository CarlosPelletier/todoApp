import React from "react";
import { Context } from "./Context";
import '../index.css'

function SearchBar() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(Context)


    return(
      <input 
      placeholder="Search for an asignement"
      className="SearchBar"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      />
    )
  }

  export { SearchBar };