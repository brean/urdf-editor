import type { IUrdfJoint } from "./IUrdfJoint"
import type { IUrdfLink } from "./IUrdfLink"

export interface IUrdfRobot {
  name: string
  links: {[name: string]: IUrdfLink}
  joints?: IUrdfJoint[]
}