export default function Input({ label, value, handleOnChange, param }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        min="0"
        onChange={(e) => handleOnChange(e, param)}
      />
    </p>
  );
}
