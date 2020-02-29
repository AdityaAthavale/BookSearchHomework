import React from 'react';
import BookList from "./components/booklist"
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from './components/searchpage';
import {BookProvider, BookContext} from "./Context/BookProvider";
import ListItem from './components/subcomponents/listitem';

function App() {
  return (
    <Router>
      <BookProvider>
        <div>
          <Navbar />
          <Route exact path="/" component={BookList} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/details" component={ListItem} />
        </div>
      </BookProvider>
    </Router>
  );
}

export default App;
