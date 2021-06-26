import React, { useState } from 'react';
import axios from 'axios';
//import ReactDOM from "react-dom";
import Results from './Results';

const SearchBar =() => {
    const [searchInput, setSearchInput] = useState("");
    const [repos, setRepos ] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleClick = async () => {
        console.log(searchInput);

        try{
            
            const result = await axios("https://api.github.com/users");
        
            setRepos(result);
        }
        catch (err){
            console.log(err);
        }
        
    };
    console.log(repos);
    return(
        <>
    <div style={{ padding: "20px" }}>
        <input 
            type="text" 
            placeholder="search" 
            value={searchInput} 
            onChange={handleChange} 
        />
        <button onClick={handleClick}>Search</button>
    </div>
    <Results repos={repos} />
        </>
    );

};
export default SearchBar;