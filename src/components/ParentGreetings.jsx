import React,{useState} from 'react'
import Greetings from './Greetings.jsx';

const ParentGreetings = () => {
    const [userName, setUserName] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const removeGreet = () => {
    setUserName("");
  };
  return (
   <>
      <h1>Task1</h1>
      <div className="input-group">
        <span class="input-group-text">UserName</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="visible-addon"
          value={userName}
          onChange={handleUserName}
        />
      </div>
      <br />
      <button type="button" class="btn btn-primary" onClick={removeGreet}>
        remove greet
      </button>
      <Greetings userName={userName} />
    </>
  )
}

export default ParentGreetings