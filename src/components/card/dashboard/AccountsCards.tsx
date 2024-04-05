import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AccountCard from "./AccountCard";

export default function AccountsCards() {
  return (
    <div className="w-11/12">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <AccountCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <AccountCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <AccountCard />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        <CarouselNext />
      </Carousel>
    </div>
  );
}
