import React from "react";
import Image, { StaticImageData } from "next/image";
import { AiOutlineStar } from "react-icons/ai";

interface StarIconButtonProps {
  className?: string;
}

const StarIconButton: React.FC<StarIconButtonProps> = ({ className }) => {
  return <AiOutlineStar className="inline-block mr-2.5" />;
};

export default StarIconButton;
