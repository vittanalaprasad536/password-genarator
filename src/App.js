import './App.css';
import { useState } from 'react';

function App() {

  const [charlen, setCharlen] = useState(0);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers,setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [strgt,setstrgt] = useState('week');
  const [password,setPassword] = useState('');
  const funstrength = () =>{
    
     if (charlen <= 6){
       setstrgt('Week');
     }else if (charlen > 6 && charlen < 10) {
      setstrgt('Mediam'); 
     } else {
      setstrgt('Strong');
     }
  }
  const charChangehandler=(e)=>{
    setCharlen(e.target.value);
    funstrength();
  }

  const passwordHandler=()=>{
    
  }
  return (
    <div className="App">
      <div className='password-div'>
        <div className='copy-div'>

          <div className='pass'>
            sD3@djn34
          </div>
          <div className='copy-button'>
            <button>Copy</button>
          </div>

        </div>
        <div className='charlength'>
          <div className='charpara'>
            Character Length
          </div>
          <div className='charnum'>
            {charlen}
          </div>
        </div>
        <div className='range'>
          <input type="range" min='4' max='16' value={charlen} onChange={charChangehandler} />
        </div>
        <div className="pass-require">
          <span><input type="checkbox" checked={uppercase} onChange={(e)=>setUppercase(e.target.checked)} />Include UpperCase Letters</span>
          <span><input type="checkbox" checked={lowercase} onChange={(e)=>setLowercase(e.target.checked)} />Include LowerCase Letters</span>
          <span><input type="checkbox" checked={numbers} onChange={(e)=>setNumbers(e.target.checked)} />Include Numbers</span>
          <span><input type="checkbox" checked={symbols} onChange={(e)=>setSymbols(e.target.checked)}/>Include Symbols</span>
        </div>
        <div className='paas-stringth'>
          <div>
            Stringth :
          </div>
          <div>
            {strgt}
          </div>
        </div>
        <div className='gen-button'>
          <button onClick={passwordHandler}>Genarate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
