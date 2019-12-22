import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const IframeStyle = {
    width : "100%",
    height : "1080px",
    border : "none",
    frameBorder : "0",
    margin : "0",
    padding : "0",
    position : "absolute",
    zIndex : "0"
}

export default () => (
    <React.Fragment>
        <iframe style={IframeStyle} src="https://player.vimeo.com/video/203265068?&loop=1&background=1"></iframe>
        <Container style={{zIndex:"2",color:"white"}}>
                <Row>
                    <Col>
                    <h1 style={{textAlign:"center",paddingTop:"350px"}}>I am EXERON</h1>
                    </Col>
                </Row>
                <Row>
                    <Col><p style={{textAlign:"center",paddingTop:"250px"}}>The beginning of the</p></Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                            <img src="/static/off-grid.svg"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col><h3 style={{textAlign:"center",fontWeight:"bolder"}}>REVOLUTION</h3></Col>
                </Row>
        </Container>
    </React.Fragment>

)