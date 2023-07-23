import { useState } from 'react';
import Clock from './components/clock/Clock';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import './styles/App.css';
import { FaCog } from 'react-icons/fa';
import { Font, Color, MenuOption } from './enums/Enums';

const defaultOptions = {
  time: 25,
  shortBreak: 5,
  longBreak: 15,
  color: Color.Color1,
  font: Font.Font1,
};

const defaultCurrentOption: string = MenuOption.Pomodoro;

const App = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [currentMenuOption, setCurrentMenuOption] =
    useState(defaultCurrentOption);

  const handleOptionsClick = () => {
    console.log('options');
  };
  return (
    <>
      <div className='container'>
        <Logo />
        <Menu
          color={options.color}
          font={options.font}
          setCurrentMenuOption={setCurrentMenuOption}
        />
        <Clock />
        <button className='options-button' onClick={handleOptionsClick}>
          <FaCog className='options-icon' />
        </button>
      </div>
    </>
  );
};

export default App;
