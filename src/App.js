import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from './components/Header';
import GetPosts from './components/GetPosts';


const App = () => (
  <Fragment>
  
    <Header type="home" styleFont="#05abea"/>
    
    <main className="my-5 py-5">
      <Container className="px-0">
        <GetPosts />
      </Container>
    </main>
    
  </Fragment>
);

export default App;