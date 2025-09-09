import { LiquidGlassPiece } from "web-liquid-glass";

import './Toggle.css';

export type ToggleProps = {
    isOn?: boolean;
    onClick?: () => void;
};

export function Toggle({
    isOn = false,
    onClick,
}: ToggleProps) {
    return (
        <div
            className={`Toggle ${isOn ? 'Toggle-on' : 'Toggle-off'}`}
            onClick={onClick}
        >
            <div className="Toggle__handle">
                <LiquidGlassPiece
                    width={92}
                    height={60}
                    borderRadius={30}
                    zRadius={3}
                />
            </div>

            <div className="Toggle__track" />
        </div>
    );
}
