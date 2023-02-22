import { useParams } from "react-router-dom";
import CategoryForm from "./CategoryForm";

export default function AjoutCategorie() {
  const {id} = useParams();
  // console.log('id='+id)
  return (
    <div style={{ padding: '0 20px' }}>
      {/* <h1>user : {user.name} - role : {user.role}</h1> */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {id != 'undefined' && (
          <CategoryForm id={id} />
        )}
        {
        id == 'undefined' && (
          <CategoryForm />
        )}
      </div>
    </div>
  )
}
