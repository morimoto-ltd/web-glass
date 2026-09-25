import { useLayoutEffect, useMemo, type CSSProperties, type ReactNode } from 'react';
import { getReusableId } from '../../tools/getReusableId';
import { getFilter } from '../../tools/getFilter';

import './LiquidGlassPiece.css';

export type LiquidGlassPieceProps = {
    width: number,
    height: number,
    borderRadius: number,
    zRadius: number,
    className?: string,
    children?: ReactNode,
}

export function LiquidGlassPiece({
    width,
    height,
    borderRadius,
    zRadius,
    className,
    children,
}: LiquidGlassPieceProps) {
    const id = useMemo(
        () => getReusableId(width, height, borderRadius, zRadius),
        [width, height, borderRadius, zRadius],
    );

    // TODO dynamic width/height
    useLayoutEffect(
        () => getFilter(id, width, height, borderRadius, zRadius),
        [id, width, height, borderRadius, zRadius],
    );

    return (
        <div
            className={`LiquidGlassPiece ${className}`}
            style={{
                '--readonly-lg-width': `${width}px`,
                '--readonly-lg-height': `${height}px`,
                '--readonly-lg-borderRadius': `${borderRadius}px`,
                '--readonly-lg-zRadius': `${zRadius}px`,
                '--readonly-lg-filter': `url('#${id}')`,
            } as CSSProperties}
        >
            <div className="LiquidGlassPiece-layer LiquidGlassPiece__shadow" inert/>
            <div className="LiquidGlassPiece-layer LiquidGlassPiece__filter" inert/>

            <div className="LiquidGlassPiece-layer LiquidGlassPiece__wrapper">
                {children}
            </div>

            <div className="LiquidGlassPiece-layer LiquidGlassPiece__lighing" inert>
                <div className="LiquidGlassPiece-layer LiquidGlassPiece__lighing__top" />
                <div className="LiquidGlassPiece-layer LiquidGlassPiece__lighing__bottom" />
            </div>
        </div>
    );
}
