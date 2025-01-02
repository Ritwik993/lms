import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars }: { stars: number }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index} >
        {stars >= index + 1 ? (
          <FaStar className="text-[#FD8E1F]"/>
        ) : stars >= index+0.5 ? (
          <FaStarHalfAlt className="text-[#FD8E1F]" />
        ) : (
          <AiOutlineStar className="text-[#FD8E1F]" />
        )}
      </span>
    );
  });

  return <div className="flex gap-1 items-center">{ratingStar}</div>;
};

export default Stars;
