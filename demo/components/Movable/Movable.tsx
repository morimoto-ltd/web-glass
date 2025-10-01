import { useRef, useLayoutEffect, type ReactNode } from "react";

import './Movable.css';

type MovableProps = {
    children: ReactNode;
};

export function Movable({ children }: MovableProps) {
    const targetRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (targetRef && targetRef.current instanceof HTMLElement) {
            const targetEl = targetRef.current;
            let isOverlapping = false;
            let isMoving = false;
            let offsetX = 0;
            let offsetY = 0;
            let prevX = 0;
            let prevY = 0;

            const mousemove = function onMouseMove(event: MouseEvent) {
                if (isMoving) {
                    event.preventDefault();

                    const x = event.pageX;
                    const y = event.pageY;

                    offsetX += x - prevX;
                    offsetY += y - prevY;

                    prevX = x;
                    prevY = y;

                    targetEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                }
            }

            const mouseenter = function onMouserEnter() {
                isOverlapping = true;
            }

            const mouseleave = function onMouserLeave() {
                isOverlapping = false;
            }

            const pointerdown = function onPointerDown(event: MouseEvent) {
                if (isOverlapping) {
                    prevX = event.pageX;
                    prevY = event.pageY;
                    isMoving = true;
                    targetEl.style.cursor = 'grabbing';
                    targetEl.style.willChange = 'transform';
                }
            };

            const pointerup = function onPointerUp() {
                isMoving = false;
                targetEl.style.cursor = 'grab';
                targetEl.style.willChange = '';
            };

            targetEl.addEventListener('mousemove', mousemove, {});
            targetEl.addEventListener('mouseenter', mouseenter, {});
            window.addEventListener('mouseleave', mouseleave, {});
            window.addEventListener('pointerdown', pointerdown, {});
            window.addEventListener('pointerup', pointerup, {});

            return () => {
                window.removeEventListener('mousemove', mousemove, {});
                window.removeEventListener('mouseenter', mouseenter, {});
                window.removeEventListener('mouseleave', mouseleave, {});
                window.removeEventListener('pointerdown', pointerdown, {});
                window.removeEventListener('pointerup', pointerup, {});
            };
        }

        return () => {};
    }, [targetRef]);

    return (
        <div className="Movable-root">
            <div ref={targetRef} style={{ cursor: 'grab' }}>
                {children}
            </div>
        </div>
    );
}
