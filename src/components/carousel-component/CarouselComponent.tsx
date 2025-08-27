import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { CarouselComponentProps } from "../../types/appTypes";

const CarouselComponent = ({ slideImages }: CarouselComponentProps) => {
  return (
    <div className="w-full relative">
      <Carousel
        autoPlay
        interval={7000}
        transitionTime={5000}
        infiniteLoop
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
      >
        {slideImages.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
