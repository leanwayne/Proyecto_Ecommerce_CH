import React, { Fragment } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>    
    </Fragment>
    
  );
}

export default App;
