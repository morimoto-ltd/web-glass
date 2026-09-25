const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d', { colorSpace: 'srgb' });

function toCSSColor(r: number, g: number, b: number, a: number = 1) {
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

function drawEvenUV(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.globalCompositeOperation = 'lighter';

    ctx.fillStyle = toCSSColor(0, 0, 0);
    ctx.fillRect(0, 0, width, height);

    const xGrad = ctx.createLinearGradient(0, 0, width, 0);
    xGrad.addColorStop(0, toCSSColor(255, 0, 0, 1));
    xGrad.addColorStop(1, toCSSColor(0,   0, 0, 1));
    ctx.fillStyle = xGrad;
    ctx.fillRect(0, 0, width, height);

    const yGrad = ctx.createLinearGradient(0, 0, 0, height);
    yGrad.addColorStop(0, toCSSColor(0, 255, 0, 1));
    yGrad.addColorStop(1, toCSSColor(0, 0,   0, 1));
    ctx.fillStyle = yGrad;
    ctx.fillRect(0, 0, width, height);
}

function drawNeutralZone(
    ctx: CanvasRenderingContext2D,
    width: number, height: number,
    borderRadius: number, zRadius: number,
) {
    const doubleZRadius = 2 * zRadius;

    ctx.globalCompositeOperation = 'source-over';

    ctx.filter = `blur(${zRadius}px)`;
    ctx.fillStyle = toCSSColor(128, 128, 0, 1);
    ctx.beginPath();
    ctx.roundRect(
        zRadius, zRadius,
        width - doubleZRadius, height - doubleZRadius,
        borderRadius,
    );
    ctx.fill();
}

export function getUV(
    width: number, height: number,
    borderRadius: number, zRadius: number,
): string {
    if (!ctx) {
        return '';
    }

    canvas.width = width;
    canvas.height = height;

    ctx.reset();
    drawEvenUV(ctx, width, height);
    drawNeutralZone(ctx, width, height, borderRadius, zRadius);

    return canvas.toDataURL('image/png');
}
