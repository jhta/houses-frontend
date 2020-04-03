import { Popup } from 'react-map-gl';

export const MarketWindow = (props) => {
  console.log('props', props);
  const { marker } = props;
  return (
    <Popup {...props} longitude={marker.coord.longitude} latitude={marker.coord.latitude}>
      <div className="flex-grow w-64">
        <div className="pt-4 m-0">
          <img
            src="https://image.shutterstock.com/z/stock-photo-beautiful-exterior-of-newly-built-luxury-home-yard-with-green-grass-and-walkway-lead-to-ornately-529108441.jpg"
            alt="image"
          />
        </div>

        <div className="pt-2">
          <h1>{marker.lodgingInfo.name}</h1>
          <div>
            <p className="text-xs">
              <strong className="text-primary">Hospedaje en: </strong>
              {marker.lodgingInfo.lodging}
            </p>
            <p className="text-xs">
              <strong className="text-primary">Con acceso a: </strong>
              {marker.lodgingInfo.access}
            </p>
            <p className="text-xs">
              <strong className="text-primary">Alimentación: </strong>
              {marker.lodgingInfo.food}
            </p>
          </div>
          <div className="flex justify-end py-2">
            <a
              className="bg-primary w-24 rounded py-1 justify-center text-center text-white h-8"
              href={`/stay/request?id=${marker.key || `0`}`}
            >
              Solicitar
            </a>
          </div>
        </div>
      </div>
    </Popup>
  );
};
