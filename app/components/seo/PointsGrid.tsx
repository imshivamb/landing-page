import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "../ui/carousel";
import NumbersCard from "./NumbersCard";
import { cardData } from "../../constants/constants";

const PointsGrid = () => {
  return (
    <Carousel className=" ">
      <CarouselContent className="*:basis-[80%] *:md:basis-1/4">
        {cardData.map((card, index) => (
          <CarouselItem key={index} className="!opacity-100">
            <NumbersCard card={card} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PointsGrid;
