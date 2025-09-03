import { useLayoutEffect, type ReactNode } from 'react';
import { createFilter } from '../../tools/createLiquidGlassFilter';

import './LiquidGlassPiece.css';

export type LiquidGlassBoxProps = {
    id: string,
    width: number,
    height: number,
    borderRadius: number,
    zRadius: number,
    children: ReactNode,
}

export function LiquidGlassPiece({
    id,
    width,
    height,
    borderRadius,
    zRadius,
    children,
}: LiquidGlassBoxProps) {
    // TODO dynamic width/height
    useLayoutEffect(
        () => createFilter(id, width, height, borderRadius, zRadius),
        [id, width, height, borderRadius, zRadius],
    );

    return (
        <div
            className="LiquidGlassBox"
            style={{
                '--width': `${width}px`,
                '--height': `${height}px`,
                '--bRadius': `${borderRadius}px`,
                '--zRadius': `${zRadius}px`,
                '--filter': `url('#${id}')`,
            }}
        >
            <div className="LiquidGlassBox__shadow" />
            <div className="LiquidGlassBox__filter" />

            <div className="LiquidGlassBox__wrapper">
                {children}
            </div>

            <div className="LiquidGlassBox__lighing" inert>
                <div className="LiquidGlassBox__lighing__light" />
                <div className="LiquidGlassBox__lighing__shadow" />
            </div>
        </div>
    );
}
