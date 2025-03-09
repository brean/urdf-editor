import type { DomEvent } from "@threlte/extras";
import { Camera, Color, Vector3 } from "three";

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

export function mousePos(event: DomEvent, camera: Camera): Vector3 {
  // get mouse position in world coordinates based on position of
  // canvas.
  const rect = (event.target as HTMLElement).getBoundingClientRect()
    const mouse_x = ((event.clientX  - rect.left) / rect.width) * 2 - 1;
    const mouse_y = ((rect.top - event.clientY) / rect.height) * 2 + 1;
  // Make the preview follow the mouse
  const vector = new Vector3(mouse_x, mouse_y, 0);
  vector.unproject(camera);
  const dir = vector.sub(camera.position).normalize();
  const distance = - camera.position.z / dir.z;
  return camera.position.clone().add(dir.multiplyScalar(distance));
}