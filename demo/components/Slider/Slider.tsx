import { type CSSProperties, type ReactNode, useRef } from 'react';
import { LiquidGlassPiece } from 'web-liquid-glass';

import './Slider.css';

type SliderProps = {
    handleWidth?: number,
    handleHeight?: number,
    fixedWidth?: number,
    children?: ReactNode,
};

export function Slider({
    handleWidth = 92,
    handleHeight = 60,
    fixedWidth,
    children,
}: SliderProps) {
    const handleRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="Slider"
            style={{
                '--handleWidth': `${handleWidth}px`,
                '--handleHeight': `${handleHeight}px`,
                '--fixedWidth': fixedWidth ? `${fixedWidth}px` : '',
            } as CSSProperties}
        >
            <div className="Slider__handle" ref={handleRef}>
                <LiquidGlassPiece
                    width={handleWidth}
                    height={handleHeight}
                    borderRadius={handleHeight >> 1}
                    zRadius={3}
                />
            </div>

            <div
                className="Slider__track"
                ref={trackRef}
            >
                {children || <div className="Slider__trackDefault" />}
            </div>
        </div>
    );
}
