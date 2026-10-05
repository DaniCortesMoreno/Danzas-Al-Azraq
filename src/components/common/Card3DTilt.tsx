import React, { useRef, useState } from 'react';

export interface Card3DTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  maxRotation?: number;
  perspective?: number;
  scale?: number;
  levitation?: boolean;
}

export const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  className = '',
  maxTilt = 8,
  maxRotation,
  perspective = 1200,
  scale = 1.015,
  levitation = true,
  ...restProps
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const actualTilt = maxRotation ?? maxTilt;
  const [transformStyle, setTransformStyle] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)`
  );
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -actualTilt;
    const rotateY = ((x - centerX) / centerX) * actualTilt;
    const levitateX = levitation ? ((x - centerX) / centerX) * 8 : 0;
    const levitateY = levitation ? ((y - centerY) / centerY) * 8 : 0;

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${levitateX.toFixed(1)}px, ${levitateY.toFixed(1)}px, 12px) scale3d(${scale}, ${scale}, ${scale})`
    );

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)`
    );
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered 
          ? 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
          : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
      className={`relative ${className}`}
      {...restProps}
    >
      {/* Dynamic Specular Ethereal Glare Layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 -z-0"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.14) 0%, transparent 65%)`,
          opacity: glarePosition.opacity
        }}
      />
      {children}
    </div>
  );
};
