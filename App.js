import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [data, setdata]=useState([])
const [name, setname]=useState("")
let apikey="810f563ec3d4f2be260b5a62c6a24261"

function changename(event){
  setname(event.target.value)
 }
 function showResult(name){
  fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&user_id=197774016%40N02&tags=${name}&per_page=20&page=1&format=json&nojsoncallback=1&`).then((res)=>{
        return res.json()
        
   }).then((data)=>{setdata(data.photos.photo)
    console.log(data.photos.photo)})

   .catch((err)=>{console.log(err)})
   
  }
 console.log(data)
  return (
    <div className="App">

  <input type="text" onChange={changename} value={name}/>
  <button onClick={showResult}>search</button>
  <div> 
  <button>mountain</button>
  <button>bird</button>
  <button>food</button>
  <button>beaches</button>
  </div>
  <div className='gallery'></div>
    </div>
  );
}

export default App;
