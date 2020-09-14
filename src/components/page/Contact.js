import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from '../Header';

class Contact extends React.Component {
  render() {
      return(
        <Fragment>
    
        <Header type="contacts" styleFont="#05abea"/>
        
        <main className="my-5 py-5">
        <Container className="px-0">
            CONTACTS
        </Container>
        </main>
        
    </Fragment>
    )
  }
}
export default Contact