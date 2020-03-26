import { H2 } from '../atoms';

export const BannerCard = ({ imgSrc, title = '', description = '' }) => (
  <div className="rounded-lg relative h-56 ">
    <img src={imgSrc} className="h-56 rounded-lg w-auto" />
    <div className=" absolute left-0 top-0 h-full w-full flex justify-end items-center p-4">
      <div className="w-1/2">
        <H2>{title}</H2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  </div>
);
