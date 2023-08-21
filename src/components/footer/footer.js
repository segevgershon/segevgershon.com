import { Container, Row, Col } from 'react-grid-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,
         faSpotify,
         faInstagram,
         faGithub,
         faGitlab } from '@fortawesome/free-brands-svg-icons'
import { get_random_item } from '~/util';
import './footer.css'

const quotes = [
    { 'quote' : 'Nobody exists on purpose. ' +
                'Nobody belongs anywhere. ' +
                'Everybody\'s gonna die. ' +
                'Come watch TV...',
        'by': 'Morty Smith' },

    { 'quote' : 'I\'m not superstitious just a little stitious',
        'by' : 'Michael Scott' },

    { 'quote' : 'A clean box is a happy box',
        'by' : 'Pete' },

    { 'quote' : 'I order the food, you cook the food, ' +
                'then the customer gets the food. ' +
                'We do that for 40 years and then we die. ' +
                'Sounds like a pretty good deal to me, ' +
                'what do you say?',
        'by' : 'Squidward Tentacles' },
];

const quote = get_random_item(quotes)

function Footer() {
    return (
        <div><hr/><Container><Row>

            <Col md={8} sm={6} xs={12}>
                <p style={{ "fontStyle" : "italic" }}>
                    "{quote.quote}"
                </p>
                <p> - {quote.by} </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
                <ul className="social-icons">
                    <li><a className="github" href="https://github.com/segevgershon">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a></li>
                    <li><a className="gitlab" href="https://gitlab.com/segevgershon">
                        <FontAwesomeIcon icon={faGitlab}/>
                    </a></li>
                    <li><a className="instagram" href="https://www.instagram.com/segevgershon/">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a></li>
                    <li><a className="linkedin" href="https://www.linkedin.com/in/segev-gershon/">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a></li>
                    <li><a className="spotify" href="https://open.spotify.com/user/5wvconvwzeyxa0vb997ginzkv?si=437288757c3843e8">
                        <FontAwesomeIcon icon={faSpotify}/>
                    </a></li>
                </ul>
            </Col>
        </Row></Container></div>
    );
}

export default Footer;
