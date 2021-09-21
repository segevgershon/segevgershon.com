import { Container, Row, Col } from 'react-grid-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faLinkedinIn, faSpotify, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

function Footer() {
    return (
        <div><hr/><Container><Row>

            <Col md={8} sm={6} xs={12}>
            </Col>

            <Col md={4} sm={6} xs={12}>
                <ul className="social-icons">
                    <li><a className="github" href="#">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a></li>
                    <li><a className="instagram" href="#">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a></li>
                    <li><a className="spotify" href="#">
                        <FontAwesomeIcon icon={faSpotify}/>
                    </a></li>
                    <li><a className="linkedin" href="#">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a></li>
                </ul>
            </Col>
        </Row></Container></div>
    );
}

export default Footer;
