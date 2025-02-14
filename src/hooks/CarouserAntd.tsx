
import { Carousel } from "antd";
import * as React from "react";

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const CarouselAntd = () => {

  const [swipe, setSwipe] = React.useState<string | undefined>(undefined);

  console.log("swipe", swipe);

  return <>
    <Carousel
      draggable={true}
      onSwipe={(swipeDirection) => setSwipe(swipeDirection)}
    >
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>

  </>
}