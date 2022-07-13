export default function HeaderContainer({ message }) {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="mb-1 ps-5">{message}</h1>
        <hr className="mt-0"></hr>
      </div>
    </div>
  );
}
