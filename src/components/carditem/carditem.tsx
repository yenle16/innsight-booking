import React from "react";
import Image from "next/image";

interface CardItemProps {
  item: {
    img: string;
    name: string;
    describe: string;
    score: number;
    reviews: number;
  };
  imgWidth?: number;
  imgHeight?: number;
}

const CardItem: React.FC<CardItemProps> = ({ item, imgWidth, imgHeight }) => {
  const imgLoader = async () => {
    const response = await fetch(item.img);
    const blob = await response.blob();
    const image = await createImageBitmap(blob);

    return {
      src: image,
      width: imgWidth ?? 100,
      height: imgHeight ?? 24,
    };
  };

  return (
    <div
      className={`group relative overflow-hidden bg-white shadow-2xl `}
    >
      <div className="h-60">
        {/* <Image
          src={imgLoader}
          alt="City"
          className="h-full w-full object-cover object-center"
        /> */}
      </div>
      <div className="h-1/2 p-4 pl-3 pr-3">
        <h3 className="mb-2 text-base font-semibold">
          <div className="font-bold text-black">{item.name}</div>
        </h3>
        <p className={''}>{item.describe}</p>
        <div className="flex flex-row justify-between items-center text-xs mt-2">
          <div className={`w-fit h-fit flex items-center`}>
            <span className={` p-1 rounded-full `}>{item.score}/10</span>
            {item.score > 9 ? "Excellent" : "Good"}
          </div>

          <p>{item.reviews} Reviews</p>
        </div>
      </div>
    </div>
  );
};

CardItem.defaultProps = {
  imgWidth: 100,
  imgHeight: 24,
};

export default CardItem;