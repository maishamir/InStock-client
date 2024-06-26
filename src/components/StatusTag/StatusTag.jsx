import "./StatusTag.scss";

function StatusTag({ status, extraClass }) {
  const inStockClassName = "in-stock";
  const outOfStockClassName = "out-of-stock";
  const statusClass =
    status === "In Stock" ? inStockClassName : outOfStockClassName;

  return <p className={`${statusClass} ${extraClass}`}>{status}</p>;
}

export default StatusTag;
