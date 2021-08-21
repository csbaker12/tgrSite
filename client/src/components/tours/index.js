import '../../styles/tours.css';
import { useState } from 'react';
import { Modal } from '@material-ui/core';
import TourModal from './tourmodal';
import { Link as RouterLink } from 'react-router-dom';

const Tours = () => {
  const [buy, setBuy] = useState(false);

  const handleOpen = () => {
    setBuy(true);
  };

  const handleClose = () => {
    setBuy(false);
  };

  return (
    <>
      <div className='tourtop'>
        <div className='tourtopcontent'>
          <p className='tourtopsub'>3... 2... 1... DROPPING!</p>

          <p className='tourtoptitle'>TGR FILM TOURS</p>
          <p className='tourtopsub'>TICKETS & TOUR DATES BELOW</p>
        </div>
      </div>
      <div className='tourswrapper'>
        <div className='toursearch'>
          <hr />
          <h3>Search for shows</h3>
          <form className='toursearchform'>
            <input
              type='text'
              placeholder='Enter city, state, or country'
              className='toursearchinput'
            />
            <button className='toursearchbtn'>Set Location</button>
          </form>
          <hr />
          <div className='row'>
            <div className='col-3 center'>
              <div className='skifilmimage'>
                <div className='skifilmimglabel'>
                  <h5 style={{ color: 'white' }}>Treasure State</h5>
                  <p>SKI FILM | 2021</p>
                </div>
              </div>
              <p>
                Nothing but Montana coldsmoke and good times. Buckle up and
                enjoy the ride
              </p>
              <RouterLink to='/filmdetails'>
                <button className='filmdetailsbtn'>Film Details</button>
              </RouterLink>
            </div>
            <div className='col-9'>
              <h3>Upcoming BBowl Slidin Shows</h3>
              <div className='showingcard'>
                <div className='row'>
                  <div className='col-3'>
                    <div className='row'>
                      <div className='col-3'></div>
                      <div className='col-3'>
                        <p className='tourday'>28</p>
                      </div>
                      <div className='col-3 tourmonth'>
                        <p>
                          Aug <br />
                          2021
                        </p>
                      </div>
                      <div className='col-3'></div>
                    </div>
                  </div>
                  <div className='col-7 tourlocation'>
                    <p>
                      <b>Denver, CO, USA</b>
                      <br />
                      Cam's House
                    </p>
                  </div>
                  <div className='col-2 buybtn' onClick={() => handleOpen()}>
                    <p>
                      <b>BUY</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className='showingcard'>
                <div className='row'>
                  <div className='col-3'>
                    <div className='row'>
                      <div className='col-3'></div>
                      <div className='col-3'>
                        <p className='tourday'>30</p>
                      </div>
                      <div className='col-3 tourmonth'>
                        <p>
                          Aug <br />
                          2021
                        </p>
                      </div>
                      <div className='col-3'></div>
                    </div>
                  </div>
                  <div className='col-7 tourlocation'>
                    <p>
                      <b>Bozeman, MT, USA</b>
                      <br />
                      The Park
                    </p>
                  </div>
                  <div className='col-2 buybtn' onClick={() => handleOpen()}>
                    <p>
                      <b>BUY</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {buy ? (
        <Modal open={buy} onClose={handleClose}>
          <div className='tourmodalwrapper'>
            <TourModal />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Tours;
