import { useLeafletContext } from '@react-leaflet/core';
import L from 'leaflet';
import { useEffect } from "react";

interface LineProps {
    routes: [number, number][]
}

export function Line(props: LineProps) {
    const context = useLeafletContext()

    useEffect(() => {
        const line = L.polyline(props.routes, { color: 'lime' })

        const container = context.layerContainer || context.map;
        container.addLayer(line)

        context.map.flyTo(line.getCenter(), 12);
    })

    return null
}