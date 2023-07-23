import './Menu.style.css';

const Menu = () => {
  return (
    <div className='menu'>
      <button className='menu__button body-small-text button menu__button--active'>pomodoro</button>
      <button className='menu__button body-small-text button'>
        short break
      </button>
      <button className='menu__button body-small-text button'>
        long break
      </button>
    </div>
  );
};
export default Menu;
