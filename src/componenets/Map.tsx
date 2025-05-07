import React from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

type Props = {
    location: {lat: number, lng: number}
}

const Map = () => {
  return (
    <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
    <TileLayer
      attribution="&copy; OpenStreetMap contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[location.lat, location.lng]} />
  </MapContainer>
  )
}

export default Map
