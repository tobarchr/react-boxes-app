import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Colors from './components/Colors';

function App() {
  const [colorpicker, setColorPicker] = useState([]);
  const [currentColor,setCurrentColor] = useState("");

  const addColorBox = (e) =>{
    e.preventDefault();
    setColorPicker([...colorpicker, currentColor]);
    setCurrentColor("");
  }

  return (
    <div className="App">
      <div className="container">
        <form className="form-inline d-flex justify-content-center" onSubmit={addColorBox}>
          <div className="form-group">
            <label>Color</label>
            <input type="text" className="form-control" onChange={(e)=>setCurrentColor(e.target.value)}></input>
          </div>
          <div className="form-group">
              <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </form>
        <Colors boxColor={colorpicker}/>
      </div>
    </div>
  );
}

export default App;
