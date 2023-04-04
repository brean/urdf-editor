import { Color, Euler, Quaternion, Vector3 } from "three";

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

export function numberArrayToColor(col?: number[]) {
  if (!col) {
    return new Color('white')
  }
  return new Color(col[0], col[1], col[2]);
}

export function numberArrayToVector3(vec?: number[]) {
  if (!vec) {
    return new Vector3(0, 0, 0);
  }
  return new Vector3(vec[0], vec[1], vec[2]);
}

export function numberArrayToEuler(rpy?: number[]) {
  if (!rpy) {
    return new Euler(0, 0, 0);
  }

  return new Euler(rpy[0], rpy[1], rpy[2]);
}

export function numberArrayToQuaternion(quat?: number[]) {
  if (!quat) {
    return new Quaternion(0, 0, 0, 1);
  }
  return new Quaternion(quat[0], quat[1], quat[2], quat[3]);
}