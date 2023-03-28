import "./input.css";

export default function Input({ type, onChange, value }) {
  return (
    <input className="input" value={value} typ={type} onChange={onChange} />
  );
}
