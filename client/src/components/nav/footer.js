import { withRouter } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <>
      <div className='footerwrapper'>
        <div className='row'>
          <div className='col-3'>
            <ul className='footerli'>
              <li>About Us</li>
              <li>Contributors</li>
              <li>Careers</li>
              <li>Advertise</li>
              <li>Contact US</li>
              <li>Press Releases</li>
            </ul>
          </div>
          <div className='col-3'>
            <ul className='footerli'>
              <li>Athletes</li>
              <li>Staff</li>
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
              <a href='/'>TETON GRAVITY RESEARCH</a> &copy; 2017 ALL RIGHTS
              RESERVED.
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
