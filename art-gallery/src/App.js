import './App.css'
import React, {useState, useEffect} from 'react';
import {ButtonBar} from './ButtonBar.js'
import {Gallery} from './Gallery.js'

function App() {
  let [imgID, setImgID] = useState(12000)
  let [data, setData] = useState({})
  
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${imgID}`)
    .then(res => res.json())
    .then(resData => setData(resData))
  }, [imgID] )

  const handleIterate = (e) => {
    setImgID(imgID + Number(e.target.value))
  }

  return (
    <div className="App">
      <Gallery
        objectImg={data.primaryImage} 
        artist={data.artistDisplayName} 
        title={data.title} />
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
