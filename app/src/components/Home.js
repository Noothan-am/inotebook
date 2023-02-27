import React,{useContext} from 'react'
import context from '../context/notes/Context'
const Home = () => {
  const notes = useContext(context);
  const {note} = notes;
  return (
    <>
      <div className="container">
      <h1 className="my-3">New Notes</h1>
        <form className="my-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className='container'>
        <h1>Notes</h1>
        {note.map((all)=>{
          return(
          all.title
          )
        })}
      </div>
    </>
  )
}

export default Home