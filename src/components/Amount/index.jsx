import './style.css';

const Amount = ({ value, onChange }) => {
  const handelIncrement = () => {
    onChange(value + 1);
  };

  const handelDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="amount">
      <button className="amount__btn" onClick={handelDecrement}>
        –
      </button>
      <div className="amount__count">{value}</div>
      <button className="amount__btn" onClick={handelIncrement}>
        +
      </button>
    </div>
  );
};

export default Amount;
