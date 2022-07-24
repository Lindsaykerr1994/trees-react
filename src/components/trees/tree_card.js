export default function TreeCard({ tree }) {
  return (
    <li className="tcard">
      <img className="tcard__image" src={`${tree.img_path}`} alt=""></img>
      <div className="tcard__overlay">
        <div className="tcard__header">
          <div className="tcard__text">
            <h3 className="tcard__title w-100">{tree.common_name}</h3>
            <span className="tcard__subtitle">{tree.scientific_name}</span>
            <hr className="my-2"></hr>
            <p className="tcard__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
