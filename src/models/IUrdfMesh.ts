export interface IUrdfMesh {
  filename: string;
  type: 'stl' | 'fbx' | 'obj' | 'dae';
  scale: number[];
}