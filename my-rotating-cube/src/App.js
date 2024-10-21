// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import Cube from './Cube';
// import { Html } from '@react-three/drei';


// function App() {
//   return (
//         <div divstyle={{ position: 'relative', width: '100vw', height: '100vh' }}>
//         {/* Background div */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'black', // or any color you want for the background
//           zIndex: 0 // This puts it behind other elements
//         }} />
  
//         {/* Canvas for 3D content */}
//         <Canvas style={{ position: 'relative', zIndex: 1 }}>
//           <ambientLight intensity={0.5} />
//           <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//           <pointLight position={[-10, -10, -10]} color="red" intensity={1} />
//           <Cube />
//         </Canvas>
  
//         {/* Text overlay */}
//         <div style={{
//           position: 'absolute',
//           right: '10%',
//           top: '30%',
//           width: '40%',
//           color: 'white',
//           textAlign: 'center',
//           fontSize:'35px',
//           zIndex: 1 // This ensures it's on top of both the background and the Canvas
//         }}>
//           <p>Dolphin is an emulator for two recent Nintendo video game consoles: the GameCube and the Wii. It allows PC gamers to enjoy games for these two consoles in full HD (1080p) with several enhancements: compatibility with all PC controllers, turbo speed, networked multiplayer, and even more!</p>
//         </div>
//       </div>
  

//   );
// }

// export default App;

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import './App.css';  // Import the CSS file

function App() {
  return (
    <div className="Main_Div">
      {/* Background div */}
      <div className="background" />
  
      {/* Canvas for 3D content */}
      <Canvas className="canvas-container">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="red" intensity={1} />
        <Cube />
      </Canvas>
  
      {/* Text overlay */}
      <div className = 'emulator_header'>
        <h1 class="elevated-word">house</h1>

      </div>
      <div className="emulator_summary">
        <p>Dolphin is an emulator for two recent Nintendo video game consoles: the GameCube and the Wii. It allows PC gamers to enjoy games for these two consoles in full HD (1080p) with several enhancements: compatibility with all PC controllers, turbo speed, networked multiplayer, and even more!</p>
      </div>

      <div className ='game_recommendations'>
        <h1 className = 'creator_header'>Creator Recomendations</h1>
        <p className = 'actual_games'>
            Super Mario Galaxy <br /> 
            Wii Sports Resort <br /> 
            The Legend of Zelda: Twilight Princess <br /> 
            Mario Kart Wii <br /> 
            Donkey Kong Country Returns
        </p>
      </div>
    </div>
  );
}

export default App;