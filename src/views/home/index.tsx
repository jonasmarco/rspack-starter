import Dog from './images/dog.png';
import FilletLogo from './images/logo.svg';
import './index.scss';

const HomeView = (): JSX.Element => (
  <div className="HomeView">
    <img src={FilletLogo} alt="Logo Fillet" />
    <img src={Dog} alt="Dog" />
  </div>
);

export default HomeView;
