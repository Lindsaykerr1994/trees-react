export default function BinaryButton({ innerText, options }) {
  let typeFilter = options.typeFilter;
  let onClickFn = options.onClickFn;
  return (
    <button className={`filter-btn px-3 ${typeFilter === innerText ? "active" : ""}`} onClick={onClickFn}>
      {innerText}
    </button>
  );
}
