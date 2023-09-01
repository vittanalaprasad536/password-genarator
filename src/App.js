import './App.css';

function App() {
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
                  0
              </div>
            </div>
            <div className='range'>
              <input type="range" min='4' max='16'/>
            </div>
            <div className="pass-require">
                <span><input type="checkbox" />Include UpperCase Letters</span>
                <span><input type="checkbox" />Include LowerCase Letters</span>
                <span><input type="checkbox" />Include Numbers</span>
                <span><input type="checkbox" />Include Symbols</span>
            </div>
            <div className='paas-stringth'>
              <div>
                  Stringth :
              </div>
              <div>
                  Week
              </div>
            </div>
            <div className='gen-button'>
                <button>Genarate Password</button>
            </div>
        </div>
    </div>
  );
}

export default App;
