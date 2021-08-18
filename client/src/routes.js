import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Header from './components/nav/header';
import LowerNav from './components/nav/lowernav';
import Adventure from './components/adventure';
import Culture from './components/culture';
import Gear from './components/gear';
import News from './components/news';
import Films from './components/films';
import Shop from './components/shop';
import Skiing from './components/skiing';
import Snowboarding from './components/snowboarding';
import MoreSports from './components/moresports';
import MTBing from './components/mtbing';
import Surfing from './components/surfing';
import Tickets from './components/tickets';
import Join from './components/join';
import Stash from './components/stash';
import Forums from './components/forums';
import Contests from './components/contests';
import Footer from './components/nav/footer';
import Tours from './components/tours';
const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <LowerNav />

        <Switch>
          {/* <Route path='/connect' component={Connect} /> */}
          <Route path='/adventure' component={Adventure} />
          <Route path='/culture' component={Culture} />
          <Route path='/gear' component={Gear} />
          <Route path='/news' component={News} />
          <Route path='/films' component={Films} />
          <Route path='/shop' component={Shop} />
          <Route path='/skiing' component={Skiing} />
          <Route path='/snowboarding' component={Snowboarding} />
          <Route path='/surfing' component={Surfing} />
          <Route path='/mtbiking' component={MTBing} />
          <Route path='/moresports' component={MoreSports} />
          <Route path='/tickets' component={Tickets} />
          <Route path='/join' component={Join} />
          <Route path='/stash' component={Stash} />
          <Route path='/forums' component={Forums} />
          <Route path='/contests' component={Contests} />
          <Route path='/tours' component={Tours} />

          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
