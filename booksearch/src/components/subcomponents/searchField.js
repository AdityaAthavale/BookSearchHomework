import React from "react";
import './../../../src/App.css';
import {BookProvider, BookContext} from "./../../Context/BookProvider"

class SearchField extends React.Component {    
    render() {
        return(
            <BookContext.Consumer>
            {
                context => {
                    return(
                        <div className="box row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <form className="box justify">
                                    <p>
                                        Start typing book name or author: <input type="text" onInput={ (event) => context.search(event.target.value)
                                        } />
                                    </p>
                                </form>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    )
            }}
            </BookContext.Consumer>
        )
    }
}

export default SearchField