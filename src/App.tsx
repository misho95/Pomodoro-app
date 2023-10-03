import Button from "./button";
import { useState, useEffect } from "react";
import Modal from "./modal";

function App() {
  const [color, setColor] = useState(0);
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  const [font, setFont] = useState(0);
  const [initalTime, setInitialTime] = useState([360, 60, 180]);
  const [time, setTime] = useState(initalTime[active]);
  const full = 0;
  const deplet = 302;
  const [stroke, setStroke] = useState(full);
  const [play, setPlay] = useState(false);

  const setActiveButton = (id: number) => {
    setActive(id);
    setPlay(false);
  };

  useEffect(() => {
    const oneStroke = deplet / initalTime[active];
    const calc = initalTime[active] - (initalTime[active] - time);
    setStroke((initalTime[active] - calc) * oneStroke);
  }, [time]);

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          clearInterval(interval);
          return 0;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, play]);

  useEffect(() => {
    setPlay(false);
    setTime(initalTime[active]);
  }, [active, initalTime]);

  return (
    <div
      className={`${
        font === 0 ? "font-sans" : font === 1 ? "font-mono" : "font-serif"
      }`}
    >
      {show && (
        <Modal
          setShow={setShow}
          color={color}
          setColor={setColor}
          font={font}
          setFont={setFont}
          initalTime={initalTime}
          setInitialTime={setInitialTime}
        />
      )}
      <div className="flex justify-center items-center w-full min-h-screen bg-neutral-900">
        <div className="w-11/12 md:w-w500 h-fit flex flex-col items-center gap-10">
          <h1 className="text-5xl text-neutral-400 select-none font-semibold">
            pomodoro
          </h1>
          <div className="w-full flex gap-3 justify-between bg-neutral-950 h-20 rounded-full p-4 text-neutral-500">
            <Button
              id={0}
              text={"pomodoro"}
              active={active}
              setActive={setActiveButton}
              color={color}
            />
            <Button
              id={1}
              text={"short break"}
              active={active}
              setActive={setActiveButton}
              color={color}
            />
            <Button
              id={2}
              text={"long break"}
              active={active}
              setActive={setActiveButton}
              color={color}
            />
          </div>
          <div className=" bg-neutral-800 p-4 w-80 h-80 rounded-full">
            <div className="w-72 h-72 relative">
              <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                <circle
                  className={`stroke-current absolute w-full h-full ${
                    color === 0
                      ? "text-yellow-500"
                      : color === 1
                      ? "text-red-500"
                      : "text-green-500"
                  } bg-neutral-900 rounded-full animate-none`}
                  cx="50"
                  cy="50"
                  r="48"
                  strokeWidth="4"
                  fill="#0a0a0a"
                  strokeDasharray="302"
                  strokeDashoffset={stroke}
                />
              </svg>
              <div className="justify-center items-center w-full h-full text-6xl text-white absolute select-none flex flex-col gap-6">
                <span>{`${Math.floor(time / 60)
                  .toString()
                  .padStart(2, "0")}:${(time % 60)
                  .toString()
                  .padStart(2, "0")}`}</span>
                <button
                  onClick={() => setPlay(!play)}
                  className="text-xl text-neutral-500 hover:text-neutral-400"
                >
                  {play ? "PAUSE" : "PLAY"}
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setShow(!show);
              setPlay(false);
            }}
            className="text-neutral-500 hover:text-neutral-400"
          >
            <span className="material-symbols-outlined text-4xl select-none">
              settings
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
