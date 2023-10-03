interface PropsType {
  id: number;
  colorType: string;
  active: number;
  setActive: (arg: number) => void;
}

const Color = ({ id, colorType, active, setActive }: PropsType) => {
  return (
    <button
      onClick={() => setActive(id)}
      className={`${colorType} p-2 rounded-full w-10 h-10 flex justify-center items-center`}
    >
      {active === id ? (
        <span className="material-symbols-outlined select-none">done</span>
      ) : null}
    </button>
  );
};

export default Color;
