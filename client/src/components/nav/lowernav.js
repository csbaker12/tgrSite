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
      <div className='row navbar2'>
        <p
          className='col lownavitem1 lownavitem action'
          onMouseOver={handleOpen}>
          Action <ArrowDropDownIcon style={{ fontSize: '30px' }} />
        </p>
        <NavLink
          to='/adventure'
          className='col lownavitem adventure lownavlink'>
          Adventure
        </NavLink>
        <NavLink to='/culture' className='col lownavitem culture lownavlink'>
          Culture
        </NavLink>
        <NavLink to='/gear' className='col lownavitem gear lownavlink'>
          Gear/Tech
        </NavLink>
        <NavLink to='/news' className='col lownavitem news lownavlink'>
          News
        </NavLink>
        <NavLink to='/films' className='col lownavitem films lownavlink'>
          Films
        </NavLink>
        <NavLink to='/shop' className='col lownavitem shop lownavlink'>
          Shop
        </NavLink>
      </div>
      {state ? (
        <div className='row lowernavlist' onMouseLeave={handleClose}>
          <NavLink
            to='/skiing'
            className='lowernavlistitem lownavlink col-2 prime skiing'>
            Skiing
          </NavLink>
          <NavLink
            to='/snowboarding'
            className='lowernavlistitem lownavlink col-2 prime boarding'>
            Snowboarding
          </NavLink>
          <NavLink
            to='/mtbiking'
            className='lowernavlistitem lownavlink col-2 prime biking'>
            Mountain Biking
          </NavLink>
          <NavLink
            to='/surfing'
            className='lowernavlistitem lownavlink col-2 prime surfing'>
            Surfing
          </NavLink>
          <NavLink
            to='/moresports'
            className='lowernavlistitem lownavlink col-2 prime more'>
            More Sports
          </NavLink>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(LowerNav);
