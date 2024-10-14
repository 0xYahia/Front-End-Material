function Counter({ counter, handleIncrement }) {
  const { id, name, count } = counter;

  return (
    <>
      <div>
        <span className="font-bold mr-2">{name}</span>
        <span
          className={`text-lg mr-4 ${
            count === 0 ? "bg-yellow-300" : "bg-cyan-300"
          }`}
        >
          {count}
        </span>
        <button
          onClick={() => handleIncrement(id)}
          className="btn btn-primary btn-xs"
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
