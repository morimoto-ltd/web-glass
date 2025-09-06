import clsx from 'clsx';

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
    children: ReactNode,
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
            className={clsx('LiquidGlassPiece', className)}
            style={{
                '--width': `${width}px`,
                '--height': `${height}px`,
                '--borderRadius': `${borderRadius}px`,
                '--zRadius': `${zRadius}px`,
                '--filter': `url('#${id}')`,
            } as CSSProperties}
        >
            <div className={clsx('LiquidGlassPiece-layer', 'LiquidGlassPiece__shadow')} />
            <div className={clsx('LiquidGlassPiece-layer', 'LiquidGlassPiece__filter')} />

            <div className="LiquidGlassPiece__wrapper">
                {children}
            </div>

            <div className={clsx('LiquidGlassPiece-layer', 'LiquidGlassPiece__lighing')} inert>
                <div className={clsx('LiquidGlassPiece-layer', 'LiquidGlassPiece__lighing__light')} />
                <div className={clsx('LiquidGlassPiece-layer', 'LiquidGlassPiece__lighing__shadow')} />
            </div>
        </div>
    );
}
