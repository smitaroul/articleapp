import React, { Component, Fragment } from 'react';
import axios from 'axios';
import forEach from 'lodash.foreach';
import constant from './constants';
import SideCard from './SideCard'
import { Row } from 'reactstrap';


class GetPost extends Component {

    state = { post: null }

    componentDidMount() {
        let { query } = this.props; 
        let API_LINK_LIST = constant.NEW_APILIST;
        let API_LINK = API_LINK_LIST['default'];
        
        if(query) {
            API_LINK = API_LINK_LIST[query] ? API_LINK_LIST[query] : API_LINK_LIST['default'];
        }
        
        axios.get(API_LINK)
            .then(response => {
                this.setState({ post: response.data })
                this.getCards(response.data);
            });
         
    }

    getCards = (posts) => {
        let articleCol = [];
        let articleRow = [];
        let articles = posts.status === 'ok' ? posts.articles : [];
        
        forEach(articles, (data, i) => {
            articleCol.push(<SideCard key={`Col_${i}`} card={data} />)
            if((i+1) % 3 === 0) {
                articleRow.push(<Row key={`Row_${i}`} className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">{articleCol}</Row>);
                articleCol = [];
            }
        })
        return articleRow;
    }
  
    render() {
        

        return (
            <Fragment>
            { this.state.post && 
                this.getCards(this.state.post)
            }
            </Fragment>
        );
    }
  
}

export default GetPost;