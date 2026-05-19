import React from 'react';

const GridBackground: React.FC = () => {
  const gridStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(90deg, #A1A1A1 1.5px, transparent 1.5px),
      linear-gradient(0deg, #A1A1A1 1.5px, #D7D7F7 1.5px)
    `,
    backgroundSize: '80px 80px', 
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute', 
    top: 0,
    left: 0,
    zIndex: -1, 
    pointerEvents: 'none', 
  };

  return (
    <div style={gridStyle} aria-hidden="true" />
  )}

export default GridBackground;