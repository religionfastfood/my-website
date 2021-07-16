import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

function My_5(){
    return(
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
    );
}

export default My_5;