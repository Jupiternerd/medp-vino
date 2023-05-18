import Image, { ImageProps } from 'next/image';
import React from 'react';
import { Property } from 'csstype';

interface LayerProps {
  image: ImageProps["src"];
  position: Property.ObjectFit;
  priority?: boolean;
  jump?: boolean;
}

const Layer: React.FC<LayerProps> = ({ image, position, priority = false, jump = false }) => (
  <div className={jump ? "jumping" : ""} style={{ position: 'absolute', width: '100%', height: '100%' }}>
    <Image alt="layer" src={image} fill={true} style={{objectFit: position}} priority={priority}/>
  </div>
);

export default Layer;