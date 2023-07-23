import './Menu.style.css';
import { useState } from 'react';
import { MenuOption } from '../../enums/Enums';

type MenuProps = {
  color: string;
  font: string;
  setCurrentMenuOption: (newOption: string) => void;
};

const Menu = ({
  color,
  font,
  setCurrentMenuOption,
}: MenuProps): JSX.Element => {
  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setCurrentMenuOption(name);
  };

  return (
    <div className='menu' style={{ fontFamily: font }}>
      <button
        onClick={handleMenuClick}
        name={MenuOption.Pomodoro}
        className='menu__button body-small-text button menu__button--active'
      >
        {MenuOption.Pomodoro}
      </button>
      <button
        onClick={handleMenuClick}
        name={MenuOption.ShortBreak}
        className='menu__button body-small-text button'
      >
        {MenuOption.ShortBreak}
      </button>
      <button
        onClick={handleMenuClick}
        name={MenuOption.LongBreak}
        className='menu__button body-small-text button'
      >
        {MenuOption.LongBreak}
      </button>
    </div>
  );
};
export default Menu;
