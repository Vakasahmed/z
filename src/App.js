import './App.css';
import {useState} from 'react';
import z from './Image/z.jpeg';

function App() {

  const [data, setData] = useState("");

  const zubi = () =>{
    setData(<div className='p'>
<h3>Most beautiful person in the world choosen by Google</h3>
<img src={z} alt='z' />
    </div>)
  }

  return (
    <div className="App">
   <div>
    <h2>Click here to see Miss universe declared by Google</h2>
    <button onClick={zubi}>Click here</button>
   </div>
   <div>
    {data}
   </div>
    </div>
  );
}

export default App;
