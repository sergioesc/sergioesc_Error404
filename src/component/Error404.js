import React from "react";

export default function Error404() {
  return (
    <div>
      <main>
        <div className="notFound">
          <div className="head404">
            <span>ERROR 404 NOT FOUND</span>
          </div>
          <div className="body404">
            <span className="firstSpan">
              La solicitud realizada no existe o no se encuentra disponible.
            </span>

            <span>
              Se produjo una excepción fatal 404 en C0DE:M4L4ID34 en 0xC0DEBA5E.
              La solicitud actual se cerrará.
            </span>

            <span>
              * Pulse cualquier tecla para volver a la página anterior.
            </span>

            <span>Presiona cualquier tecla para continuar... <span className="tilt">&#9608;</span></span>
          </div>
        </div>
      </main>
    </div>
  );
}
