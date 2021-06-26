import React from 'react';

const Results = (props) => {
    const {repos} = props;
    console.log("Repos is: ", repos.data);

    const listRepos = repos.length!==0 ? (
         repos.data.slice(0,5).map((item) => 
         <li key={item.login}><a href={item.html_url}>{item.avatar_url}</a></li>)
    ) : (
        <li>No repository found</li>
    );
    return (
        <ul>
            {listRepos}
        </ul>
    );
};
export default Results;