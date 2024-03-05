import React from "react";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/Nav/SearhBar/SearchBar";

const Home = ({characters, onClose, onSearch}) =>{

    return (<>
        <SearchBar onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
    </>)
}

export default Home