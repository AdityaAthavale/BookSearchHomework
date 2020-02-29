import React from "react";
import {BookContext} from "./../../Context/BookProvider"

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.source === "List") {
            const book = this.props.book
            return(
                <BookContext.Consumer>
                    { (context) =>
                        <li className="list-group-item justify" id={this.props.bookId}>
                            <div className="col-md-3">
                                <img src={book.image}/>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-9">
                                        <p className="title">{book.title}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-success" onClick={(event) => {
                                            context.selectBook(book._id)
                                        }}>View</button>
                                        <button id={book.id} className="btn btn-danger" onClick={(event) => {
                                            console.log(book._id)
                                            context.deleteBook(book._id)
                                        }}>Delete</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="author">{book.author}</p>
                                </div>
                                <div className="row">
                                <p className="synopsys">{book.synopsis}</p>
                                </div>
                            </div>
                        </li>
                    }
                </BookContext.Consumer>
            )
        } else {
            return(
            <BookContext.Consumer>
            { context => {
                return(
                <div>
                    <div className="col-md-3">
                        <img src={context.state.selectedBook.image}/>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-9">
                                <p className="title">{context.state.selectedBook.title}</p>
                            </div>
                            <div>
                                <button className="btn btn-success">View</button>
                                <button id={context.state.selectedBook._id} className="btn btn-danger" onClick={(e) => {
                                    context.deleteBook(context.state.selectedBook._id)
                                }}>Delete</button>
                            </div>
                        </div>
                        <div className="row">
                            <p className="author">{context.state.selectedBook.author}</p>
                        </div>
                        <div className="row">
                        <p className="synopsys">{context.state.selectedBook.synopsis}</p>
                        </div>
                    </div>
                </div>
                )
            }
            }
        </BookContext.Consumer>)
        }
    }
}

export default ListItem