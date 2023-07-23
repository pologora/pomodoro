import { useState, useEffect } from 'react';
import Clock from './components/clock/Clock';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import './styles/App.css';
import { FaCog } from 'react-icons/fa';
import { Font, Color, MenuOption } from './enums/Enums';

type TimerOptions = {
  [MenuOption.Pomodoro]: number;
  [MenuOption.LongBreak]: number;
  [MenuOption.ShortBreak]: number;
  color: Color;
  font: Font;
};

const defaultOptions: TimerOptions = {
  [MenuOption.Pomodoro]: 25,
  [MenuOption.LongBreak]: 15,
  [MenuOption.ShortBreak]: 5,
  color: Color.Color2,
  font: Font.Font1,
};

const defaultCurrentOption: MenuOption = MenuOption.Pomodoro;

const App = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [currentMenuOption, setCurrentMenuOption] =
    useState<MenuOption>(defaultCurrentOption);
  const [activeTimer, setActiveTimer] = useState(options[defaultCurrentOption]);

  useEffect(() => {
    console.log(activeTimer);
    switch (currentMenuOption) {
      case MenuOption.Pomodoro:
        setActiveTimer(options.pomodoro);
        break;
      case MenuOption.ShortBreak:
        setActiveTimer(options.shortBreak);
        break;
      case MenuOption.LongBreak:
        setActiveTimer(options.longBreak);
        break;
      default:
        throw new Error('Wrong case in menu option');
    }
  }, [currentMenuOption]);

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
        <Clock font={options.font} color={options.color} time={activeTimer} />
        <button className='options-button' onClick={handleOptionsClick}>
          <FaCog className='options-icon' />
        </button>
      </div>
    </>
  );
};

export default App;
