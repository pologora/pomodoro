import './Menu.style.css';
import { useState } from 'react';
import { MenuOption } from '../../enums/Enums';

type MenuProps = {
  color: string;
  font: string;
  setCurrentMenuOption: (newOption: MenuOption) => void;
};

const Menu = ({
  color,
  font,
  setCurrentMenuOption,
}: MenuProps): JSX.Element => {
  const [activeButton, setActiveButton] = useState<MenuOption>(
    MenuOption.Pomodoro
  );
  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setCurrentMenuOption(name as MenuOption);
    setActiveButton(name as MenuOption);
  };

  const getActiveButtonStyle = (name: MenuOption) => {
    if (name === activeButton) {
      return { backgroundColor: color, color: '#161932' };
    }
  };

  return (
    <div className='menu' style={{ fontFamily: font }}>
      <button
        onClick={handleMenuClick}
        name={MenuOption.Pomodoro}
        className='menu__button body-small-text button menu__button--active'
        style={getActiveButtonStyle(MenuOption.Pomodoro)}
      >
        {MenuOption.Pomodoro}
      </button>
      <button
        onClick={handleMenuClick}
        name={MenuOption.ShortBreak}
        className='menu__button body-small-text button'
        style={getActiveButtonStyle(MenuOption.ShortBreak)}
      >
        {MenuOption.ShortBreak}
      </button>
      <button
        onClick={handleMenuClick}
        name={MenuOption.LongBreak}
        className='menu__button body-small-text button'
        style={getActiveButtonStyle(MenuOption.LongBreak)}
      >
        {MenuOption.LongBreak}
      </button>
    </div>
  );
};
export default Menu;
