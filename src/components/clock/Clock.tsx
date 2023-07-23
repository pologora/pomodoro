import { useEffect, useState } from 'react';
import './Clock.style.css';

type ClockProps = {
  font: string;
  color: string;
  time: number;
};

const SPEED = 1000; // 1000 milliseconds

const Clock = ({ font, color, time }: ClockProps): JSX.Element => {
  const [timer, setTimer] = useState(time * 60 * 1000);
  const [isRuning, setIsRuning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const totalSeconds = Math.floor(timer / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    setTimer(time * 60 * 1000);
  }, [time]);

  const handleTimerClick = () => {
    if (isRuning) {
      pauseTimer();
    } else if (!isRuning) {
      startTimer();
    }
  };

  const startTimer = () => {
    setIsRuning(true);
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1000) {
          clearInterval(id);
          return prev;
        }
        return prev - 1000;
      });
      console.log(timer);
    }, SPEED);

    setIntervalId(id);
    console.log('start');
  };

  const resetTimer = () => {
    setIsRuning(false);
    setTimer(time);
  };

  const pauseTimer = () => {
    clearInterval(intervalId!);
    setIsRuning(false);
    console.log('pause');
  };

  useEffect(() => {
    setTimer(time * 60 * 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [time, intervalId]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className='clock' style={{ fontFamily: font }}>
      <div
        className='clock__circular-progress'
        style={{
          background: `conic-gradient(${color} ${270}deg, var(--clr-dark) 0deg)`,
        }}
      >
        <span className='clock__time'>{`${formatTime(minutes)}:${formatTime(
          seconds
        )}`}</span>
        <button onClick={handleTimerClick} className='clock__action button'>
          {isRuning ? 'pause' : 'start'}
        </button>
      </div>
    </div>
  );
};
export default Clock;
