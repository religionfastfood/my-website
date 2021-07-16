import { Tab, } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import '../component-css/About_CSS.css';

function About(){
    return(
        <section class="ftco-section">
            <div class="container">
                <div class="row g-xl-5">
                    <div class="col-md d-flex align-items-center">
                        <div class="img-about">                           
                        </div>
                    </div>
                    <div class="col-md d-flex align-items-center">
                        <div class="my-5">
                            <Tab.Container id="about-me-tabs" defaultActiveKey="first">
                                    <Nav variant="pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">About Me</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Skills</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Experience</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p>Some text about me.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p>Some text about mah skillz.</p>
                                        </Tab.Pane>
                                        <Tab.Pane evenKey="third">
                                            <p>Some text about my jobs.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                            </Tab.Container>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;