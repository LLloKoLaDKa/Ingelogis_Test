import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Point } from "../../models/point";
import { WayPoint } from "../../models/wayPoint";

interface MapState {
    waypoints: WayPoint[],
    currentWayId: string
}

const initialState: MapState = {
    waypoints: [
        new WayPoint("5fa0bead-585b-449d-b4ca-06cc1f86dfff", [
            new Point(59.84660399, 30.29496392), new Point(59.82934196, 30.42423701), new Point(59.83567701, 30.38064206)
        ]),
        new WayPoint("b63d7145-3249-4968-a356-cb4811c4800d", [
            new Point(59.82934196, 30.42423701), new Point(59.82761295, 30.41705607), new Point(59.84660399, 30.29496392)
        ]),
        new WayPoint("79d13483-600a-4e4c-9016-aec7dee0e762", [
            new Point(59.83567701, 30.38064206), new Point(59.84660399, 30.29496392), new Point(59.82761295, 30.41705607)
        ])
    ],
    currentWayId: "5fa0bead-585b-449d-b4ca-06cc1f86dfff"
}

export const MapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        setWaypoints(state, action: PayloadAction<WayPoint[]>) {
            const points = state.waypoints;
            points.push(...action.payload);
        },

        setCurrentWayId(state, action: PayloadAction<string>) {
            state.currentWayId = action.payload;
        }
    }
});

export default MapSlice.reducer;