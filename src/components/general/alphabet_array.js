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
    <ul>
      {letters.map((el, i) => (
        <li key={i} onClick={clickFunction} className={alphaFilter.includes(el) ? "active" : ""}>
          {el}
        </li>
      ))}
    </ul>
  );
}
