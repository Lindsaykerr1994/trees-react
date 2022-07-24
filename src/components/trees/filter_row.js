import AlphabetArray from "../general/alphabet_array";

export default function FilterRow({ selectLetter, alphaFilter }) {
  return (
    <>
      <div className="row px-5">
        <div className="col">Filter By:</div>
        <div className="col">Alphabet</div>
        <div className="col">Type Of Wood</div>
        <div className="col"></div>
      </div>
      <div className="row px-5" id="alphabet-filter">
        <div className="col-12">
          <AlphabetArray clickFunction={selectLetter} alphaFilter={alphaFilter} />
        </div>
      </div>
    </>
  );
}
