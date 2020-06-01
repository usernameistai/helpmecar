import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBFooter } from 'mdbreact';

const FooterPagePro = () => {
  return (
    <Fragment>
      <MDBFooter className='fbc'>
        <MDBCol>
          <div className='fm'>
            <Link className='fic' to='/https://www.facebook.com/david.battye.79'>
              <i className='fab fa-facebook-f fa-2x'>
              </i>
            </Link>
            <Link className='fic' to='/https://twitter.com/explore'>
              <i className='fab fa-twitter fa-2x'>
              </i>
            </Link>
            <Link className='fic' to='/https://myaccount.google.com/'>
              <i className='fab fa-google-plus fa-2x'>
              </i>
            </Link> 
            <Link className='fic' to='/https://www.linkedin.com/in/david-battye-9932665a/'>
              <i className='fab fa-linkedin-in fa-2x'>
              </i>
            </Link>
            <Link className='fic' to='/https://www.instagram.com/'>
              <i className='fab fa-instagram fa-2x'>
              </i>
            </Link>
            <Link className='fic' to='/https://www.pinterest.co.uk/'>
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

export default FooterPagePro;