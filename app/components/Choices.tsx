"use client";

import React from 'react';
import { Noto_Sans } from "next/font/google";
import styles from "./Choicebox.module.css"
const Noto = Noto_Sans({   
  weight: '400',
  subsets: ['latin'],
});

export type VNNavigationScripts = "next" | "previous" | number;

export interface ChoiceboxProps {
  text: string;
  script: VNNavigationScripts;
  navigate: (script: VNNavigationScripts) => void;
}

const Choicebox: React.FC<ChoiceboxProps> = ({ text, script, navigate }) => {
  "use client";
  return (
    <button className= {`${Noto.className} ${styles.button}`}
      onClick={() => navigate(script)}>
      {text}
    </button>
  );
};

export default Choicebox;