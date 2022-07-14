import HeaderContainer from "./header_container";
import CardsContainer from "./cards_container";
import { getTrees } from "../../data/trees";

export default function AllTrees() {
  let allTrees = getTrees();
  return (
    <div className="row">
      <div className="col-12 px-3">
        <HeaderContainer message={"All Trees"} />
        <div className="row cards-container">
          <div className="col-12">
            <CardsContainer allTrees={allTrees} />
          </div>
        </div>
      </div>
    </div>
  );
}
