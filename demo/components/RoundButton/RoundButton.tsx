import type { ReactNode } from 'react';
import { LiquidGlassPiece } from 'web-liquid-glass';

import './RoundButton.css';

export type RoundButtonProps = {
    width?: number,
    height?: number,
    borderRadius?: number,
    zRadius?: number,
    className?: string,
    children: ReactNode,
};

export function RoundButton({
    width = 64,
    height = 64,
    borderRadius = 32,
    zRadius = 3,
    className,
    children,
}: RoundButtonProps) {
    return (
        <button type="button" className={`RoundButton ${className || ''}`}>
            <LiquidGlassPiece
                width={width}
                height={height}
                borderRadius={borderRadius}
                zRadius={zRadius}
            >
                <div className="RoundButton__children">
                    {children}
                </div>
            </LiquidGlassPiece>
        </button>
    );
}
