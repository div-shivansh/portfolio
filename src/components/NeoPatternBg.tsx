import React from 'react';

interface NeoPatternBgProps {
  /** The type of Neobrutalist pattern */
  pattern?: 'dots' | 'stripes' | 'grid';
  /** Tailwind background color class (e.g., 'bg-violet-300', 'bg-yellow-400') */
  bgColorClass?: string;
  /** The color of the pattern itself (defaults to black) */
  patternColor?: string;
}

const NeoPatternBg: React.FC<NeoPatternBgProps> = ({
  pattern = 'dots',
  bgColorClass = 'bg-violet-300', 
  patternColor = '#000000' 
}) => {
  
  const getBackgroundStyle = (): React.CSSProperties => {
    switch (pattern) {
      case 'dots':
        return {
          // Thick polka dots
          backgroundImage: `radial-gradient(${patternColor} 3px, transparent 3px)`,
          backgroundSize: '24px 24px'
        };
      case 'stripes':
        return {
          // Thick diagonal warning stripes
          backgroundImage: `repeating-linear-gradient(45deg, ${patternColor} 0, ${patternColor} 4px, transparent 4px, transparent 24px)`
        };
      case 'grid':
        return {
          // A heavy, chunky grid (thicker than your hero grid)
          backgroundImage: `
            linear-gradient(90deg, ${patternColor} 3px, transparent 3px),
            linear-gradient(0deg, ${patternColor} 3px, transparent 3px)
          `,
          backgroundSize: '40px 40px'
        };
      default:
        return {};
    }
  };

  return (
    // The base container holds the solid Neobrutalist color
    <div className={`absolute inset-0 w-full h-full -z-10 ${bgColorClass}`}>
      {/* The inner div holds the pattern with a slight opacity so it doesn't overpower content */}
      <div 
        className="absolute inset-0 w-full h-full opacity-15" 
        style={getBackgroundStyle()} 
        aria-hidden="true"
      />
    </div>
  );
};

export default NeoPatternBg;