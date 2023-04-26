import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { useState } from "react";

export default function AvatarLink() {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <Avatar alt="Ahmet Bolat" src="ahmet_bolat.png" />
      {isHovering && (
        <Avatar
          alt="Ahmet Bolat"
          src="ahmet_bolat.png"
          style={{
            position: "absolute",
            top: "100%",
            left: "-500%",
            width: "500%",
            height: "auto",
            zIndex: 1000,
          }}
        />
      )}
    </Link>
  );
}
