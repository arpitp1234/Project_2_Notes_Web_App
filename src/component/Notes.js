import React, {useContext, useEffect,useRef,useState} from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./Noteitem";
import AddNote from "./AddNote";
import {useHistory} from 'react-router';
const Notes = (props) => {
  const context = useContext(noteContext);
  let history=useHistory();
  const { notes, getNote ,editNote} = context;
  // eslint-disable-next-line
  useEffect(() => {
  if(localStorage.getItem('token')){
          getNote();
  }else{
        history.push("/login");
  }
    // eslint-disable-next-line
  }, []);
  const ref=useRef(null);
  const refClose=useRef(null);
  const[note,setNote]=useState({id:"" ,etitle:"",edescription:"",etag:""});
 
  const updateNote = (currentNote) => {
     ref.current.click();
     setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    };

 
 const handleClick=(e)=>{
    console.log(note);
    editNote(note.id,note.etitle,note.edescription,note.etag)
    ref.current.click();
    props.showAlert("Updated successfully","success");
   }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value});

  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />     
      <button ref={ref} style={{display:"none"}} type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Updating a Note</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        
        <form action="" className="my-3">
      <div className="mb-3 row">
        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle}  onChange={onChange} minLength={5} required/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="tag" className="col-sm-2 col-form-label">Tag</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
        </div>
      </div>
      </form>    
        </div>
        <div className="modal-footer">
          <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button  disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
        </div>
      </div>
    </div>
  </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container">
        {notes.length===0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          )
        })}
      </div>
    </>
  );
};
export default Notes;
