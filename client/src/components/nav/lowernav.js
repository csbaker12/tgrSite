import { useState } from 'react';
import '../../styles/lowernav.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { withRouter } from 'react-router';
////we need to use links to make adventure div into a link
import { NavLink } from 'react-router-dom';

const LowerNav = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };
  return (
    <>
      <div className=' navbar2'>
        <p className=' lownavitem lownavitem action' onMouseOver={handleOpen}>
          Action <ArrowDropDownIcon style={{ fontSize: '30px' }} />
        </p>
        <div className='lownavitem  adventure'>
          <NavLink to='/adventure' className='lownavlink'>
            Adventure
          </NavLink>
        </div>

        <div className='lownavitem  culture'>
          <NavLink to='/culture' className=' lownavlink'>
            Culture
          </NavLink>
        </div>

        <div className='lownavitem  gear'>
          <NavLink to='/gear' className='  lownavlink'>
            Gear/Tech
          </NavLink>
        </div>

        <div className='lownavitem  news'>
          <NavLink to='/news' className=' lownavlink'>
            News
          </NavLink>
        </div>

        <div className='lownavitem  films'>
          <NavLink to='/films' className='lownavlink'>
            Films
          </NavLink>
        </div>

        <div className='lownavitem  shop'>
          <NavLink to='/shop' className=' lownavlink'>
            Shop
          </NavLink>
        </div>
      </div>
      {state ? (
        <div className=' lowernavlist' onMouseLeave={handleClose}>
          <NavLink
            to='/skiing'
            className='lowernavlistitem lownavlink  prime skiing'>
            Skiing
          </NavLink>
          <NavLink
            to='/snowboarding'
            className='lowernavlistitem lownavlink  prime boarding'>
            Snowboarding
          </NavLink>
          <NavLink
            to='/mtbiking'
            className='lowernavlistitem lownavlink  prime biking'>
            Mountain Biking
          </NavLink>
          <NavLink
            to='/surfing'
            className='lowernavlistitem lownavlink  prime surfing'>
            Surfing
          </NavLink>
          <NavLink
            to='/moresports'
            className='lowernavlistitem lownavlink  prime more'>
            More Sports
          </NavLink>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(LowerNav);
