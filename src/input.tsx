interface PropsType {
  title: string;
  value: number;
  set: (arg: number) => void;
}

const Input = ({ title, value, set }: PropsType) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <h1 className="text-neutral-400">{title}</h1>
      <input
        type="number"
        className="w-28 h-10 bg-neutral-300/30 rounded-full p-3"
        value={value}
        onChange={(e) => set(+e.target.value)}
      />
    </div>
  );
};

export default Input;
