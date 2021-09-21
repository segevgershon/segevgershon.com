import Welcome from '~/pages/welcome/welcome';
import Footer  from '~/components/footer/footer';
import { Container, Row, Col } from 'react-grid-system';

function App()
{
    return(
        <Container><Row>
            <Col md={4}></Col>
            <Col xs={12} md={4}>
                <Welcome />
            </Col>
            <Col md={4}></Col>
        </Row><Row>
            <Col>
                <Footer />
            </Col>
        </Row></Container>
    );
};

export default App;
