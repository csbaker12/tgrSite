import StarIcon from '@material-ui/icons/Star';
import '../../styles/contests.css';

const Contests = () => {
  return (
    <>
      <div className='conteststop'>
        <div className='contesttopcontent'>
          <StarIcon style={{ fontSize: '700%' }} />
          <p className='contesttoptitle'>TGR CONTESTS</p>
          <p className='contesttopsub'>ENTER NOW AND WIN BIG</p>
        </div>
      </div>
      <div className='contest'>
        <div className='row'>
          <div className='col-8'>
            <div className='fishcontestimg'></div>
          </div>
          <div className='col-1'></div>
          <div className='col-3'>
            <h3>King of the Taylor</h3>
            <hr />
            <p>
              The 2021 King of the Taylor contest is meant for amateur fisherman
              to take a step into the spotlight! Think you have what it takes to
              be a professional fly fisher? The winner of this two day event
              will get the opportunity to travel to New Zealand with our crew
              and film for our upcoming film <b>Poetry in Motion</b>
            </p>
            <button className='contestbutton'>Enter Now</button>
          </div>
        </div>
      </div>

      <div className='contest'>
        <div className='row'>
          <div className='col-8'>
            <div className='skiingcontestimg'></div>
          </div>
          <div className='col-1'></div>
          <div className='col-3'>
            <h3>Getting Pitted</h3>
            <hr />
            <p>
              Do you crave bottomless pow turns? This season, we are in search
              of the best undiscovered pow skiers! Simply upload photos and
              videos of yourself in the whiteroom and tag @tetongravity to
              enter. The winner will get a trip to Japan to film for a segment
              in our upcoming movie <b>Bottomless</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contests;
