import React, { Component, Fragment } from 'react';
import axios from 'axios';
import constant from '../constants';
import Article from './Article'

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
    
    let article0 = articles[0];

    articleDOM.push(<Article key="test1" data={article0} />)
    return articleDOM;
}
  
  render() {
    
    return (
      <Fragment>
        { this.state.post && 
          this.getArticle(this.state.post)
        }
       
      </Fragment>
    );
  }
  
}

export default Post;