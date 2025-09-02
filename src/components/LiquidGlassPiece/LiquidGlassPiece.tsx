import { useLayoutEffect, type ReactNode } from 'react';
import { createFilter } from '../../tools/createLiquidGlassFilter';

// import './LiquidGlassPiece.scss';

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
                /* temp */
                position: 'absolute',
                top: '50px',
                left: '50px',
                /**/

                width: `${width}px`,
                height: `${height}px`,
                borderRadius: `${borderRadius}px`,
                backdropFilter: `url('#${id}')`,
                '-webkit-backdrop-filter': `url('#${id}')`,
            }}
        >
            {children}

            <div className="LiquidGlassBox__box"/>
            <div className="LiquidGlassBox__filter"/>
        </div>
    );
}
