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
      <CarouselContent className="*:basis-2/3 *:md:basis-1/4">
        {cardData.map((card, index) => (
          <CarouselItem key={index} className="">
            <NumbersCard card={card} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PointsGrid;
