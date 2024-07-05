// import React from 'react'

// import Container from './container'
// import * as styles from './footer.module.css'

// const Footer = () => (
//   <Container as="footer">
//     <div className={styles.container}>
//       Built with <a href="https://contentful.com/">Contentful</a> and{' '}
//       <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
//       <a href="https://github.com/contentful/starter-gatsby-blog">Source</a>
//     </div>
//   </Container>
// )

// export default Footer
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Container from './container';
import * as styles from './footer.module.css';

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className={styles.leftLinks}>
        <a href="mailto:contact@yourdomain.com">Contact Us</a> &middot;{' '}
        {/* <a href="https://littlepawscare.com">Back to site</a> */}
      </div>
      <div className={styles.socialIcons}>
        <a href="https://twitter.com/littlepawscare">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/littlepawscare/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/littlepawscare.ngo">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.linkedin.com/company/79681184/ngo">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  </Container>
);

export default Footer;


