import React,  { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'reactstrap';
import Image from 'react-bootstrap/Image';

class Article extends Component {
    

    render() {

        let newprops = this.props;
        let { description, content, author, urlToImage, title } = newprops.data;
        return(

            <Card>
            <CardHeader>Article General</CardHeader>
            <CardBody>
            <Image src={urlToImage} fluid />
            <CardTitle>{title}</CardTitle>
            <blockquote className="blockquote mb-0">
                <p>
                {' '}
                {description} {content}{' '}
                </p>
                <CardFooter className="blockquote-footer">
                <cite title="Source Title">{author}</cite>
                </CardFooter>
            </blockquote>
            </CardBody>
        </Card>
        )
    }
}

export default Article;