"use client"
import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip, Polyline } from 'react-leaflet'
import { Icon } from 'leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

import {coordinates} from "../coordinates/coordinate"
import car from "../images/car.png"
import start from "../images/start.png"
import end from "../images/end.png"

const mainIcon = L.icon({
  iconUrl: icon.src,
  iconRetinaUrl: iconRetina.src,

  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = mainIcon;
const vehicleIcon = new L.Icon({
  iconUrl: car.src,
  iconSize: [32, 32],
});
const startPoint = new L.Icon({
  iconUrl: start.src,
  iconSize: [32, 32],
})
const endPoint = new L.Icon({
  iconUrl: end.src,
  iconSize: [32, 32],
})

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(0); {/* To underStand */}
  const positions: [number, number][] = coordinates.map((point) => [point.latitude,point.longitude,]);
  const hasCoords = positions.length > 0;

  const starting = positions[0];
  const ending = positions[positions.length - 1];

  return (
    <div className='h-[100vh]'>

        {hasCoords && <MapContainer
            center={positions[0]}
            zoom={13}
            style={{height: "100vh", width: "100%"}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            <Marker position={positions[currentPosition]} icon={vehicleIcon}>
                <Popup offset={[0, -20]}> 
                    <div style={{textAlign: 'center', zIndex: 1000}}>
                        Lat: {positions[currentPosition][0].toFixed(5)}  {/* To underStand */}
                        <br />
                        Long: {positions[currentPosition][1].toFixed(5)}
                    </div>
                </Popup>
            </Marker>

            <Marker position={ending} icon={endPoint}>
                <Tooltip permanent direction='top' offset={[0, 50]}>  {/* To underStand ofset */}
                    <div style={{fontWeight: 'bold', color: 'green'}}>
                        Rishihood University</div> {/* To underStand */}
                </Tooltip>
            </Marker>

            <Marker position={starting} icon={startPoint}>
                <Tooltip permanent direction='bottom' offset={[0, 20]}>  {/* To underStand ofset */}
                    <div style={{fontWeight: 'bold', color: 'red'}}>
                        Western Air Command</div> {/* To underStand */}
                </Tooltip>
            </Marker>

            <Polyline positions={positions} color='blue' weight={4}>
                <Tooltip sticky>
                    Route from Rishihood To Western Air Command
                </Tooltip>
            </Polyline>

        </MapContainer>}
  </div>
  )
}

export default Map;
