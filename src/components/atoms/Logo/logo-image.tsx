import React from "react";
import Image, { StaticImageData } from "next/image";

interface LogoImageProps {
  LogoImage: StaticImageData;
  className?: string;
  alt?: string;
  size?: number;
  onClick?: (...args: any) => any;
}

const LogoImage: React.FC<LogoImageProps> = ({
  onClick,
  className,
  LogoImage,
  alt,
  size = 30,
}) => {
  return (
    <div className={`${className ? className : ""} inline-flex`}>
      <Image
        onClick={onClick}
        className="inline-block w-6 h-6 mr-1"
        alt={alt ? alt : "Open Sauced Logo"}
        width={size}
        height={size}
        src={LogoImage ? LogoImage : "/public/openSauced.svg"}
      />
    </div>
  );
};

export default LogoImage;
