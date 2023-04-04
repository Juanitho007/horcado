import image0 from "/public/img/0.png";
import image1 from "/public/img/1.png";
import image2 from "/public/img/2.png";
import image3 from "/public/img/3.png";
import image4 from "/public/img/4.png";
import image5 from "/public/img/5.png";
import image6 from "/public/img/6.png";
import image7 from "/public/img/7.png";
import image8 from "/public/img/8.png";
import image9 from "/public/img/9.png";

const images: string[] = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

interface Props {
  imageNumber: number;
}

export function HangImage({ imageNumber }: Props) {
  if (imageNumber >= 9) {
    imageNumber = 9;
  } else if (imageNumber <= 0) {
    imageNumber = 0;
  }
  return (
    <img
      className="w-64 inline-flex p-2"
      src={images[imageNumber]}
      alt="Hang image"
    />
  );
}
