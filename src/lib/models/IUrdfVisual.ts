import type { IUrdfBox } from "./IUrdfBox";
import type { IUrdfCylinder } from "./IUrdfCylinder";
import type { IUrdfMesh } from "./IUrdfMesh";

export interface IUrdfVisual {
  origin_xyz?: number[]
  origin_rpy?: number[]
  geometry: IUrdfBox | IUrdfCylinder | IUrdfMesh;
  type: 'box' | 'cylinder' | 'mesh'
  // material color
  color_rgba?: number[];
}