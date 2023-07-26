import { Point } from "./point";

export class RouteResponse {
    constructor(
        public readonly code: string,
        public readonly coordinates: Point[] | null,
        public readonly message: string,
    ) { }

    static mapTo(data: any): RouteResponse {
        if (data === undefined) return new RouteResponse("Mapping error", null, "Error occurred mapping model")

        return new RouteResponse(
            data.code,
            (data.routes[0].geometry.coordinates as any[]).map((value) => new Point(value[1], value[0])),
            data.message
        );
    }
}