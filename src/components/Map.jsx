import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  useNavigate,
} from "react-leaflet";
function Map({ mapLatLon, cityName }) {
  const ChangeCenter = ({ position }) => {
    const map = useMap();
    map.setView(position);
    return null;
  };
  const detectClick = ({ position }) => {
    const navigate = useNavigate();
    useMapEvents({
      click: (e) => {
        navigate(`addcity?lat=${e.latlng.lat}&long=${e.latlng.lng}`);
        console.log(e);
      },
    });
  };
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeCenter position={mapPosition} />
      <DetectClick />
    </MapContainer>
  );
}

export default Map;
