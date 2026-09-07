import "./Spiner.css";

type SpinnerProps = {
  text?: string;
};

export default function Spinner({ text = "טוען נתונים..." }: SpinnerProps) {
  return (
    <div className="spinner-container">
      <div className="spinner-circle" />
      <p className="spinner-text">{text}</p>
    </div>
  );
}