import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import { getKey } from '../../../../config/confg';

const token = getKey.MPBX_key;

const geolocateStyle = {
  float: 'left',
  margin: '16px',
  padding: '10px',
};

export const FormMap = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 4.6235648,
    longitude: -74.07534079999999,
    zoom: 12,
  });

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((location) => {
      setViewport({ ...viewport, latitude: location.coords.latitude, longitude: location.coords.longitude });
    });
  }, []);

  return (
    <div className="h-65 md:h-128 w-65 md:w-128">
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/ivangarcia/ck8dim0x200s81iqp9qjtric3"
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    </div>
  );
};
