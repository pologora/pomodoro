import './Clock.style.css';

const Clock = () => {
  return (
    <div className='clock'>
      <div className='clock__time-line'>
        <div className='clock__time'>
          <span>21</span>:<span>11</span>
        </div>
        <button className='clock__action'>pause</button>
      </div>
    </div>
  );
};
export default Clock;
