import './App.css';
import { useState } from 'react';

function App() {

  const [charlen, setCharlen] = useState(4);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers,setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [strgt,setstrgt] = useState('week');
  const [password,setPassword] = useState('');
  const [err,setError] = useState('');
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
    var charset = "";
    if(uppercase){
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lowercase){
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if(numbers){
      charset += "0123456789";
    }
    if(symbols){
      charset += "!@#$%^&*?";
    }
    else{
      setError('Please select at least one from above');
      setPassword('');
    }
    if(charset.length > 0){
      var newpassword= ""
      for(var i=0;i<charlen;i++){
        
        var randomnum = Math.floor(Math.random() * charset.length);
        newpassword += charset[randomnum];
      }
      setPassword(newpassword);
      setError('');
    }
    
  }

  const copyHandler = () =>{
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="App">
      <div className='password-div'>
        <div className='copy-div'>

          <div className='pass'>
            {password}
          </div>
          <div className='copy-button'>
            <button onClick={copyHandler}>Copy</button>
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
        <div>
          { err && (<p className='error'>{err}</p>)}
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
