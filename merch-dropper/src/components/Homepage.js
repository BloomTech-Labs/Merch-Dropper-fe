import React from 'react';
import '../App.css';
import {
    Button,
    Row,
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle,
    Jumbotron,
    Container,
    Media
  } from 'reactstrap';

  const Homepage = () => {
      return (
        <div className="homepage" style={{backgroundColor: '#F3F3F3'}}>
            {/* Begin hero image */}
            <Jumbotron style={{ backgroundImage: `url('https://i.ibb.co/SKTW5GZ/Adobe-Stock-316954524-Preview1-1.png')`, backgroundSize: 'cover', width: '100vw' }}>
                <Container>
                    <Row>
                        <Col sm={{ size: 'auto'}} style={{width: '25vw', height: '60vh'}}>
                            <h1 className="display-3" style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>CUSTOM</h1>
                            <h2 className="display-4" style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>T-SHIRTS</h2>
                            <h1 style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>AND MORE</h1>
                            <div className="line2" />
                            <p style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>Need merch? We've got your back.</p>
                            <p style={{textAlign:'center', color: 'white', margin: '5% 0'}}>
                                Full service merchandising solutions from Merch Dropper and Scalable Press, no matter the size.
                            </p>
                            <p style={{textAlign: 'center'}}>
                                <Button color="primary" style={{width: '10vw'}}>Let's Go!</Button>
                                <br />
                                <Button outline color="light" style={{width: '10vw', margin: '5% 0'}}>Learn More</Button>
                            </p>
                        </Col>
                        <Col sm={{ size: 'auto'}} style={{width: '25vw', height: '60vh', margin: '0 5vw'}}>
                            <Media object src="https://i.ibb.co/wQWhj2C/Group-6.png" style={{width: '15vw'}} />
                            <Media object src="https://i.ibb.co/7XQ70x1/Group-5.png" style={{width: '15vw'}} />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            {/* End hero image */}
            {/* Begin featured shops section */}
            <div style={{width: '100vw'}} className="featuredDiv">
                <Container style={{padding: '0 5%', borderTop: '2px solid #026FC2', borderLeft: '2px solid #026FC2', borderTopLeftRadius: '10px'}}>
                    <Row>
                        <h1 className="mb-4" style={{color: '#026FC2', backgroundColor: '#F3F3F3', fontSize:'2rem', marginTop: '-2%', width: '25%', textAlign: 'center'}}>
                            Featured Shops
                            </h1>
                    </Row>
                    <Row style={{width: '100%'}}>
                        <Media object src="https://i.ibb.co/HTvq2CY/image-6.png" style={{width: '30%', height: '10%'}} />
                        <Media object src="https://i.ibb.co/XzjYthv/image-7.png" style={{width: '30%', height: '10%' ,margin: '0 5%'}} />
                        <Media object src="https://i.ibb.co/vzsn9kf/image-9.png" style={{width: '30%', height: '10%'}} />
                    </Row>
                </Container>
                <div>
                    <Row style={{width: '100vw', display: 'flex', justifyContent: 'space-evenly'}} className="mt-5">

                        <Card style={{width: '18vw', height: '60vh'}}>
                            <CardImg top width="100%" src="https://i.ibb.co/zhpXpNy/Bg.png" alt="Card image cap" style={{height: '70%'}} />
                            <CardBody>
                                <CardTitle style={{color: '#026FC2' }}>Adorable Kitten Mug</CardTitle>
                                <CardText>Like cats? We make merch your way.</CardText>
                            </CardBody>
                        </Card>

                        <Card style={{width: '18vw', height: '60vh'}}>
                            <CardImg top width="100%" src="https://i.ibb.co/jH9JXZy/Image-2.png" alt="Card image cap" style={{height: '70%'}} />
                            <CardBody>
                                <CardTitle style={{color: '#026FC2' }}>iPhone 11 Case</CardTitle>
                                <CardText>Like cats? We make merch your way.</CardText>
                            </CardBody>
                        </Card>

                        <Card style={{width: '18vw', height: '60vh'}}>
                            <CardImg top width="100%" src="https://i.ibb.co/6bnHXp2/Bg-1.png" alt="Card image cap" style={{height: '70%'}}/>
                            <CardBody>
                                <CardTitle style={{color: '#026FC2' }}>Adorable Jumper</CardTitle>
                                <CardText>Like cats? We make merch your way.</CardText>
                            </CardBody>
                        </Card>

                        <Card style={{width: '18vw', height: '60vh'}}>
                            <CardImg top width="100%" src="https://i.ibb.co/N1TNcJg/Screen-Shot-2020-02-05-at-11-15-1.png" alt="Card image cap" style={{height: '70%'}}/>
                            <CardBody>
                                <CardTitle style={{color: '#026FC2' }}>Fitted Tee</CardTitle>
                                <CardText>Like cats? We make merch your way.</CardText>
                            </CardBody>
                        </Card>

                    </Row>
                </div>
            </div>
            {/* End featured shops section */}
        </div>
      )
  }

  export default Homepage;