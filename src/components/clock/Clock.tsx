import './Clock.style.css';

const Clock = () => {
  return (
    <div className='clock'>
      <div className='clock__circular-progress'>
        <span className='clock__time'>21:11</span>
        <button className='clock__action button'>start</button>
      </div>
    </div>
  );
};
export default Clock;
