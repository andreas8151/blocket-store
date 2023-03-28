import "./button.css";

export default function Button({ title, type, onClick }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {title}
    </button>
  );
}
