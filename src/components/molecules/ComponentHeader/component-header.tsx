import React from "react";
import Text from "../../atoms/Typography/text";
import IconButton from "../../atoms/IconButton/icon-button";

interface ComponentHeaderProps {
  title: string;
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ title }) => {
  return (
    <div className="w-full flex justify-between pb-5">
      <div>
        <Text className="!text-light-slate-12 font-medium">
          {title}
        </Text>
      </div>
      <div>
        <IconButton />
      </div>
    </div>
  );
};

export default ComponentHeader;