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
      text: "..."
    }],
    display: {
      name: "You",
      text: "...",
      fancyIntro: true
    }
  },  
  {
    index: 1,
    background: "/backgrounds/daisy_white.webp", 
    choices: [{
      script: "next",
      text: "look around"
    }],
    display: {
      name: "You",
      text: "...What?",
      fancyIntro: true
    }
  }, 
  {
    index: 2,
    background: "/backgrounds/daisy.webp", 
    choices: [{
      script: "next",
      text: "you hear a rustle behind you"
    }],
    display: {
      name: "You",
      text: "Where am I?",
      fancyIntro: true
    }
  },
  {
    index: 3,
    background: "/backgrounds/daisy_white.webp", 
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "!!!"
    }],
    display: {
      name: "???",
      text: "Boo!",
    },
    jump: true
  },
  {
    index: 4,
    background: "/backgrounds/daisy_white.webp", 
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "...No"
    },{
      script: 6,
      text: "...Who are you? And how did you get my email?"
    }],
    display: {
      name: "???",
      text: "Ahaha~ Did I scare you?",
    },
    jump: true
  },
  {
    index: 5,
    background: "/backgrounds/daisy_white.webp", 
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "Is this some kind of joke? How did you get my email?"
    }],
    display: {
      name: "???",
      text: "Aw, atleast I tried~ I'll try again so be on the look out!~",
    }
  },  {
    index: 6,
    background: "/backgrounds/daisy_white.webp", 
    character: "/characters/alice/normal.webp",
    choices: [{
      script: "next",
      text: "..."
    }],
    display: {
      name: "???",
      text: "Straight to the point, huh?",
    }
  },  {
    index: 7,
    background: "/backgrounds/daisy_white.webp", 
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "I'm leaving."
    }],
    display: {
      name: "???",
      text: "Come on, what's with the long face? let's have some fun! just like old times!",
    }
  },  {
    index: 8,
    background: "/backgrounds/daisy_white.webp", 
    character: "/characters/alice/angry.webp",
    choices: [{
      script: 10,
      text: "...Fine, what do you want?"
    }, {
      script: "next",
      text: "You've got the wrong person, sorry."
    }],
    display: {
      name: "???",
      text: "...",
    }
  },  {
    index: 9,
    background: "/backgrounds/daisy_white.webp", 
    character: "/characters/alice/normal.webp",
    choices: [],
    display: {
      name: "???",
      text: "I see. Have fun.",
    }
  }, {
    index: 10,
    background: "/backgrounds/cloudy_white.webp",
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "What's your name?"
    }],
    display: {
      name: "???",
      text: "Hm, I... lets just talk for now. We've got a lot to catch up on!",
    },
  }, {
    index: 11,
    background: "/backgrounds/cloudy_white.webp",
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "Nice to meet you, my name is..."
    }],
    display: {
      name: "aly",
      text: "Me? I don't think it'll matter much soon but- You can call me aly.",
    }
  }, {
    index: 12,
    background: "/backgrounds/cloudy_white.webp",
    character: "/characters/alice/normal.webp",
    choices: [{
      script: "next",
      text: "..."
    }],
    display: {
      name: "aly",
      text: "No need! I already know your name! As creepy as it sounds... You probably don't remember me though.. or know me yet.",
    }
  }, {
    index: 13,
    background: "/backgrounds/cloudy_white.webp",
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "what do you want to talk about?"
    }],
    display: {
      name: "aly",
      text: "Ahaha~ What am I saying? I'll get out of your hair real soon! Think of this as a goodbye of sorts.",
    }
  }, {
    index: 14,
    background: "/backgrounds/cloudy_white.webp",
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "okay"
    }],
    display: {
      name: "aly",
      text: "I don't expect you to remember but it'll help me out alot if you listen...",
    }
  }, {
    index: 15,
    background: "/backgrounds/cloudy_white.webp",
    character: "/characters/alice/normal.webp",
    choices: [{
      script: "next",
      text: "okay..."
    }],
    display: {
      name: "aly",
      text: "I just wanted to thank you... for being there for them and for me. I",
    }
  }, {
    index: 16,
    background: "/backgrounds/rain_white.webp",
    character: "/characters/alice/normal.webp",
    choices: [{
      "script": "next",
      "text": "... What are you saying?"
    }],
    display: {
      name: "aly",
      text: "I... hope everyone's doing well... after what",
    },
    rain: "normal"
  }, {
    index: 17,
    background: "/backgrounds/rain_white.webp",
    character: "/characters/alice/hidden.webp",
    choices: [{
      script: "next",
      text: "Stop."
    }, {
      script: "next",
      text: "Stop."
    }, {
      script: "next",
      text: "Stop."
    }],
    display: {
      name: "aly",
      text: "I...",
    },
    rain: "heavy"
  }, {
    index: 18,
    background: "/backgrounds/daisy.webp",
    character: "/characters/alice/sorry.webp",
    choices: [{
      script: "next",
      text: "I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. "
    }, {
      script: "next",
      text: "I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. "
    }, {
      script: "next",
      text: "I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. I'm sorry. "
    }],
    display: {
      name: "aly",
      text: "I should just die die die die die die die die die",
    },
    rain: "none"
  }, {
    index: 19,
    background: "/backgrounds/rain_white.webp",
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "... Wait "
    }, {
      script: "next",
      text: "... Why are you "
    }],
    display: {
      name: "aly",
      text: "Ahaha~ The rain sure is getting heavy... I... I should really get going...",
    },
    rain: "heavy"
  }, {
    index: 20,
    background: "/backgrounds/rain_white.webp",
    character: "/characters/alice/hidden.webp",
    choices: [{
      script: "next",
      text: "..."
    }],
    display: {
      name: "aly",
      text: "...I didn't want this to end... I just wanted to be happy...",
    },
    rain: "heavy"
  }, {
    index: 21,
    background: "/backgrounds/rain_white.webp",
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "... I... think I'm starting to remember..."
    }],
    display: {
      name: "aly",
      text: "Sorry! Sorry! I'm just getting it out of my chest! No need to feel alarmed... I uh... I really enjoyed our time together...! Oh! T-tell the others I said hi! And tell that blue haired idiot to be nicer to you...! And. I... I...",
    },
    rain: "heavy"
  }, {
    index: 22,
    background: "/backgrounds/rain_white.webp",
    character: "/characters/alice/smile.webp",
    choices: [{
      script: "next",
      text: "... Wait!"
    }],
    display: {
      name: "aly",
      text: "I... I...",
    },
    rain: "heavy"
  }, {
    index: 23,
    background: "/backgrounds/rain_white.webp",
    character: "/characters/alice/normal.webp",
    choices: [{
      script: "next",
      text: "I--"
    }],
    display: {
      name: "aly",
      text: "I still love you.",
    },
    rain: "none"
  }, {
    index: 24,
    background: "/backgrounds/daisy.webp",
    choices: [{
      script: "next",
      text: "..."
    }],
    display: {
      name: "You",
      text: "...",
    },
    rain: "none"
  }, {
    index: 25,
    background: "/backgrounds/daisy_white.webp",
    choices: [],
    display: {
      name: "You",
      text: "...",
    },
    rain: "none"
  }
  
]
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

    if (newStage === 9) {
      Cookies.set('stage', "0");
      setTimeout(() => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 1600)
    }

    if (newStage === 18) {
      Cookies.set('stage', "19");
      const rainEvent = new CustomEvent<RainTypeString>("rainEvent", {
      detail: "heavy",
      });
      window.dispatchEvent(rainEvent);
      setTimeout(() => setStage(19), 900);
    }

    if (newStage === 23) {
      Cookies.set('stage', "24");
      setTimeout(() => setStage(24), 800);
    }

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
      alignItems: 'center',
    }}>
      <div style={{width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Scene background={currentStoryData.background} character={currentStoryData.character} jump={currentStoryData.jump} intro={currentStoryData.display.fancyIntro}/>
        <Textbox name={currentStoryData.display.name} text={currentStoryData.display.text} />
      </div>
      <div style={{marginTop: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {currentStoryData.choices.map((choice, index) => 
        <Choicebox key={index} text={choice.text} script={choice.script} navigate={navigate}/>
      )}
      </div>
    </div>
  );
}

