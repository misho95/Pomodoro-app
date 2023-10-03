interface PropsType {
  id: number;
  text: string;
  active: number;
  setActive: (arg: number) => void;
  color: number;
}

const Button = ({ id, text, active, setActive, color }: PropsType) => {
  return (
    <button
      onClick={() => setActive(id)}
      className={`${
        active === id
          ? `${
              color === 0
                ? "bg-yellow-500"
                : color === 1
                ? "bg-red-500"
                : "bg-green-500"
            } text-neutral-950`
          : "text-neutral-500"
      }  rounded-full w-40 select-none`}
    >
      {text}
    </button>
  );
};

export default Button;
