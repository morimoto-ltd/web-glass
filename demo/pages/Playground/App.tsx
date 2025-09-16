import { useState } from 'react';
import { LiquidGlassPiece } from 'web-liquid-glass';

import { RoundButton } from 'components/RoundButton/RoundButton';
import { Slider } from 'components/Slider/Slider';
import { HueSlider } from 'components/HueSlider/HueSlider';
import { Toggle } from 'components/Toggle/Toggle';

import './App.css'

function DemoToggle() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(!isOn);

    return (
        <Toggle
            isOn={isOn}
            onClick={toggle}
        />
    );
}

function DemoGlass() {
    return (
        <LiquidGlassPiece
            width={200}
            height={200}
            borderRadius={32}
            zRadius={3}
        />
    );
}

export default function App() {
    return (
        <section role="main" className="App">
            <div>
                <DemoGlass />

                <DemoToggle />

                <HueSlider fixedWidth={300} />
            </div>

            <div>
                <Slider fixedWidth={300} />

                <RoundButton>
                    <span>+</span>
                </RoundButton>

                <DemoGlass />
            </div>
        </section>
    );
}
