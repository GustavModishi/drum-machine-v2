import { useEffect, useState } from 'react';


function App() {


  const arr = [
    {
      keyCode: 81,
      text: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description: "Heater 1"
    },
    {
      keyCode: 87,
      text: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description: "Heater 2"
    },
    {
      keyCode: 69,
      text: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description: "Heater 3"
    },
    {
      keyCode: 65,
      text: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description: "Heater 4"
    },
    {
      keyCode: 83,
      text: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description: "Clap"
    },
    {
      keyCode: 68,
      text: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description: "Open HH"
    },
    {
      keyCode: 90,
      text: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description: "Kick n' Hat"
    },
    {
      keyCode: 88,
      text: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description: "Kick"
    },
    {
      keyCode: 67,
      text: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description: "Closed HH"
    }
  ];

  function playSound(selector) {

    const audio = document.getElementById(selector);
    if(!selector) return;
    console.log(audio);
    audio.play();
    setText((arr.find((clip)=> clip.text === selector)).description)

  }

  const [text, setText] = useState('');
  useEffect(()=> {
    document.addEventListener('keydown',(e) => {
      playSound(e.key.toUpperCase())
    } )
  },[])



 

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{text}</div>
          <div className="drum-pads">
            {arr.map((drumpad)=> (
              <div 
              className="drum-pad"
              id={drumpad.url}
              onClick={()=> playSound(drumpad.text)}>
                {drumpad.text} 
                <audio 
                className="clip" 
                id={drumpad.text}
                src={drumpad.url}/>
              </div>
            ))}
          </div>
        
      </div>
      
      
     
    </div>
  );
}

export default App;
