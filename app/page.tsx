"use client"

import Scene from './components/Scene';
import Textbox from './components/Textbox';
import Choicebox, { ChoiceboxProps } from './components/Choices';
import { VNNavigationScripts } from "./components/Choices"
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { RainTypeString } from './components/Rain';

interface StoryDataInterface {
  index: number,
  background: string;
  character?: string;
  display: {
    name: string;
    text: string;
    fancyIntro?: boolean;
  }
  jump?: boolean;
  rain?: RainTypeString
  choices: Omit<ChoiceboxProps, "navigate">[]
}

const storyData: StoryDataInterface[] = [
  {
    index: 0,
    background: "/backgrounds/daisy.webp", 
    choices: [{
      script: "next",
      text: "look around"
    }],
    display: {
      name: "You",
      text: "...",
      fancyIntro: true
    }
  },   {
    index: 1,
    background: "/backgrounds/daisy_white.webp",
    character: "/characters/alice/angry.webp",
    choices: [{
      script: "next",
      text: "Ahahaha"
    }],
    display: {
      name: "You",
      text: "Hello Alice"
    }
  }
]

function refreshRainLogic(type: RainTypeString): boolean {
  // Create and dispatch a rainEvent
  const rainEvent = new CustomEvent<RainTypeString>("rainEvent", {
      detail: type,
  });
  return window.dispatchEvent(rainEvent);
}

export default function Home() {
  const [stage, setStage] = useState(0);

  // Load the stage from cookies when the component mounts
  useEffect(() => {
    const loadedStage = Cookies.get('stage');
    if (loadedStage) {
      setStage(Number(loadedStage));
      const rainEvent = new CustomEvent<RainTypeString>("rainEvent", {
      detail: storyData[Number(loadedStage)].rain ?? "none",
      });
      window.dispatchEvent(rainEvent);
    }
  }, []);

  const navigate = (script: VNNavigationScripts) => {
    let newStage = stage;

    switch (script) {
      case 'next':
        if (stage < storyData.length - 1) {
          newStage = stage + 1;
        }
        break;
      case 'previous':
        if (stage > 0) {
          newStage = stage - 1;
        }
        break;
      default:
        if (typeof script === 'number' && script >= 0 && script < storyData.length) {
          newStage = script;
        }
        break;
    }

    setStage(newStage);
    Cookies.set('stage', newStage.toString());

    // rain logic
    if (storyData[newStage].rain) {
      const rainEvent = new CustomEvent<RainTypeString>("rainEvent", {
      detail: storyData[newStage].rain ?? "none",
      });
      window.dispatchEvent(rainEvent);
    }
  };

  const currentStoryData = storyData.find((story) => story.index === stage) ?? storyData[stage];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Scene background={currentStoryData.background} character={currentStoryData.character} jump={currentStoryData.jump} intro={currentStoryData.display.fancyIntro}/>
        <Textbox name={currentStoryData.display.name} text={currentStoryData.display.text} />
      </div>
      <div style={{paddingTop: "20px"}}>
      {currentStoryData.choices.map((choice, index) => 
        <Choicebox key={index} text={choice.text} script={choice.script} navigate={navigate}/>
      )}
      </div>
    </div>
  );
}

