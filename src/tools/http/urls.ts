export class Urls {
    public static getOsrmUrl = (replace: string | undefined) => "https://router.project-osrm.org/route/v1/driving/{points}?geometries=geojson&generate_hints=false&overview=full".replace("{points}", replace ?? "");
}