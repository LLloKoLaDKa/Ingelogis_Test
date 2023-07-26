import { LatLngExpression } from "leaflet";
import { PropsWithChildren } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

interface MapProps {
    center?: LatLngExpression,
    zoom?: number,
    doubleClickZoom?: boolean,
    scrollWheelZoom?: boolean,
    style?: React.CSSProperties


}

export function Map(props: PropsWithChildren<MapProps>) {
    const {
        center,
        zoom,
        doubleClickZoom,
        scrollWheelZoom,
        style,
        children
    } = props;

    return (
        <MapContainer
            center={center ?? [51.505, -0.09]}
            zoom={zoom ?? 13}
            doubleClickZoom={doubleClickZoom ?? true}
            scrollWheelZoom={scrollWheelZoom ?? true}
            style={style ?? { height: '500px', flex: 1 }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    )
}