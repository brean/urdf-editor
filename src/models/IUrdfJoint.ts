import type { IUrdfLink } from "./IUrdfLink"
// TODO: maybe a class instead of an interface so we can call functions
// to get children etc.

export interface IUrdfJoint {
  name?: string
  type?: string
  // rpy = roll, pitch, yaw (values between -pi and +pi)
  origin_rpy: number[]
  origin_xyz: number[]
  parent: IUrdfLink
  child: IUrdfLink
  axis_xyz?: number[]
}