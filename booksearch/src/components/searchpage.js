import React from "react";
import BookList from "./booklist"
import SearchField from "./subcomponents/searchField"

class SearchPage extends React.Component {
    render() {
        return(
            <div>
                <SearchField />
                <BookList source="SearchPage"/>
            </div>
        )
    }
}

export default SearchPage