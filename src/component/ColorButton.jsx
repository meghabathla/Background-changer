const ColorButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`outline-none px-4 py-1 rounded-full ${
        props.value == "#000000" ? `text-white` : `text-black`
      } shadow-lg`}
      style={{ backgroundColor: props.value }}
    >
      {props.name}
    </button>
  );
};

export { ColorButton };
