interface PropsType {
  id: number;
  fontType: string;
  active: number;
  setActive: (arg: number) => void;
}

const Font = ({ id, fontType, active, setActive }: PropsType) => {
  return (
    <button
      onClick={() => setActive(id)}
      className={`${fontType} ${
        active === id ? "bg-neutral-950 text-neutral-200" : "bg-neutral-200"
      } p-2 rounded-full w-10 h-10 flex justify-center items-center`}
    >
      Aa
    </button>
  );
};

export default Font;
