import './App.css';
import { useRef, useState } from 'react';

function App() {
const [first, setfirst] = useState("")
const scsmsg=useRef();
const errmsg=useRef();

function Handle(){
if(first==="admin" ){
  scsmsg.current.style.display="block"
}
else if(first===""){
  errmsg.current.style.display="block"
}

}

  return (
    
    <div>
      <h1>Login</h1>
      <br></br>
      <label data-testid="lbl1">Enter your name:</label><br></br>
      <input data-testid="txt1" type="text" value={first} onChange={(e)=>{setfirst(e.target.value)}} ></input><br></br>

      <label data-testid="lbl2">Enter your password:</label><br></br>
      <input data-testid="txt2" type="password"></input><br></br><br></br>

      <button data-testid="btnSubmit" type="submit" onClick={Handle}>Submit</button>
      <p data-testid="message1" className='msg' ref={scsmsg}>Login Successful!</p>
      <p data-testid="message2" className='msg2' ref={errmsg}>Please fill all the details</p>
    </div>
  );
}

export default App;
