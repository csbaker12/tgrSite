import '../../../styles/about.css';
import { Link as RouterLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='aboutwrapper'>
        <h2>ABOUT TETON GRAVITY RESEARCH</h2>
        <hr />
        <p>
          <RouterLink to='/contributors' className='aboutlink'>
            TGR Staff
          </RouterLink>
          |
          <RouterLink to='/faq' className='aboutlink'>
            FAQ
          </RouterLink>
          |
          <RouterLink to='/contact' className='aboutlink'>
            Contact
          </RouterLink>
        </p>
        <hr />
        <div className='row'>
          <div className='col-8'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/4sjok_EUO8E'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
            <hr />
            <p>
              It all began with a trip to Mt. Hood at the age of 14. From the
              first day of camp on, skiing has become my greatest passion. My
              love for the mountains via skiing has since blossomed into hobbies
              such as backpacking, fly fishing, and climbing.{' '}
            </p>
            <p>
              While being outside will always be a core part of who I am, I have
              developed a passion for web development as well. With a background
              in Engineering, I am a very logical thinker and coding has come
              naturally. Working on projects such as cloning TGR's site has
              become something I really enjoy doing. It's challenging and
              captivating and it provides loads of mental stimulation.
            </p>
          </div>
          <div className='col-4'>
            <div>
              <h4>OUR FOUNDER</h4>
              <div className='founderme'>
                <div className='founderbg'>
                  <p>
                    <span className='foundertitle'>Developer</span>
                    <br /> Cam Baker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
