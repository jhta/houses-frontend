import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import { getKey } from '../../../../config/confg';

const token = getKey.MPBX_key;

const geolocateStyle = {
  float: 'left',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '16px',
  padding: '10px',
};

const defaultViewport = {
  width: '100%',
  height: '100%',
  latitude: 4.6235648,
  longitude: -74.07534079999999,
  zoom: 15,
};

const defaultPinLocation = {
  latitude: 4.6235648,
  longitude: -74.07534079999999,
};

export const FormMap = ({ setPosition }) => {
  const [viewport, setViewport] = useState(defaultViewport);

  const [pin, setPin] = useState(defaultPinLocation);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setViewport({ ...viewport, latitude, longitude });
      setPin({ latitude, longitude });
      setPosition({ latitude, longitude });
    });
  }, []);

  const onDragEnd = (e) => {
    const latitude = e.lngLat[1];
    const longitude = e.lngLat[0];
    setPin({ latitude, longitude });
    setPosition({ latitude, longitude });
  };

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
        <Marker
          longitude={pin.longitude}
          latitude={pin.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragEnd={onDragEnd}
        >
          <Pin />
        </Marker>
        <div className="nav absolute bottom-0 left-0 p-4">
          <NavigationControl onViewportChange={(v) => setViewport(v)} />
        </div>
      </ReactMapGL>
    </div>
  );
};

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  fill: ' #54B6FF',
  stroke: 'none',
};
const Pin = (props) => {
  const { size = 20 } = props;

  return (
    <svg height="30" viewBox="0 0 24 24" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
};
