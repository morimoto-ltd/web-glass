import { RoundButton } from 'components/RoundButton/RoundButton';
import { Slider } from 'components/Slider/Slider';

import './App.css'
import { HueSlider } from '../../components/HueSlider/HueSlider';

export default function App() {
    return (
        <section role="main" className="App">
            <RoundButton>
                <span>+</span>
            </RoundButton>

            <Slider fixedWidth={300} />

            <HueSlider fixedWidth={300} />
        </section>
    );
}
