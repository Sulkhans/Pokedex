const Head = ({ id, name }) => {
  const format = (name) =>
    name
      .split("-")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");

  return (
    <header>
      <div className="h-20 md:h-14 flex justify-center items-end bg-neutral-800" />
      <div className="text-center m-auto flex justify-center bg-transparent">
        <div className="triangle-left" />
        <div className="min-w-[8rem] bg-neutral-800 text-white min-[1600px]:px-6">
          <h1 className="-mt-9 mb-1 text-2xl sm:landscape:text-[26px] min-[1600px]:landscape:text-[32px]">
            {name && format(name)}
          </h1>
          <h2 className="text-sm min-[1600px]:text-base">
            {name && `#${id.toString().padStart(4, 0)}`}
          </h2>
        </div>
        <div className="triangle-right" />
      </div>
    </header>
  );
};

export default Head;
