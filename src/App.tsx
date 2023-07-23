import Clock from './components/clock/Clock';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import './styles/App.css';
import { FaCog } from 'react-icons/fa';

const App = () => {
  const handleOptionsClick = () => {
    console.log('options');
  };
  return (
    <>
      <div className='container'>
        <Logo />
        <Menu />
        <Clock />
        <button className='options-button' onClick={handleOptionsClick}>
          <FaCog className='options-icon' />
        </button>
      </div>
    </>
  );
};

export default App;
