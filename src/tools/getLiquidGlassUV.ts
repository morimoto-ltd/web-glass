const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d', { colorSpace: 'srgb' });

function toCSSColor(r: number, g: number, b: number, a: number = 1) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function drawEvenUV(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.globalCompositeOperation = 'lighter'

    ctx.fillStyle = toCSSColor(0, 0, 0);
    ctx.fillRect(0, 0, width, height);

    const xGrad = ctx.createLinearGradient(0, 0, width, 0);
    xGrad.addColorStop(0, toCSSColor(255, 0, 0, 1));
    xGrad.addColorStop(1, toCSSColor(255, 0, 0, 0));
    ctx.fillStyle = xGrad;
    ctx.fillRect(0, 0, width, height);

    const yGrad = ctx.createLinearGradient(0, 0, 0, height);
    yGrad.addColorStop(0, toCSSColor(0, 255, 0, 1));
    yGrad.addColorStop(1, toCSSColor(0, 255, 0, 0));
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

/*
function easeGradient(
    gradient: CanvasGradient,
    stops: number,
    r1: number,
    g1: number,
    b1: number,
    a1: number,
    r2: number,
    g2: number,
    b2: number,
    a2: number,
) {
    const rStep = (r2 - r1) / stops;
    const gStep = (g2 - g1) / stops;
    const bStep = (b2 - b1) / stops;
    const aStep = (a2 - a1) / stops;
    let r = r1;
    let g = g1;
    let b = b1;
    let a = a1;

    gradient.addColorStop(0, toCSSColor(r, g, b, a));

    for (let i = 1; i <= stops; i += 1) {
        const offset = i / stops;

        r += rStep;
        g += gStep;
        b += bStep;
        a += aStep;

        gradient.addColorStop(offset, toCSSColor(r, g, b, a));
    }
}
*/

export function getLiquidGlassUV(
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
    // const uvData = ctx.getImageData(0, 0, width, height);
    uvData
    debugger

    /*
    borderRadius = Math.min(borderRadius, width >> 1, height >> 1);
    const halfWidth = width >> 1;
    const halfHeight = height >> 1;
    const xRadiusOffsetFromStart = 0 + borderRadius;
    const xRadiusOffsetFromEnd = width - borderRadius;
    const yRadiysOffsetFromStart = xRadiusOffsetFromStart;
    const yRadiysOffsetFromEnd = height - borderRadius;


    /*
    const bottomGradient = ctx.createLinearGradient(0, halfHeight, 0, height);
    easeGradient(
        bottomGradient, 10,
        0, 0, 0, 0,
        0, 0, 0, 1,
    );
    ctx.fillStyle = bottomGradient;
    ctx.fillRect(0, halfHeight, width, halfHeight);
    */
}

// TODO remove after testing
document.body.appendChild(canvas);
