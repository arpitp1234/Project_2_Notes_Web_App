import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";




const Noteitem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote}=context;
  const  {note,updateNote}=props;
  return (
    <div   style={{height:"5cm",width:"5cm",padding:"5mm", marginBottom:"17mm"}}>
      <div className="card my-3" >
       <h5 className="card-title">&nbsp;{note.title}</h5>
        <div className="card-body">
      <p className="card-text">{note.description}</p>
      <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully","success");}}></i>
      <i className="fa-regular fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
       </div>
     </div>
    </div>
  )
}

export default Noteitem
