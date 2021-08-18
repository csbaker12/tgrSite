import { useState } from 'react';
import '../../styles/forums.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DescriptionIcon from '@material-ui/icons/Description';
const Forums = () => {
  const [ski, setSki] = useState(true);
  const [bike, setBike] = useState(true);
  const [adventure, setAdventure] = useState(true);
  const [gear, setGear] = useState(true);
  const [connections, setConnections] = useState(true);
  const [media, setMedia] = useState(true);
  const [chatter, setChatter] = useState(true);
  const [tech, setTech] = useState(true);

  const handleSki = () => {
    setSki(!ski);
  };

  const handleBike = () => {
    setBike(!bike);
  };

  const handleAdventure = () => {
    setAdventure(!adventure);
  };

  const handleGear = () => {
    setGear(!gear);
  };

  const handleConnections = () => {
    setConnections(!connections);
  };

  const handleMedia = () => {
    setMedia(!media);
  };

  const handleChatter = () => {
    setChatter(!chatter);
  };

  const handleTech = () => {
    setTech(!tech);
  };

  return (
    <>
      <div className='forumswrapper'>
        <h4>TETON GRAVITY RESEARCH FORUMS</h4>
        <p>
          Welcome to the TGR Forums and the biggest and most honest conversation
          in the outdoor world! For guidelines about the forums, check out our
          Roolz. For info about what’s changing in the forums, see our FAQ.
        </p>
        <div>
          <div className='row'>
            <div className='align'>
              <div className='col-10'>
                <div className='forum'>
                  <div className='row forumlabel'>
                    <div className='col-8'>SKI/SNOWBOARD</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleSki()}>
                      {ski ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Your place for all things skiing and snowboarding
                  </p>
                  {ski ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>BIKE</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleBike()}>
                      {ski ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Bike junkies check in here!
                  </p>
                  {bike ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>ADVENTURE/OTHER SPORTS</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleAdventure()}>
                      {adventure ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Enjoy the outdoors. Your place for surfing, kayaking,
                    fishing, climbing and anything outdoors!
                  </p>
                  {adventure ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>GEAR & BUY/SELL</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleGear()}>
                      {gear ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Talk about equipment, buy and sell gear
                  </p>
                  {gear ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>CONNECTIONS</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleConnections()}>
                      {connections ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Find jobs, rides, fellow gimps, shred partners mountain meet
                    ups and more
                  </p>
                  {connections ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>MEDIA & ARTS</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleMedia()}>
                      {media ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>Media talk here!</p>
                  {media ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>CHATTER, BLATHER & ARCHIVES</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleChatter()}>
                      {chatter ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Random stuff and old stuff!
                  </p>

                  {chatter ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className='forumlabel row '>
                    <div className='col-8 '>TECH SUPPORT</div>
                    <div className='col-2 '>THREADS</div>
                    <div className='col-1 '>LAST POST</div>
                    <div
                      className='col-1'
                      align='right'
                      forumshow
                      onClick={() => handleTech()}>
                      {tech ? (
                        <>
                          <RemoveCircleIcon />
                        </>
                      ) : (
                        <AddCircleIcon />
                      )}
                    </div>
                  </div>
                  <p className='forumdescription'>
                    Check in here to ask TGR that question that's been driving
                    you nuts!
                  </p>
                  {tech ? (
                    <>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                      <div className='forumentry'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='row'>
                              <div className='col-1'>
                                <InsertDriveFileIcon
                                  style={{ fontSize: '50px' }}
                                />
                              </div>
                              <div className='col-11'>
                                <p>
                                  <b>Title</b>
                                </p>
                                <p>Description of thread</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <p>Threads: 12</p>
                            <p>Posts: 151</p>
                          </div>
                          <div className='col-2'>
                            <p>lorem ipsum</p>
                            <p>
                              By <b>cbakeski</b>
                            </p>
                            <p>Today</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className='col-2 alignmediabar'>
                <div>
                  <p>
                    <b>THE STASH</b>
                  </p>
                  <p>
                    UPLOAD YOUR OWN: <VideocamIcon /> <CameraAltIcon />{' '}
                    <DescriptionIcon />
                  </p>
                  <p>
                    <b>POPULAR THIS WEEK ON TGR:</b>
                  </p>

                  <p>
                    <b>FEATURED TGR STASH PICK</b>
                  </p>
                  <p>
                    <b>FEATURED TRIP REPORT</b>
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

export default Forums;
