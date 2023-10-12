import React from "react";
import defaulIMG from "../assets/DefaultImage.png";

function PresentationCardPerson({ credict }) {
  return (
    <div
      key={credict.id}
      className="bg-white rounded-lg shadow-md relative m-2 transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500"
      style={{ minWidth: "160px" }}
    >
      <img
        src={
          credict.profile_path
            ? `https://image.tmdb.org/t/p/w300${credict.profile_path}`
            : defaulIMG
        }
        alt={credict.title}
        className="rounded"
      />
      <div className="text-center m-1">
        <h1 className="text-lg font-semibold">{credict.name}</h1>
        <h3 className="text-lg ">{credict.character}</h3>
      </div>
    </div>
  );
}

export default PresentationCardPerson;
