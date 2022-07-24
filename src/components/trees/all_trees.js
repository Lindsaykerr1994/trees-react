import HeaderContainer from "./header_container";
import FilterRow from "./filter_row";
import CardsContainer from "./cards_container";
import { getTrees } from "../../data/trees";
import { useState } from "react";

export default function AllTrees() {
  const [alphaFilter, setAlphaFilter] = useState([]);
  let allTrees = getTrees();
  const selectLetter = (e) => {
    let letter = e.currentTarget.innerText;
    if (alphaFilter.length && alphaFilter.includes(letter)) {
      let newFilter = alphaFilter.filter((el) => {
        return el !== letter;
      });
      setAlphaFilter(newFilter);
    } else {
      setAlphaFilter([...alphaFilter, letter]);
    }
  };
  return (
    <div className="row">
      <div className="col-12 px-3">
        <HeaderContainer message={"All Trees"} />
        <FilterRow selectLetter={selectLetter} alphaFilter={alphaFilter} />
        <div className="row cards-container">
          <div className="col-12">
            <CardsContainer allTrees={allTrees} />
          </div>
        </div>
      </div>
    </div>
  );
}
