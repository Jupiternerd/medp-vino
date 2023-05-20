import React from "react";
import styles from "./Rain.module.css";

export enum RainType {
    none = 0,
    light = 10,
    normal = 25,
    heavy = 50
}

export type RainTypeString = keyof typeof RainType;

interface RainProps {
    type: RainTypeString;
}

const Rain: React.FC<RainProps> = ({type}) => {
  const drops = [];

  for (let i = 0; i < RainType[type]; i++) {
    const dropStyle = {
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 1 + 0.5}s`,
      animationDelay: `${Math.random() * 2}s`,
      height: `${Math.random() * (100 - 30) + 30}px`, // random height between 30 and 100
    };
    drops.push(<div className={styles.drop} style={dropStyle} key={i} />);
  }

  return <div className={styles.rain}>{drops}</div>;
};

export default Rain;