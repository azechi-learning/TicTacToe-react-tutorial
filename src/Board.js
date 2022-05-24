import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div>
    {repeat(3, i => (
      <div key={i} className="board-row">
        {repeat(
          3,
          shift(i * 3, j => (
            <Square key={j} value={squares[j]} onClick={() => onClick(j)} />
          ))
        )}
      </div>
    ))}
  </div>
);
export default Board;

function repeat(count, func) {
  return [...Array(count)].map((_, i) => func(i));
}

function shift(bias, func) {
  return i => func(i + bias);
}
