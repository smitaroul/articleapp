import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import constant from '../constants';
import Article from './Article';
import Header from '../Header';

class Post extends Component {

  state = { post: null }
  
  componentDidMount() {
    //let { match } = this.props;
    //let id = match.params ? match.params.id : '';
    let API_LINK_LIST = constant.NEW_APILIST;
    let API_LINK = API_LINK_LIST['default'];
    axios.get(API_LINK)
    .then(response => {
        this.setState({ post: response.data })
        this.getArticle(response.data);
    });
  }

  getArticle = (posts) => {
    let articleDOM = [];
    let articles = posts.status === 'ok' ? posts.articles : [];
    
    let article0 = articles[1];
    console.log('article0====',article0)
    articleDOM.push(<Article key="test1" data={article0} />)
    return articleDOM;
}
  
  render() {
    
    return (
      <Fragment>
        <Header type="home" styleFont="#05abea"/>
        <Container className="px-0">
        { this.state.post && 
          this.getArticle(this.state.post)
        }
       </Container>
      </Fragment>
    );
  }
  
}

export default Post;