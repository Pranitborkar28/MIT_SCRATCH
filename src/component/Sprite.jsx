import React from 'react';

const SpriteComponent = ({ imageSrc, coordinates, angle }) => { // Removed unused props
    return (
        <div
            style={{
                position: 'absolute',
                left: coordinates.x, // Ensure coordinates.x exists
                top: coordinates.y,  // Ensure coordinates.y exists
                transform: `rotate(${angle}deg)`,
                transition: 'all 0.3s ease',
            }}
        >
            <img src={imageSrc} alt="Sprite Element" style={{ width: '90px', height: '90px' }} />
        </div>
    );
};

export default SpriteComponent;
