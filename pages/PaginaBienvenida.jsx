
import React from "react";
import { motion } from "framer-motion";
import "../styles/myStyles.css";
import { hoverComponent } from "../animations/animation";
import { Link } from 'react-router-dom';

function PaginaBienvenida() {
    return (
        <div className="pagina-bg">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="card"
            >
                {/* Image */}
                <motion.img
                    src="/images/myImage.png"
                    alt="Foto de perfil"
                    initial={hoverComponent.initial}
                    animate={hoverComponent.animate}
                    transition={hoverComponent.transition}
                    whileHover={hoverComponent.whileHover}
                    className="perfil-img"
                />

                {/* Name */}
                <motion.h1
                    initial={hoverComponent.initial}
                    animate={hoverComponent.animate}
                    transition={hoverComponent.transition}
                    whileHover={hoverComponent.whileHover}
                    className="nombre"
                >
                    Álvaro Fraidias Monteagudo
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={hoverComponent.initial}
                    animate={hoverComponent.animate}
                    transition={hoverComponent.transition}
                    whileHover={hoverComponent.whileHover}
                    className="descripcion"
                >
                    Desarrollador Web Full-Stack
                </motion.p>

                {/* Button */}
                <Link to="/Curriculum">
                    <motion.button
                        initial={hoverComponent.initial}
                        animate={hoverComponent.animate}
                        transition={hoverComponent.transition}
                        whileHover={hoverComponent.whileHover}
                        whileTap={{ scale: 0.95 }}
                        className="btn-cv-welcome-page"
                    >
                        Ver Curriculum
                    </motion.button>
                </Link>
                {/* Button */}
                <Link to="https://github.com/fraidias2000?tab=repositories">
                    <motion.button
                        initial={hoverComponent.initial}
                        animate={hoverComponent.animate}
                        transition={hoverComponent.transition}
                        whileHover={hoverComponent.whileHover}
                        whileTap={{ scale: 0.95 }}
                        className="btn-cv-welcome-page"
                    >
                        Ver GitHub
                    </motion.button>
                </Link>
                {/* Button */}
                <Link to="/FormularioContacto">
                    <motion.button
                        initial={hoverComponent.initial}
                        animate={hoverComponent.animate}
                        transition={hoverComponent.transition}
                        whileHover={hoverComponent.whileHover}
                        whileTap={{ scale: 0.95 }}
                        className="btn-cv-welcome-page"
                    >
                        Contacto
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}

export default PaginaBienvenida;
