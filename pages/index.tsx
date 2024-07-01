import { useEffect, useState, useRef } from "react";

import { IconButton } from "@volvo-cars/react-icons";
import { useReel } from "@volvo-cars/react-headless";

import { Car } from "../src/components/Car";
import { Filter } from "../src/components/Filter";
import { Car as CarType } from "../src/types/Car.interface";

// Fetching cars data at build time
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/cars");
  const data = await res.json();

  return {
    props: {
      initialCars: data,
    },
  };
};

interface HomeProps {
  initialCars: CarType[];
}

export default function Home({ initialCars }: HomeProps) {
  const ref = useRef(null);
  const { activeIndex, indicatorCount, previousButtonProps, nextButtonProps } =
    useReel({ ref });

  const [cars, setCars] = useState(initialCars);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data);
    };

    fetchCars();
  }, []);

  return (
    <div className="py-16 px-pagemargin">
      <Filter cars={initialCars} setCars={setCars} />
      <div
        ref={ref}
        aria-label="Our latest and greatest recharge car models"
        className="container reel scrollbar-none gap-x-gutter"
        data-bleed
      >
        {cars.map((car: CarType) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
      <div className="flex flex-row justify-end gap-x-8 mr-16 mt-16 until-lg:hidden">
        <IconButton
          iconName="navigation-chevronback"
          {...previousButtonProps}
        />
        <IconButton iconName="navigation-chevronforward" {...nextButtonProps} />
      </div>
      <div className="reel-indicators md:hidden" aria-hidden="true">
        {Array.from({ length: indicatorCount }).map((_, index) => (
          <div key={index} aria-current={activeIndex === index} />
        ))}
      </div>
    </div>
  );
}
