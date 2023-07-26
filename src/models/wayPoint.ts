import { Point } from "./point";

export class WayPoint {
    constructor(
        public readonly id: string,
        public readonly points: Point[]
    ) { }
}