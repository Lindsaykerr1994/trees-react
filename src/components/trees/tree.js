import { useParams } from "react-router-dom";
export default function Tree() {
  let params = useParams();
  return <div>Tree ID: {params.treeId} </div>;
}
