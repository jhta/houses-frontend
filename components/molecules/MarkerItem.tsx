import { Marker } from 'react-map-gl';

export const MarkerItem = (props) => {
  const { handleClick } = props;

  return (
    <Marker {...props}>
      <button onClick={handleClick} {...props}>
        <img src="/images/icon.svg" alt="marker" />
      </button>
    </Marker>
  );
};
