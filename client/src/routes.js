import React, { useEffect } from 'react';
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
import About from './components/footerroutes/about';
import Contributors from './components/footerroutes/contributors';
import Contact from './components/footerroutes/contact';
import FAQ from './components/footerroutes/faq';
import FilmDetails from './components/filmdetails';
import ContestSignup from './components/contests/contestsignup';
import Article from './components/article';
import ResetScroll from './components/utils/resetscroll';
import Auth from './components/auth';
import Admin from './components/admin';
import AdminForum from './components/admin/adminforum';
import AdminArticles from './components/admin/adminarticles';
import AuthGuard from './hoc/authguard';
import AddArticle from './components/article/add';
import EditArticle from './components/article/edit';
import AddThread from './components/thread/add';
import Thread from './components/thread';
import Profile from './components/profile';
import AccountVerify from './components/auth/verification';
import ArticleLanding from './components/articlelanding';
import SearchResults from './components/searchresults';
import FamousWater from './components/artshard/famouswater';
import WhereAreCaves from './components/artshard/wherearecaves';
import SummerViews from './components/artshard/summerviews';
import HowMuchIsTooMuch from './components/artshard/howmuchistoomuch';
import BozeFlyWorksReview from './components/artshard/bozeflyworksreview';
import WildfireUpdate from './components/artshard/wildfireupdate';
import CurbingFires from './components/artshard/curbingfires';
import DangersOfFriendship from './components/artshard/dangersoffriendship';
import WinterAsABum from './components/artshard/winterasabum';
import ChasingWhiteroom from './components/artshard/chasingwhiteroom';
import SplitBoardingCO from './components/artshard/splitboardingco';
import SpringSnowboarding from './components/artshard/springsnowboarding';
import ExploringTrestle from './components/artshard/exploringtrestle';
import BikingColorado from './components/artshard/bikingcolorado';
import SurfingOregon from './components/artshard/surfingoregon';
import ExploringSlotCanyons from './components/artshard/exploringslotcanyons';
import LearningToClimb from './components/artshard/learntoclimb';
import FlyFishingMT from './components/artshard/flyfishingmt';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from './components/utils/tools';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotifications } from '../src/store/actions/index';
import { isAuthUser } from './store/actions/users_actions';

const Routes = (props) => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notifications && notifications.error) {
      const msg = notifications.msg ? notifications.msg : 'Error';
      showToast('ERROR', msg);
      dispatch(clearNotifications());
    }
    if (notifications && notifications.success) {
      const msg = notifications.msg ? notifications.msg : 'Success';
      showToast('SUCCESS', msg);
      dispatch(clearNotifications());
    }
  }, [notifications, dispatch]);

  useEffect(() => {
    dispatch(isAuthUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ResetScroll />
        <Header />
        <ToastContainer />
        <LowerNav />

        <Switch>
          {/* <Route path='/connect' component={Connect} /> */}
          {/* hard arts */}
          <Route path='/article/famouswater/hard' component={FamousWater} />
          <Route path='/article/wherearecaves/hard' component={WhereAreCaves} />
          <Route path='/article/summerviews/hard' component={SummerViews} />
          <Route path='/article/curbingfires/hard' component={CurbingFires} />
          <Route path='/article/surfingoregon/hard' component={SurfingOregon} />
          <Route path='/article/flyfishingmt/hard' component={FlyFishingMT} />

          <Route
            path='/article/learningtoboulder/hard'
            component={LearningToClimb}
          />

          <Route
            path='/article/exploringslotcanyons/hard'
            component={ExploringSlotCanyons}
          />

          <Route
            path='/article/bikingcolorado/hard'
            component={BikingColorado}
          />
          <Route
            path='/article/exploringtrestle/hard'
            component={ExploringTrestle}
          />

          <Route
            path='/article/springsnow/hard'
            component={SpringSnowboarding}
          />

          <Route
            path='/article/splitboardingco/hard'
            component={SplitBoardingCO}
          />
          <Route path='/article/winterasabum/hard' component={WinterAsABum} />
          <Route
            path='/article/chasingwhiteroom/hard'
            component={ChasingWhiteroom}
          />

          <Route
            path='/article/dangersoffriendship/hard'
            component={DangersOfFriendship}
          />

          <Route
            path='/article/howmuchistoomuch/hard'
            component={HowMuchIsTooMuch}
          />
          <Route
            path='/article/bozeflyworksreview/hard'
            component={BozeFlyWorksReview}
          />
          <Route
            path='/article/wildfireupdate/hard'
            component={WildfireUpdate}
          />

          {/*regular routes */}
          <Route path='/verification' component={AccountVerify} />
          <Route path='/profile' component={Profile} />
          <Route path='/thread/new' component={AddThread} />
          <Route path='/thread/:id' component={Thread} />
          <Route path='/admin/edit/:id' component={AuthGuard(EditArticle)} />
          <Route path='/admin/add' component={AuthGuard(AddArticle)} />
          <Route path='/admin/articles' component={AuthGuard(AdminArticles)} />
          <Route path='/admin/forum' component={AuthGuard(AdminForum)} />
          <Route path='/admin' component={AuthGuard(Admin)} />
          <Route path='/auth' component={Auth} />
          <Route path='/article/:id' component={Article} />
          <Route path='/contestsignup' component={ContestSignup} />
          <Route path='/filmdetails' component={FilmDetails} />
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
          <Route path='/company' component={About} />
          <Route path='/contributors' component={Contributors} />
          <Route path='/contact' component={Contact} />
          <Route path='/faq' component={FAQ} />
          <Route path='/article' component={ArticleLanding} />
          <Route path='/searchresults' component={SearchResults} />

          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
