import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { Layout } from '../../components/layout';
import { getKey } from '../../config/confg';
import { MarkerItem } from '../../components/molecules/MarkerItem';
import { MarketWindow } from '../../components/molecules/MarketWindow';
import mockMark from '../../helpers/mockMarkers';

const MapPage = () => {
  const token = getKey.MPBX_key;
  const [selectedMarker, setSelectedMarket] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 4.6235648,
    longitude: -74.07534079999999,
    zoom: 12,
  });
  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    } else {
      navigator.geolocation.getCurrentPosition((location) => {
        setViewport({ ...viewport, latitude: location.coords.latitude, longitude: location.coords.longitude });
      });
    }
  }, []);

  const handleClick = (marker) => {
    setSelectedMarket(marker);
    console.log('marker', marker);
  };

  return (
    <Layout>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/ivangarcia/ck8dim0x200s81iqp9qjtric3"
      >
        <div className="absolute mx-4 opacity-75 right-0 left-0 top-0 z-10 mt-4 bg-white h-12">
          <div className="p-2 font-bold">
            <label>Fijar alojamiento</label>
          </div>
        </div>

        {mockMark &&
          mockMark.map((marker) => (
            <MarkerItem
              key={marker.key}
              longitude={marker.coord.longitude}
              latitude={marker.coord.latitude}
              offsetLeft={-20}
              offsetTop={-10}
              onClick={(e) => {
                e.preventDefault();
                handleClick(marker);
              }}
            />
          ))}
        {selectedMarker && (
          <MarketWindow
            longitude={selectedMarker.coord.longitude}
            latitude={selectedMarker.coord.latitude}
            lodgingInfo={selectedMarker.lodgingInfo}
            closeOnClick={false}
            onClose={() => {
              setSelectedMarket(null);
            }}
            anchor="top"
          />
        )}
      </ReactMapGL>
    </Layout>
  );
};

export default MapPage;
