import { useState } from 'react';
import '../../styles/join.css';
import SignInCard from './signincard';
import { Modal } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PeopleIcon from '@material-ui/icons/People';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import tgrpick from '../../images/tgrpick.png';

const Join = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  return (
    <>
      <div className='joinformwrapper'>
        <div className='joincontent'>
          <p className='joinheader'>JOIN THE STASH</p>
          <form className='joinform'>
            <input
              type='email'
              placeholder='Enter your email'
              style={{
                width: '30%',
                textAlign: 'center',
                color: 'black',
                fontSize: '60%',
              }}
            />
            <button className='joinformsubmit'>JOIN</button>
          </form>
          <div className='joinsignin'>
            <p>
              Already a member?{' '}
              <span onClick={() => handleOpen()} classname='joinsignin'>
                Sign in now
              </span>
            </p>
          </div>
          {state ? (
            <Modal open={state} onClose={handleClose} onClick={handleClose}>
              <div className='signincard'>
                <SignInCard />
              </div>
            </Modal>
          ) : null}
          <div className='joinbenefitsheader'>
            <p>
              See the benefits
              <ArrowDropDownIcon style={{ fontSize: '30px' }} />
            </p>
          </div>
        </div>
      </div>
      <div className='joincontformat'>
        <h2 className='joincontheader'>What you get</h2>
        <hr />
        <br />
        <div className='row'>
          <div className='col-4'>
            <CameraRollIcon style={{ fontSize: '90px' }} />
            <br />
            <h4>FREE MOVIES</h4>
            <br />
            <p>
              Now you can stream a ton of films on{' '}
              <a href='/films/watch'>TGR Instant</a> for FREE: Anytime,
              anywhere. Feel the stoke!
            </p>
          </div>
          <div className='col-4'>
            <CameraAltIcon style={{ fontSize: '90px' }} />
            <br />
            <h4>CONTRIBUTE TO TGR</h4>
            <br />
            <p>
              Post your own videos, photos, and stories to TetonGravity.com and
              build your following.
            </p>
          </div>
          <div className='col-4'>
            <PeopleIcon style={{ fontSize: '90px' }} />
            <br />
            <h4>SHARE ADVENTURE</h4>
            <br />
            <p>
              Connect with your favorite TGR athletes, our awesome partners, and
              other outdoor lovers just like you.
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className='joingetfamouswrapper'>
        <div className='joingetfamouscontent'>
          <br />
          <h1 className='joingetfamouscontentheader'>Get Internet Famous</h1>
          <p>
            We pick out and feature great content from The Stash every day on
            TetonGravity.com and our social channels. Views, followers, and
            Internet fame rolls in!
          </p>
          <br />
        </div>
      </div>

      <div className='joincontformat'>
        <h2 classname='joincontheader'>How it works</h2>
        <hr />
        <br />
        <div className='row'>
          <div className='col-4'>
            <ArrowUpwardIcon style={{ fontSize: '6vw' }} /> <br />
            <h4>UPLOAD YOUR STUFF</h4>
            <p>
              Upload your cool content and you'll see it on{' '}
              <a href='/films/watch'>The Stash homepage</a> right away.
            </p>
          </div>
          <div className='col-4'>
            <img src={tgrpick} alt='logo' width='170vw' />
            <br /> <h4> GET PICKED</h4>
            <p>
              Every day we pick out the latest and greatest to show off in our
              social hcannels and on TetonGravity.com
            </p>
          </div>
          <div className='col-4'>
            <TrendingUpIcon style={{ fontSize: '6vw' }} /> <br />
            <h4>FEEL THE LOVE</h4>
            <p>
              Ourd audience is full of action and adventure seekers and they
              will shower you with stoke!
            </p>
          </div>
        </div>
        <br />
        <hr />
      </div>

      <div className='joingetstartedwrapper'>
        <h1 className='joingetstartedheader'>Ready to get started?</h1>
        <h2 className='joingetstartedcont'>
          It's a snap to sign up - just enter your email below to get
          started.It's also <b>completely free!</b>
        </h2>
        <form className='joinform'>
          <input
            type='email'
            placeholder='Enter your email'
            style={{
              width: '30%',
              textAlign: 'center',
              color: 'black',
              fontSize: '60%',
            }}
          />
          <button className='joinformsubmit'>GET STARTED</button>
        </form>
        <div className='joinsignin'>
          <p className='joingetstartedcont2'>
            Already a member?{' '}
            <span onClick={() => handleOpen()} classname='joinsignin'>
              Sign in now
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Join;
