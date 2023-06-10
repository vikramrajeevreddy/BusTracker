import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 42.47275,
    lng: -83.39798,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD3WxX9QS-IUDUO7K0TxbHL1T3mEuTf1jQ">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {/* Additional map components or markers can be added here */}
      </GoogleMap>
    </LoadScript>
  );
}
