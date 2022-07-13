import HeaderContainer from "./header_container";
import CardsContainer from "./cards_container";

export default function AllTrees() {
  return (
    <div className="row">
      <div className="col-12 px-3">
        <HeaderContainer message={"All Trees"} />
        <div className="row cards-container">
          <div className="col-12">
            <CardsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
