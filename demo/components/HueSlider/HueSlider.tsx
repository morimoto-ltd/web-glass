import { Slider, type SliderProps } from 'components/Slider/Slider';

import './HueSlider.css';

export type HueSliderProps = Omit<'children', SliderProps>;

export function HueSlider({
    handleWidth = 60,
    handleHeight = 60,
    fixedWidth,
}: HueSliderProps) {
    return (
        <Slider
            handleWidth={handleWidth}
            handleHeight={handleHeight}
            fixedWidth={fixedWidth}
        >
            <div className="HueSlider__hueTrack"/>
        </Slider>
    );
}
