import '../../styles/hardarts.css';

const SplitBoardingCO = () => {
  return (
    <div className='hardartswrapper'>
      <div className='hardartheader'>
        <p>
          <b className='hardartstitle'>
            <i>Splitboarding in Colorado </i>
          </b>
        </p>
        <p>
          <span className='hardartsdivider'>
            <b> By: </b> <i>tbetty </i>
          </span>
          <span className='hardartsdivider'>
            <b>Category: </b>
            <i>Snowboarding </i>
          </span>

          <span className='hardartsdivider'>
            <b>Views: </b> <i>412.4k</i>
          </span>

          <span>
            <b>Posted: </b>
            <i>September 26, 2021</i>
          </span>
        </p>
      </div>
      <hr />
      <div className='splitboardingcobg'></div>
      <hr />
      <br />
      <div>
        <h3>Snowpack</h3>
        <p>
          Many of you already know this but it is worth reiteration. Colorado
          has an awful snowpack. Avalanches are a near constant risk and terrain
          choice is the best form of mitigation. For most of the winter (until
          spring conditions set in) I stick to lower angle terrain and typically
          stay below treeline. Gladed zones offer many anchor points to
          stabilize snowpack and lower angle terrain is less likely to slide.
          Watching the avalanche forecast from CAIC is a must as well. It offers
          key insights into what to look for and how to prepare for a day in the
          backcountry
        </p>
        <hr />
        <br />
        <h3>Skintracks</h3>
        <p>
          The beauty of Colorado, especially in the Front Range, is access.
          There is a ton of terrain available within a short approach from well
          maintained highways. This lets me get out and see a lot of different
          zones but it also makes it easy to get into trouble if you haven't
          done proper research.
        </p>
        <hr />
        <br />
        <h3>Downhill</h3>
        <p>
          I try to pick zones where I can easily access the skin track again
          from the bottom of my line. Skiing shorter vertical but being able to
          take multiple laps often makes for a fulfilling day when huge vert and
          long lines is a dangerous game.
        </p>
      </div>
    </div>
  );
};

export default SplitBoardingCO;
