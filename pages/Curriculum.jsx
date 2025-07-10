import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/myStyles.css";
import { hoverComponent } from "../animations/animation";
import { Link } from "react-router-dom";

function Curriculum() {
  const [cv, setCv] = useState(null);

  useEffect(() => {
    fetch("https://backend-curriculum-3.onrender.com/api/curriculum/1")
      .then((res) => res.json())
      .then((data) => setCv(data))
      .catch((error) => console.error("Error cargando el CV:", error));
  }, []);

  if (!cv) return <div className="pagina-bg"><p>Cargando curriculum...</p></div>;

  return (
    <div className="pagina-bg">
      <div className="curriculum-layout">
        {/* Columna izquierda */}
        <div className="col-izquierda">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <motion.img
              src="/images/myImage.png"
              alt="Foto de perfil"
              {...hoverComponent}
              className="perfil-img"
            />

            <motion.h1 className="nombre">{cv.nombre}</motion.h1>
            <p className="descripcion">{cv.email}</p>
            <p className="descripcion">{cv.telefono}</p>
            <p className="descripcion">{cv.ubicacion}</p>
          </motion.div>
        </div>

        {/* Columna derecha */}
        <div className="col-derecha">
          <div className="cv-sections">

            {/* Resumen */}
            <motion.div className="cv-card" whileHover={{ scale: 0.97 }}>
              <h2>Resumen Profesional</h2>
              <p>{cv.resumen}</p>
            </motion.div>

            {/* Formación */}
            <motion.div className="cv-card" whileHover={{ scale: 0.97 }}>
              <h2>Formación Académica</h2>
              {cv.formacion.map((item, index) => (
                <div key={index} className="cv-subsection">
                  <p><strong>{item.puesto_trabajo}</strong></p>
                  <p><strong>{item.titulo}</strong></p>
                  <p>{item.tiempo} | {item.lugar}</p>
                  
                </div>
              ))}
            </motion.div>

            {/* Experiencia */}
            <motion.div className="cv-card" whileHover={{ scale: 0.97 }}>
              <h2>Historial Laboral</h2>
              {cv.experiencia.map((item, index) => (
                <div key={index} className="cv-subsection">
                  <strong>{item.puesto_trabajo}</strong>
                  <p>{item.tiempo} | {item.lugar}</p>
                  <ul>
                  {item.descripcion_trabajo
                    .split('.')
                    .map((desc, i) => desc.trim())
                    .filter((desc) => desc.length > 0)
                    .map((desc, i) => (
                      <li key={i}> {desc}.</li>
                  ))}
                </ul>
                </div>
              ))}
            </motion.div>

            {/* Aptitudes */}
            <motion.div className="cv-card" whileHover={{ scale: 0.97 }}>
              <h2>Aptitudes</h2>
              <ul>
                {cv.aptitudes.map((item, index) => (
                  <li key={index}> {item.descripcion}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Botón volver */}
          <div className="volver-container">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-volver"
              >
                Volver a la página principal
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
