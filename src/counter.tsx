import { useEffect, useState } from "react";
import Popup from "./popup";

const countUpTo = 3;

function CountdownTimer() {
  const [secSpent, setSecSpent] = useState(0);

  useEffect(() => {
    if (secSpent >= countUpTo * 60) return;

    const interval = setInterval(() => {
      setSecSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secSpent]);

  const min = Math.floor(secSpent / 60);
  const sec = secSpent % 60;

  return (
    <div className="grow text-2xl flex justify-center items-center">
      <p className={``}>
        {min}:{sec}
      </p>
      <div className={`hidden`}>{secSpent === countUpTo * 60 && <Popup />}</div>
    </div>
  );
}

export default CountdownTimer;
