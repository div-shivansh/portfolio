import React from 'react';

const GridBackground: React.FC = () => {
  const gridStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(90deg, #e0e0de 1px, transparent 1px),
      linear-gradient(0deg, #e0e0de 1px, #f9f5f2 1px)
    `,
    backgroundSize: '40px 40px', 
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
    <div style={gridStyle} aria-hidden="true" className="absolute inset-0" />
  )}

export default GridBackground;