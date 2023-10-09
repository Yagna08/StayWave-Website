import React, { Fragment } from "react";
import { Button, Container } from "react-bootstrap";

export default function IconNav() {
    return(
        <Fragment>
            <Container>
                <Container fluid={true} className="p-3">
                    <Button variant="">
                        <img src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" height={25} alt="farm"/>
                        <Container className="fw-bold">Farms</Container>
                    </Button>
                </Container>
            </Container>
        </Fragment>
    )
}