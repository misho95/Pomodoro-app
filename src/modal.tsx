import Color from "./color";
import Font from "./font";
import Input from "./input";
import { useState } from "react";

interface PropsType {
  setShow: (arg: boolean) => void;
  color: number;
  setColor: (arg: number) => void;
  font: number;
  setFont: (arg: number) => void;
  initalTime: number[];
  setInitialTime: (arg: number[]) => void;
}

const Modal = ({
  setShow,
  color,
  setColor,
  font,
  setFont,
  initalTime,
  setInitialTime,
}: PropsType) => {
  const [newFont, setNewFont] = useState(font);
  const [newColor, setNewColor] = useState(color);
  const [pomodoro, setPomodoro] = useState(initalTime[0]);
  const [short, setShort] = useState(initalTime[1]);
  const [long, setLong] = useState(initalTime[2]);

  const applySettings = () => {
    setFont(newFont);
    setColor(newColor);
    setShow(false);
    setInitialTime([pomodoro, short, long]);
  };

  return (
    <div className="bg-black/50 fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center">
      <div className="w-w500 h-fit py-5 bg-neutral-100 rounded-lg flex flex-col">
        <div className="w-full flex justify-between px-5 pb-6 pt-3 border-b-px1 border-neutral-400 select-none">
          <h1 className="text-xl font-semibold">Settings</h1>
          <button onClick={() => setShow(false)}>X</button>
        </div>
        <div className=" text-lg font-semibold  px-5 pt-3 select-none">
          Time (Minutes)
        </div>
        <div className="w-full flex justify-between px-5 pb-6 pt-3 border-b-px1 border-neutral-400 select-none">
          <Input title={"pomodoro"} value={pomodoro} set={setPomodoro} />
          <Input title={"short break"} value={short} set={setShort} />
          <Input title={"long break"} value={long} set={setLong} />
        </div>
        <div className="w-full flex justify-between items-center px-5 pb-6 pt-3 border-b-px1 border-neutral-400 select-none ">
          <h1 className="text-lg font-semibold">Fonts</h1>
          <div className="flex gap-3">
            <Font
              id={0}
              fontType={"font-sans"}
              active={newFont}
              setActive={setNewFont}
            />
            <Font
              id={1}
              fontType={"font-mono"}
              active={newFont}
              setActive={setNewFont}
            />
            <Font
              id={2}
              fontType={"font-serif"}
              active={newFont}
              setActive={setNewFont}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center px-5 pt-3 select-none">
          <h1 className="text-lg font-semibold">Color</h1>
          <div className="flex gap-3">
            <Color
              id={0}
              colorType={"bg-yellow-500"}
              active={newColor}
              setActive={setNewColor}
            />
            <Color
              id={1}
              colorType={"bg-red-500"}
              active={newColor}
              setActive={setNewColor}
            />
            <Color
              id={2}
              colorType={"bg-green-500"}
              active={newColor}
              setActive={setNewColor}
            />
          </div>
        </div>
        <div className="w-full h-8 relative">
          <button
            onClick={applySettings}
            className={`${
              color === 0
                ? "bg-yellow-500"
                : color === 1
                ? "bg-red-500"
                : "bg-green-500"
            } text-white w-40 h-10 rounded-full absolute -bottom-10 left-1/2 -translate-x-1/2 select-none`}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
