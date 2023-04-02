export function numberStringToArray(
    child: Element, name: string = 'xyz'): number[] | undefined {
  // parse a list of values from a string 
  // (like "1.0 2.2 3.0" into an array like [1, 2.2, 3])
  // used in URDF for position, orientation an color values
  if (child.hasAttribute(name)) {
    const xyzStr = child.getAttribute(name)?.split(' ')
    if (xyzStr) {
      const arr = []
      for (const nr of xyzStr) {
        arr.push(parseFloat(nr));
      }
      return arr;
    }
  }
}