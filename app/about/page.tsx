"use client";

import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import styles from "../components/Choicebox.module.css"
import Divider from '../components/Divider';

export const dynamic = 'force-static';

export default function About() {
  const [isResetDisabled, setResetDisabled] = useState(true);

  useEffect(() => {
    const stage = Cookies.get('stage');
    if (stage === '0' || !stage) {
      setResetDisabled(true);
    } else {
      setResetDisabled(false);
    }
  }, []);

  const resetStory = () => {
    Cookies.remove('stage');
    Cookies.remove('accepted');
    setResetDisabled(true);
    window.location.reload();
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div style={{ width: '100%', textAlign: 'center', paddingTop: '30px' }}>
        <h1 style={{fontSize: "40px"}}>About Page</h1>
      </div>
      <Divider invert={false} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', maxWidth: '50%', margin: 'auto' }}>
        <div style={{ flex: 1, padding: '10px', textAlign: "justify"}}>
          <h2 style={{fontSize: "25px"}}><u>Story</u></h2>
          <p style={{paddingTop: "8px"}}>
            You received an email from a shady-looking address. It contained a purple link, 
            indicating that you’ve visited the website before, but have no recollection of ever doing so.
            You were about to delete the email and forget about it... but something compelled you to go further.
            <br/> <br/>
            Against your best judgment, you hovered your mouse over the link. 
            <br/> <br/>
            *click*

          </p>
        </div>
        <div style={{ borderLeft: '1px solid white' }} />
        <div style={{ flex: 1, padding: '10px', textAlign: "justify"}}>
          <h2 style={{fontSize: "25px", textAlign: "right"}}><u>Technical / Misc</u></h2>
          <p style={{paddingTop: "8px"}}>
            This website is for my final project for the Media Production class that I am taking/took 
            at CUNY Hunter College. It's a visual novel that's made with React and Next.js. 
            <br/> <br/>
            This is my first time using Next.js v13 and it feels foreign to me as I have never used React 
            before but I am really liking it. I've had some experience working with 
            typescript (and visual novels) before, so a lot of the 'backend' code felt natural to me. 
            But, please keep in mind that this project took me a couple days (~4 days) to conceptualize and 
            make so there're a lot of design aspects that I would have done more elegantly if I had more time (and knowledge). 
          </p>
        </div>
      </div>
      <div style={{ width: '100%', textAlign: 'center', padding: '10px' }}>
        <h2 style={{fontSize: "25px"}}><u>Credits</u></h2>
        <p style={{paddingTop: "8px"}}>Made with ♥ and a few gallons of Redbull by Wai Hlaing. 
        <br/>
        Certain assets have been created using Stable Diffusion.</p>
      </div>
      <button className= {`${styles.button}`} style={{marginTop: "30px"}} onClick={resetStory} disabled={isResetDisabled}>
        {isResetDisabled ? "Nothing to Reset..." : "Reset Progression"}</button>
    </div>
    
  );
}