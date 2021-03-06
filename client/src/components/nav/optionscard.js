import '../../styles/options.css';
import LanguageIcon from '@material-ui/icons/Language';
import { Link as RouterLink } from 'react-router-dom';

const OptionsCard = () => {
  return (
    <div className='optionscardconfig'>
      <div className='row optionscardrow'>
        <RouterLink
          to='/adventure'
          className='col-3 optionscarditem left adventure'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Adventure</p>
        </RouterLink>
        <RouterLink
          to='/culture'
          className='col-3 optionscarditem left culture'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Culture</p>
        </RouterLink>
        <RouterLink to='/gear' className='col-3 optionscarditem left gear'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Gear/Tech</p>
        </RouterLink>
        <RouterLink to='/news' className='col-3 optionscarditem right news'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>News</p>
        </RouterLink>
      </div>
      <div class='row optionscardrow'>
        <RouterLink
          to='/skiing'
          className='col-3 optionscarditem left skiingoption'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Ski</p>
        </RouterLink>
        <RouterLink
          to='/snowboarding'
          className='col-3 optionscarditem left boardingoption'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Snowboard</p>
        </RouterLink>
        <RouterLink
          to='/mtbiking'
          className='col-3 optionscarditem left bikingoption'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Mountain Bike</p>
        </RouterLink>
        <RouterLink
          to='/surfing'
          className='col-3 optionscarditem right surfingoption'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Surf</p>
        </RouterLink>
      </div>
      <div class='row optionscardrow'>
        <RouterLink
          to='/moresports'
          className='col-3 optionscarditem left moreoption'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>More Sports</p>
        </RouterLink>
        <RouterLink to='/films' className='col-3 optionscarditem left films'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Films</p>
        </RouterLink>
        <RouterLink to='/shop' className='col-3 optionscarditem left shop'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Shop</p>
        </RouterLink>
        <RouterLink
          to='/tours'
          className='col-3 optionscarditem right tourtickets'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Tour Tickets</p>
        </RouterLink>
      </div>
      <div class='row optionscardrow'>
        <RouterLink
          to='/contests'
          className='col-3 optionscarditem leftbottom contests'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Contests</p>
        </RouterLink>
        <RouterLink
          to='/forums'
          className='col-3 optionscarditem leftbottom forums'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Forums</p>
        </RouterLink>
        <RouterLink
          to='/stash'
          className='col-3 optionscarditem leftbottom stash'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Stash</p>
        </RouterLink>
        <RouterLink to='/join' className='col-3 optionscarditem join'>
          <LanguageIcon style={{ fontSize: '200%' }} /> <p>Join</p>
        </RouterLink>
      </div>
    </div>
  );
};

export default OptionsCard;
