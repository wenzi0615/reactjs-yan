import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Display extends Component {
    constructor(){
        super();
        const img0 = require('./puppies/puppy0.jpeg');
        const img1 = require('./puppies/puppy1.jpeg');
        const img2 = require('./puppies/puppy2.jpeg');
        const img3 = require('./puppies/puppy3.jpeg');
        const img4 = require('./puppies/puppy4.jpeg');
        this.state = {
            images: [img0, img1, img2, img3, img4],
            details: ["white", "yellow", "black", "colorful", "brown"],
            index: 1
        };
    }

    componentDidMount(){
        this.displayImage();
    }

    displayImage() {
      var randomNum = Math.floor(Math.random() * 5);
      this.setState({
            index: randomNum
        });
    }

    render() {
        return (
            <div>
              <br/>
              <Container>
                <Row>
                  <Col>
                    <h3>Welcome to the Random Puppies App</h3>
                  </Col>
                  <Col>
                    <Button as="input" type="button" value="Next" onClick={this.displayImage.bind(this)}/>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col>
                    <h5>Image:</h5>
                    <img src={this.state.images[this.state.index]} alt="puppy"/>
                  </Col>
                  <Col>
                    <h5>Details: We are {this.state.details[this.state.index]} puppies!</h5>
                  </Col>
                </Row>
              </Container>
            </div>
        );
    }
}

export default Display;
