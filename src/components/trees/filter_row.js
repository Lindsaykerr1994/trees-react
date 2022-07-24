import AlphabetArray from "../general/alphabet_array";
import BinaryButton from "../general/binary_btn";

export default function FilterRow({ selectLetter, alphaFilter, selectWoodType, typeFilter }) {
  let woodTypes = ["Hardwood", "Softwood"];
  return (
    <>
      <div className="row px-5 pb-2 pt-3">
        <div className="col-auto mx-auto">
          <div className="filter-container binary-btn-container">
            {woodTypes.map((type, i) => (
              <BinaryButton innerText={type} options={{ typeFilter: typeFilter, onClickFn: selectWoodType }} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="row px-5 pt-2 pb-3" id="alphabet-filter">
        <div className="col-11 mx-auto">
          <AlphabetArray clickFunction={selectLetter} alphaFilter={alphaFilter} />
        </div>
      </div>
      <hr className="col-11 mx-auto"></hr>
    </>
  );
}
