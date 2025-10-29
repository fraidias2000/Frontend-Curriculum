import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FormularioContacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const manejarSubmit = async (e) => {
  e.preventDefault();

  try {  
     const response = await fetch("https://backend-curriculum-3.onrender.com/api/contacto", {
     //const response = await fetch("http://localhost:8080/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Formulario enviado:", formData);
      setEnviado(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
    } else {
      const errorText = await response.text();
      console.error("Error del servidor:", errorText);
      alert("Error al enviar el formulario:\n" + errorText);
    }
  } catch (error) {
    console.error("Error de red:", error);
    alert("Error al conectar con el servidor");
  }
};


  return (
    <div className="pagina-bg">
      <div className="curriculum-layout">
        <div className="col-izquierda">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h2>¿Quieres ponerte en contacto?</h2>
            <p>Rellena el formulario y te responderé lo antes posible.</p>
            <img src="\images\imagen_contacto.avif" alt="Foto de perfil" className="imagen-contacto"/>
          </motion.div>
          
          
        </div>

        <div className="col-derecha">
          <motion.form
            onSubmit={manejarSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="cv-card"
          >
            <div className="mb-3">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="mb-3">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                className="form-control"
                rows="5"
                value={formData.mensaje}
                onChange={manejarCambio}
                required
              />
            </div>

            <button type="submit" className="btn-volver">
              Enviar
            </button>

            {enviado && <p style={{ marginTop: "1rem", color: "#fff" }}>¡Mensaje enviado!</p>}
          </motion.form>

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

export default FormularioContacto;
