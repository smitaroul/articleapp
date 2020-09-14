import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from '../Header';
import GetPosts from '../GetPosts';


class News extends Component {
    

    render() {
        let { match } = this.props;
        let query = match.params ? match.params.query : '';
        
        return(
            <Fragment>
            
                <Header type="home" styleFont="#05abea"/>
                
                <main className="my-5 py-5">
                <Container className="px-0">
                    <GetPosts query={query}/>
                </Container>
                </main>
                
            </Fragment>
        )
    }
}

export default News;