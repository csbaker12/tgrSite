import carousel1 from '../../images/carousel/tgrmain1.jpeg';
import carousel2 from '../../images/carousel/tgrmain2.jpeg';
import carousel3 from '../../images/carousel/tgrmain3.jpeg';
import carousel4 from '../../images/carousel/tgrmain4.jpeg';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Carousel autoplay='true'>
        <div>
          <RouterLink to='/films'>
            <img src={carousel1} alt='logo' width='100%' />
          </RouterLink>
        </div>
        <div>
          <RouterLink to='/films'>
            <img src={carousel2} alt='logo' width='100%' />
          </RouterLink>
        </div>
        <div>
          <RouterLink to='/contests'>
            <img src={carousel3} alt='logo' width='100%' />
          </RouterLink>
        </div>
        <div>
          <RouterLink to='/forums'>
            <img src={carousel4} alt='logo' width='100%' />
          </RouterLink>
        </div>
      </Carousel>
    </>
  );
};

export default Home;
