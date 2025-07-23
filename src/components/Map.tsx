"use client"
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import start from "@/images/end.png"
delete (L.Icon.Default as any).prototype._getIconUrl;

const mainIcon = L.icon({
    iconUrl: icon.src,
    iconRetinaUrl: iconRetina.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = mainIcon;
const startPoint = new L.Icon({
    iconUrl: start.src,
    iconSize: [32, 32],
})

const RecenterMap = ({ position }: { position: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position);
    }, [position]);
    return null;
};

const Map = () => {
    const [position, setPosition] = useState<[number, number] | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            console.error('Geolocation not supported');
            return;
        }

        const watcher = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition([latitude, longitude]);
            },
            (err) => console.error('Error tracking location', err),
            {
                enableHighAccuracy: true,
                maximumAge: 1000,
                timeout: 5000,
            }
        );
        return () => navigator.geolocation.clearWatch(watcher);
    }, []);

    return (
        <div className='h-[90vh] w-[100vh]'>

            {position ? <MapContainer
                center={position}
                zoom={15}
                style={{ height: "90vh", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={startPoint}></Marker>
                <RecenterMap position={position} />
            </MapContainer>
                : <p>Fetching your live location...</p>}
        </div>
    )
}

export default Map;
