import React, { Component } from 'react';
import { Col } from 'reactstrap';
import LinesEllipsisLoose from 'react-lines-ellipsis/lib/loose';
import { Card, CardImg, CardBody, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';

class SideCard extends Component {

    render(){
        let newprops = this.props || {};
        let card = newprops.card || {};
        let { author, description, publishedAt, title, urlToImage, source} = card;
        return(
            <Col xs={6} md={4} tag="aside" className="Card__Col pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                <a href="/article/1234" style={{ cursor: 'pointer' }}>
                <Card>
                <CardImg top width="100%" src={urlToImage} alt="banner" style={{ height: '15em', background: '#ccc' }} />
                <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary text-truncate">{title}</CardTitle>
                    <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>{source && source.name}, {author}</CardSubtitle>
                    <LinesEllipsisLoose className="text-secondary mb-4" style={{ fontSize: '0.75rem' }} text={description} maxLine='3' ellipsis='...' lineHeight='16' />    
                </CardBody>
                <CardFooter>
                <small className="text-muted">{publishedAt}</small>
                </CardFooter>
                </Card>
                </a>
            </Col>
        )
    }
  
}

export default SideCard;