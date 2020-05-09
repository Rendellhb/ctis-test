import HomeScreen from '../home/HomeView';
import PictureScreen from '../picture/PictureView';
import MoreScreen from '../more/MoreView';
import i18n from '../../translations';

const feedIcon = require('../../../assets/images/tabbar/feed.png');
const pictureIcon = require('../../../assets/images/tabbar/picture.png');
const dotsIcon = require('../../../assets/images/tabbar/dots.png');

const tabNavigationData = [
  {
    name: i18n.t('feed'),
    component: HomeScreen,
    icon: feedIcon,
  },
  {
    name: i18n.t('picture'),
    component: () => {props.navigation.navigate('PictureScreen')},
    icon: pictureIcon,
  },
  {
    name: i18n.t('more'),
    component: MoreScreen,
    icon: dotsIcon,
  },
];

export default tabNavigationData;