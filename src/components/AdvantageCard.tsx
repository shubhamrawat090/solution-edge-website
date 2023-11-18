import React from "react";
import * as Icons from "../utils/iconUtils";

interface AdvantageCardProps {
  heading: string;
  text: string;
  icon: string;
}

const AdvantageCard = ({ heading, text, icon }: AdvantageCardProps) => {
  // Logic to dynamically load an icon from react-icons library based on the name of the icon only
  // For example, FaArrow will automatically load the react-icons/fa package and from it we get the required component
  const iconPkgName = icon.substring(0, 2) + "Icons";
  const iconPkg = Icons[iconPkgName as keyof typeof Icons];
  const SelectedIcon = iconPkg[
    icon as keyof typeof iconPkg
  ] as React.ComponentType;

  if (!SelectedIcon) {
    return <div>Icon not found</div>; // Handle the case where the icon is not found
  }

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md bg-white">
      <div className="w-max p-1 rounded-lg bg-caribbeangreen-400 text-white mx-auto sm:ml-0 text-[2.25rem]">
        <SelectedIcon />
      </div>
      <h3 className="mt-6 text-xl font-medium text-caribbeangreen-600">
        {heading}
      </h3>
      <p className="mt-2 font-display text-md text-pure-greys-900">{text}</p>
    </div>
  );
};

export default AdvantageCard;
