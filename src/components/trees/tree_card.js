export default function TreeCard({ tree }) {
  return (
    <li className="tcard">
      <img className="tcard__image" src={`${tree.img_path}`} alt=""></img>
      <div className="tcard__overlay">
        <div className="tcard__header">
          <h3 className="tcard__title">{tree.common_name}</h3>
          <span className="tcard__subtitle">{tree.scientific_name}</span>
        </div>
      </div>
    </li>
  );
}