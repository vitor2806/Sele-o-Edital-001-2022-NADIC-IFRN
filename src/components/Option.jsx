export default function Option(props) {
  return (
    <input
      type="text"
      className="form-control bg-transparent border border-start-0 border-end-0 border-top-0 border-warning p-2 text-white my-2 option"
      name={`${"option"}${props.number}`}
      id={`${"option"}${props.number}`}
      placeholder={`${"Opção"} ${props.number}`}
    />
  );
}
