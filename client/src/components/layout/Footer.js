import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <Fragment>
      <MDBFooter className='fbc'>
        <MDBCol>
          <div className='fm'>
            <Link className='fic' to={{ pathname: 'https://www.facebook.com/david.battye.79' }} target='_blank'>
              <i className='fab fa-facebook-f fa-2x'>
              </i>
            </Link>
            <Link className='fic' to={{ pathname: 'https://twitter.com/explore' }} target="_blank">
              <i className='fab fa-twitter fa-2x'>
              </i>
            </Link>
            <Link className='fic' to={{ pathname: 'https://myaccount.google.com/' }} target='_blank'>
              <i className='fab fa-google-plus fa-2x'>
              </i>
            </Link> 
            <Link className='fic' to={{ pathname: 'https://www.linkedin.com/in/david-battye-9932665a/' }} target='_blank'>
              <i className='fab fa-linkedin-in fa-2x'>
              </i>
            </Link>
            <Link className='fic' to={{ pathname: 'https://www.instagram.com/8._.tai._.8/' }} target='_blank'>
              <i className='fab fa-instagram fa-2x'>
              </i>
            </Link>
            <Link className='fic' to={{ pathname: '/https://www.pinterest.co.uk/' }} target='_blank'>
              <i className='fab fa-pinterest fa-2x'> </i>
            </Link>
          </div>
        </MDBCol>
        <div className='text-center fcb'>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <Link to='https://www.MDBootstrap.com' className='fcc'> Future Source </Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </Fragment>
  );
}

export default Footer;