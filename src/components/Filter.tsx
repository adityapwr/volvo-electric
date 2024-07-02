import { useState, useEffect } from "react";

import { Car as CarType } from "../types/Car.interface";

interface FilterProps {
  cars: CarType[];
  setCars: (cars: CarType[]) => void;
}

export const Filter: React.FC<FilterProps> = ({ cars, setCars }) => {
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    setCars(cars.filter((car) => car.bodyType === filter));
  };

  return (
    <div>
      <div
        aria-label="Filter cars by body type"
        className="flex gap-8 my-8 -mx-8 md:mx-8"
        role="tablist"
      >
        {cars?.length > 0 &&
          cars
            .filter(
              (car, index, array) =>
                array.findIndex((c) => c.bodyType === car.bodyType) === index
            )
            .map((car, index) => (
              <button
                key={index}
                aria-controls={`panel${index}`}
                aria-selected={activeFilter === car.bodyType}
                className={`px-8 font-medium tap-area rounded-sm ${
                  activeFilter === car.bodyType
                    ? "border-primary"
                    : "border-transparent"
                }`}
                id={`tab-${car.bodyType}-${index}`}
                role="tab"
                tabIndex={0}
                onClick={() => handleFilter(car.bodyType)}
              >
                <div className="flex items-center h-48 border-b-2 transition-colors">
                  {car.bodyType.toUpperCase()}
                </div>
              </button>
            ))}
      </div>
    </div>
  );
};
