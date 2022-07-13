import TreeCard from "./tree_card";
export default function CardsContainer() {
  let trees = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ul className="tcard-container">
      {trees.map((t, i) => (
        <TreeCard tree={t} key={i} />
      ))}
    </ul>
  );
}
