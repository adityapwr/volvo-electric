import { Car as CarType } from "../types/Car.interface";

interface CarProps {
  car: CarType;
}

export const Car: React.FC<CarProps> = ({ car }) => {
  const { id, modelName, bodyType, modelType, imageUrl } = car;

  return (
    <div className="flex-col flex-shrink-0 flex-grow-0 gap-y-24 w-xs h-full snap-start">
      <div>
        <p className="text-secondary font-medium">{bodyType.toUpperCase()}</p>
        <div className="flex flex-col md:flex-row">
          <p className="font-medium mr-8">{modelName}</p>
          <p className="text-secondary">{modelType}</p>
        </div>
      </div>
      <img
        alt={modelName}
        className="object-cover aspect-4/3 w-full"
        height="300"
        src={imageUrl}
        style={{ height: "auto" }}
        width="400"
      />
      <div className="flex flex-row justify-center gap-x-24">
        <a className="button-text text-accent-blue" href={`/learn/${id}`}>
          Learn
        </a>
        <a className="button-text text-accent-blue" href={`/shop/${id}`}>
          Shop
        </a>
      </div>
    </div>
  );
};
