import TreeCard from "./tree_card";
export default function CardsContainer({ allTrees }) {
  return (
    <ul className="tcard-container">
      {allTrees.map((tree, i) => (
        <TreeCard tree={tree} key={i} />
      ))}
    </ul>
  );
}
