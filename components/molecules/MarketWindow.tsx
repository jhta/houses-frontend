import { Popup } from 'react-map-gl';
import cookies from 'js-cookie';

export const MarketWindow = (props) => {
  const { hospedaje } = props;
  cookies.set('hospedaje', JSON.stringify(hospedaje));
  return (
    <Popup {...props} longitude={hospedaje.longitude} latitude={hospedaje.latitude}>
      <div className="flex-grow w-64">
        <div className="pt-4 m-0">
          <img
            src="https://image.shutterstock.com/z/stock-photo-beautiful-exterior-of-newly-built-luxury-home-yard-with-green-grass-and-walkway-lead-to-ornately-529108441.jpg"
            alt="image"
          />
        </div>

        <div className="pt-2">
          <h1>{hospedaje.address}</h1>
          <div>
            <p className="text-xs">
              <strong className="text-primary">Hospedaje en: </strong>
              {hospedaje.description}
            </p>
            <p className="text-xs">
              <strong className="text-primary">Con acceso a: </strong>
              {`${hospedaje.kitchen ? 'Cocina' : ''}${
                hospedaje.kitchen ? `${hospedaje.parking ? ' - Parqueadero' : ''}` : ''
              }`}
            </p>
            <p className="text-xs">
              <strong className="text-primary">Alimentación: </strong>
              {`${hospedaje.food ? 'si' : 'No ofrece - Nevera'}`}
            </p>
          </div>
          <div className="flex justify-end py-2">
            <a
              className="bg-primary w-24 rounded py-1 justify-center text-center text-white h-8"
              href={`/stay/request?id=${hospedaje.id || `0`}`}
            >
              Solicitar
            </a>
          </div>
        </div>
      </div>
    </Popup>
  );
};
