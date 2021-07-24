import React, {useState} from 'react';
import Axios from 'axios';

import "./App.css"

const App = () => {

  const [joke, setJoke] = useState('')

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{

      setJoke(response.data.setup + "..." +response.data.punchline)
    })
  }

  return (
    <div>
      Hi Cousins
      <br />
      <button onClick={getJoke}>Get Joke</button>
      <h4>{joke}</h4>
    </div>
  );
}

export default App;
