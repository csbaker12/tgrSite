import { Link, withRouter } from 'react-router-dom';
import '../../styles/header.css';
import Search from './search';
import Settings from './settings';
import Options from './options';
import logo from '../../images/tgrlogo.jfif';

const Header = () => {
  return (
    <>
      <div className='row'>
        <nav className='navbar '>
          <div className='col-3'>
            <Options />
          </div>
          <div className='col-3'>
            <Link to='/' className='navbar-brand d-flex align-items-center'>
              <img src={logo} alt='logo' width='60%' />
            </Link>
          </div>
          <div className='col-2'>
            <div className='row'>
              <div className='col-6'>
                <Search />
              </div>
              <div className='col-6'>
                <Settings />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default withRouter(Header);
