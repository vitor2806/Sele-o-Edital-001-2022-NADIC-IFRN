export default function Option(props) {
  return (
    <input
      type="text"
      className="form-control bg-light bg-opacity-10 border-2 border-top-0 border-bottom-0 border-warning p-2 text-white my-2 option"
      name={`${"option"}${props.number}`}
      id={`${"option"}${props.number}`}
      placeholder={`${"Opção"} ${props.number}`}
    />
  );
}
