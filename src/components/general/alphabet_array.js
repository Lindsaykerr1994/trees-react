export default function AlphabetArray({ clickFunction, alphaFilter }) {
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <ul className="filter-container mb-0">
      {letters.map((el, i) => (
        <li key={i} onClick={clickFunction} className={`filter-btn ${alphaFilter.includes(el) ? " active" : ""}`}>
          {el}
        </li>
      ))}
    </ul>
  );
}
