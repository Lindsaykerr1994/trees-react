export default function TreeCard(tree) {
  return (
    <li className="tcard">
      <img
        className="tcard__image"
        src="https://www.wood-database.com/wp-content/uploads/english-oak-s-200x200.jpg"
        alt=""
      ></img>
      <div className="tcard__overlay">
        <div className="tcard__header">
          <svg className="tcard__arc" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" fill="#fff" />
          </svg>

          <div className="tcard__header-text">
            <h3 className="tcard__title">Common Oak</h3>
            <span className="tcard__subtitle">Quercus Robur</span>
          </div>
        </div>
        <p class="tcard__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
        </p>
      </div>
    </li>
  );
}
