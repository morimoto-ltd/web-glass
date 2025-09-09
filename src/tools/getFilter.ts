import { getUV } from "./getUV";

const NS = 'http://www.w3.org/2000/svg';

type FilterSharedData = {
    refsCount: number,
    timeout: number | null,
    svg: SVGElement,
};

const filters: Map<string, FilterSharedData> = new Map();

function createFilter(
    id: string,
    width: number, height: number,
    borderRadius: number, zRadius: number,
): SVGElement {
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
    feImage.setAttribute('href', getUV(width, height, borderRadius, zRadius));

    feDisplacementMap.setAttribute('in', 'SourceGraphic');
    feDisplacementMap.setAttribute('in2', 'uv');
    feDisplacementMap.setAttribute('scale', '0.7');
    feDisplacementMap.setAttribute('xChannelSelector', 'R');
    feDisplacementMap.setAttribute('yChannelSelector', 'G');
    feDisplacementMap.setAttribute('style', 'color-interpolation-filters: sRGB;');

    svg.appendChild(filter);
    filter.appendChild(feImage);
    filter.appendChild(feDisplacementMap);

    document.body.appendChild(svg);

    return svg;
}

export function getFilter(
    id: string,
    width: number, height: number,
    borderRadius: number, zRadius: number,
): () => void {
    let filterSharedData = filters.get(id);
    if (!filterSharedData) {
        filterSharedData = {
            refsCount: 1,
            timeout: null,
            svg: createFilter(id, width, height, borderRadius, zRadius),
        };
    } else {
        filterSharedData.refsCount += 1;
    }

    return function removeFilter() {
        filterSharedData.refsCount -= 1;
        if (!filterSharedData.timeout) {
            filterSharedData.timeout = setTimeout(() => {
                if (filterSharedData.refsCount === 0) {
                    filterSharedData.svg.remove();
                    filters.delete(id);
                }
            }, 100);
        }
    };
}
