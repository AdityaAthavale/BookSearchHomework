import React from "react";
import ListItem from "./subcomponents/listitem";
import {BookProvider, BookContext} from "./../Context/BookProvider"

class BookList extends React.Component {
    constructor(props) {
        super(props)
    }

    didSelectBook(event) {
        let index = event.target.id
        return index;
    }

    render() {
        return(
            <BookContext.Consumer>
            {
                context => {
                    //Determine which array to use depending on source.
                    let array = (this.props.source === "SearchPage" ? context.state.searchedList: context.state.bookList)
                    return(
                        <ul className="list-group">
                        {
                            array.map((element, index) => {
                                return (<ListItem key={index} book={element} source="List"/>)
                            })
                        }
                        </ul>
                )
            }}
            </BookContext.Consumer>
        )
    }
}

export default BookList