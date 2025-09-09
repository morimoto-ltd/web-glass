import { useState } from 'react';

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

export default function App() {
    return (
        <section role="main" className="App">
            <RoundButton>
                <span>+</span>
            </RoundButton>

            <Slider fixedWidth={300} />

            <HueSlider fixedWidth={300} />

            <DemoToggle />
        </section>
    );
}
