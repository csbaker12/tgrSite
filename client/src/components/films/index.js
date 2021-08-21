import '../../styles/films.css';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Films = () => {
  return (
    <>
      <div className='filmswrapper'>
        <h1>Teton Gravity Research Films</h1>
        <hr />
        <div className='row'>
          <div className='col-2'>
            <FormControl className='formformat'>
              <InputLabel>SORT BY</InputLabel>
              <Select>
                <MenuItem>Most Recent</MenuItem>
                <MenuItem>Alphabetical</MenuItem>
                <MenuItem>Best Sellers</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='col-2'>
            <FormControl className='formformat'>
              <InputLabel>FILTER BY</InputLabel>
              <Select>
                <MenuItem>All Sports</MenuItem>
                <MenuItem>Ski</MenuItem>
                <MenuItem>More Sports</MenuItem>
                <MenuItem>Adventure</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='col-8'>
            <h6>NOTE: FILTERS WILL BE CONNECTED LATER</h6>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-4'>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie1'>
                <div className='movietitle'>
                  <p>
                    <b>TREASURE STATE</b>
                    <br />
                    Skiing | 2019
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie2'>
                <div className='movietitle'>
                  <p>
                    <b>LUNKER LANDING</b>
                    <br />
                    More Sports | 2018
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie3'>
                <div className='movietitle'>
                  <p>
                    <b>NORTHERN ROCKIES</b>
                    <br />
                    Adventure | 2015
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>

          <div className='col-4'>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie4'>
                <div className='movietitle'>
                  <p>
                    <b>WILD WEST</b>
                    <br />
                    Adventure | 2020
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie5'>
                <div className='movietitle'>
                  <p>
                    <b>ALPINE</b>
                    <br />
                    More Sports | 2017
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie6'>
                <div className='movietitle'>
                  <p>
                    <b>EYE OF THE STORM</b>
                    <br />
                    Skiing | 2014
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>
          <div className='col-4'>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie7'>
                <div className='movietitle'>
                  <p>
                    <b>ROCK RUMBLE</b> <br />
                    More Sports | 2021
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie8'>
                <div className='movietitle'>
                  <p>
                    <b>HUMAN POWERED</b>
                    <br />
                    Skiing | 2016
                  </p>
                </div>
              </div>
            </RouterLink>
            <RouterLink to='/filmdetails' className='filmrouterlink'>
              <div className='movie9'>
                <div className='movietitle'>
                  <p>
                    <b>SCENIC ROUTE</b>
                    <br />
                    Adventure | 2013
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Films;
