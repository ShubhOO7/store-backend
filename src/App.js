import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/BookList';
import About from './components/About';
import { Routes, Route, Navigate } from "react-router-dom";
import BookDetails from './components/Book/Bookdetails';
import ProtectedRoutes from './ProtectedRoutes';
import '@fontsource/roboto/400.css';



function App() {

    const [isAutheticated, setisAutheticated] = useState(false);

    function login(valid) {
        // console.log(valid);
        setisAutheticated(valid);
        console.log("loggedInUser:" + isAutheticated)
    }

    function logout(valid) {
        setisAutheticated(valid);
        console.log("loggedInUser:" + isAutheticated)
    }

  return (
      <React.Fragment>
          <header>
              <Header />
          </header>
          <main>
              <Routes>
                  <Route path='/' element={<Home login={login} />} exact />
                  <Route path="*" element={<Navigate to="/" />} />

                  <Route element={<ProtectedRoutes loggedInUser={isAutheticated} />} >
                      <Route path='/add' element={<AddBook />} exact />
                      <Route path='/books' element={<Books />} exact />
                      <Route path='/about' element={<About logout={logout} />} exact />
                      <Route path='/books/:id' element={<BookDetails />} exact />
                  </Route>
              </Routes>
          </main>
      </React.Fragment >
  );
}

export default App;
