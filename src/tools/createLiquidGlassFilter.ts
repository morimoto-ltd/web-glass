import { getLiquidGlassUV } from "./getLiquidGlassUV";

const NS = 'http://www.w3.org/2000/svg';

export function createFilter(
    id: string,
    width: number, height: number,
    borderRadius: number, zRadius: number,
) {
    const svg = document.createElementNS(NS, 'svg');
    const filter = document.createElementNS(NS, 'filter')
    const feImage = document.createElementNS(NS, 'feImage');
    const feDisplacementMap = document.createElementNS(NS, 'feDisplacementMap');

    filter.setAttribute('id', id);
    filter.setAttribute('primitiveUnits', 'objectBoundingBox');

    feImage.setAttribute('result', 'uv');
    feImage.setAttribute('x', `0`);
    feImage.setAttribute('y', `0`);
    feImage.setAttribute('width', `1`);
    feImage.setAttribute('height', `1`);
    feImage.setAttribute('href', getLiquidGlassUV(width, height, borderRadius, zRadius));

    feDisplacementMap.setAttribute('in', 'SourceGraphic');
    feDisplacementMap.setAttribute('in2', 'uv');
    feDisplacementMap.setAttribute('scale', '0.8');
    feDisplacementMap.setAttribute('xChannelSelector', 'R');
    feDisplacementMap.setAttribute('yChannelSelector', 'G');
    feDisplacementMap.setAttribute('style', 'color-interpolation-filters: sRGB;');

    svg.appendChild(filter);
    filter.appendChild(feImage);
    filter.appendChild(feDisplacementMap);

    document.body.appendChild(svg);

    return function removeFilter() {
        svg.remove();
    }
}
