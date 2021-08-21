import { withRouter } from 'react-router-dom';
import '../../styles/footer.css';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='footerwrapper'>
        <div className='row'>
          <div className='col-3'>
            <ul className='footerli'>
              <li>
                <RouterLink to='/company' className='footerlink'>
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink to='/contributors' className='footerlink'>
                  Contributors
                </RouterLink>
              </li>
              <li>Careers</li>
              <li>Advertise</li>
              <li>
                <RouterLink to='/contact' className='footerlink'>
                  Contact Us
                </RouterLink>
              </li>
              <li>Press Releases</li>
            </ul>
          </div>
          <div className='col-3'>
            <ul className='footerli'>
              <li>
                <RouterLink to='/contributors' className='footerlink'>
                  Athletes
                </RouterLink>
              </li>
              <li>
                <RouterLink to='/contributors' className='footerlink'>
                  Staff
                </RouterLink>
              </li>
              <li>Partners</li>
              <li>TGR Studios</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='col-3'>
            <form>
              <label>Get TGR Email Updates</label>
              <br />
              <input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                style={{
                  textAlign: 'center',
                  color: 'black',
                  width: '80%',
                }}></input>
              <button type='submit' className='footersend'>
                SEND IT
              </button>
            </form>
          </div>
          <div className='col-3'>
            <p>We proudly support:</p>
          </div>
        </div>

        <div className='row footerbottom'>
          <div className='col-4 footercol'>
            <p>
              <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
                TETON GRAVITY RESEARCH
              </a>{' '}
              &copy; 2017 ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className='col-4 footercol'>
            <p>TERMS OF USE & PRIVACY POLICY</p>
          </div>
          <div className='col-4'>
            <p>PARTNER OF USATODAY LIFESTYLE/ACTION SPORTS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Footer);
