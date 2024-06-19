import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const context=useContext(noteContext);
    const{addNote}=context;

    const[note,setNote]=useState({title:"",description:"",tag:""});

    const handleClick=(e)=>{
      e.preventDefault();
      addNote(note.title,note.description,note.tag);
      setNote({title:"",description:"",tag:""})
      props.showAlert("Added Successfully",'success');
        
    }
    const onChange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value});

    }
  return (
    <div className="container my-3">
    <h2>Add a Note</h2>
    <form action="" className="my-3">
      <div className="mb-3 row">
        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="tag" className="col-sm-2 col-form-label">Tag</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
        </div>
      </div>
      <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
    </div>
  )
}

export default AddNote
