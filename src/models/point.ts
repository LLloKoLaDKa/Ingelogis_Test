export class Point {
    constructor(
        public readonly latitude: number,
        public readonly longitude: number
    ) { }

    toString(hasSemicolon: boolean) { return `${this.longitude},${this.latitude}${hasSemicolon ? ";" : ""}` };
    toArray(): [number, number] { return [this.latitude, this.longitude]; }
}