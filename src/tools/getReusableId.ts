export function getReusableId(
    width: number, height: number,
    borderRadius: number, zRadius: number,
) {
    return `${width}x${height}-${borderRadius}-${zRadius}`;
}
