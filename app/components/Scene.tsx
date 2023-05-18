"use client";

import { ImageProps } from 'next/image';
import Layer from './Layer';
import { useState, useEffect } from 'react';
import style from "./IntroSequence.module.css"

interface SceneProps {
  background: ImageProps["src"];
  character?: ImageProps["src"];
  intro?: boolean;
  jump?: boolean;
}

const Scene: React.FC<SceneProps> = ({ background, character, intro, jump }) => {
  const [jumping, setJumping] = useState(false);

  // Whenever the character changes, set jumping to true.
  useEffect(() => {
    setJumping(true);

    // After half a second, set jumping back to false.
    const timeoutId = setTimeout(() => setJumping(false), 500);

    return () => clearTimeout(timeoutId);
  }, [character]);

  return(
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    marginTop: '20px'
  }}>
    <div className={`scene ${intro ? style.openUp : ""}`} style={{ position: 'relative', width: '80vw', height: '60vh' }}>
      <Layer image={background} position='cover' priority={false}/>
      {character ? <Layer image={character} position='contain' priority={true} jump={jump ? jumping : false}/> : null}
    </div>
  </div>)
};


export default Scene;