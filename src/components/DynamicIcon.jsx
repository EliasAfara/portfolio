import React from "react";
import * as IconsHi from "react-icons/hi";
import * as IconsFi from "react-icons/fi";

const DynamicIcon = ({ name, className }) => {
  const Icons = { ...IconsHi, ...IconsFi };
  const IconComponent = Icons[name];
  if (!IconComponent) return <IconsHi.HiBan className={className} />;
  return <IconComponent className={className} />;
};

export default DynamicIcon;
