import { useEffect, useState } from "react";
import { Link } from "react-router";

const countDownFrom = 3;

const CountdownTimer = () => {
  const [secRemaining, setSecRemaining] = useState(countDownFrom * 60);

  useEffect(() => {
    if (secRemaining <= 0) return;

    const interval = setInterval(() => {
      setSecRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secRemaining]);

  const min = Math.floor(secRemaining / 60);
  const sec = secRemaining % 60;

  return (
    <div className="grow text-2xl flex justify-center items-center">
      <p className={`${secRemaining === 0 && "hidden"}`}>
        {min}:{sec}
      </p>
      <div className={`${secRemaining != 0 && "hidden"} `}></div>
      {secRemaining === 0 && (
        <div className="flex gap-4 flex-col">
          <p>Exam is completed</p>
          <Link to={"/"}>Go to home screen</Link>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
