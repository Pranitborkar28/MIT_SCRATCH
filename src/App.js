// src/App.js
import React, { useState } from 'react';
import SpriteComponent from './component/Sprite'; // Make sure to import the correct component
import Navbar from './Header';
import './styles.css';

const MainApp = () => {
    const [spriteList, updateSpriteList] = useState([]);
    const [activeSpriteIndex, setActiveSpriteIndex] = useState(null);

    const createNewSprite = () => {
        const spriteTemplate = {
            id: Date.now(),
            src: 'https://www.stemdetectivelab.com/wp-content/uploads/2019/07/scratch-mascot.png',
            position: { x: 200, y: 200 },
            rotation: 0,
        };
        updateSpriteList([...spriteList, spriteTemplate]);
    };

    const moveSprite = (deltaX, deltaY) => {
        if (activeSpriteIndex === null) return;
        const modifiedSprites = [...spriteList];
        const sprite = modifiedSprites[activeSpriteIndex];
        sprite.position = {
            x: sprite.position.x + deltaX,
            y: sprite.position.y + deltaY,
        };
        updateSpriteList(modifiedSprites);
    };

    const rotateSprite = (degree) => {
        if (activeSpriteIndex === null) return;
        const modifiedSprites = [...spriteList];
        const sprite = modifiedSprites[activeSpriteIndex];
        sprite.rotation = (sprite.rotation + degree) % 360;
        updateSpriteList(modifiedSprites);
    };

    const controlButtonStyle = {
        backgroundColor: '#007BFF',
        color: '#FFF',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        marginBottom: '10px',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', flexGrow: 1 }}>
                <div style={{ padding: '20px', borderRight: '1px solid #333' }}>
                    <button onClick={createNewSprite} style={controlButtonStyle}>Add New Sprite</button>
                    <div>
                        <button onClick={() => moveSprite(10, 0)} style={controlButtonStyle}>Move Right</button>
                    </div>
                    <div>
                        <button onClick={() => moveSprite(-10, 0)} style={controlButtonStyle}>Move Left</button>
                    </div>
                    <div>
                        <button onClick={() => moveSprite(0, 10)} style={controlButtonStyle}>Move Down</button>
                    </div>
                    <div>
                        <button onClick={() => moveSprite(0, -10)} style={controlButtonStyle}>Move Up</button>
                    </div>
                    <div>
                        <label htmlFor="rotate">Rotate Sprite:</label>
                        <select id="rotate" onChange={(e) => rotateSprite(Number(e.target.value))}>
                            <option value="0">Select Rotation</option>
                            <option value="15">15°</option>
                            <option value="30">30°</option>
                            <option value="45">45°</option>
                            <option value="60">60°</option>
                            <option value="90">90°</option>
                            <option value="180">180°</option>
                        </select>
                    </div>
                </div>
                <div style={{ position: 'relative', flexGrow: 1 }}>
                    {spriteList.map((sprite, index) => (
                        <div key={sprite.id} style={{ display: 'inline-block', margin: '10px' }}>
                            <SpriteComponent
                                imageSrc={sprite.src} // Correct prop name here
                                coordinates={sprite.position}
                                angle={sprite.rotation}
                            />
                            <button
                                onClick={() => setActiveSpriteIndex(index)}
                                style={{
                                    backgroundColor: activeSpriteIndex === index ? '#ADD8E6' : '#007BFF',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px',
                                    cursor: 'pointer',
                                    borderRadius: '5px',
                                }}
                            >
                                Select Sprite
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainApp;
