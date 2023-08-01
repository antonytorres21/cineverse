import React from "react";

function Visualizer() {
  return (
    <div>
      <div className="flex flex-row">
        <img src="ruta_imagen_1.jpg" alt="Imagen 1" className="w-48 h-36 m-2" />
        <img src="ruta_imagen_2.jpg" alt="Imagen 2" className="w-48 h-36 m-2" />
        <img src="ruta_imagen_3.jpg" alt="Imagen 3" className="w-48 h-36 m-2" />
        {/* Agrega más imágenes aquí */}
      </div>
    </div>
  );
}

export default Visualizer;
