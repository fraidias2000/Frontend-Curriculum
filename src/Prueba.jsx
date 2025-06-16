import React from "react";

const ProductCard = () => {
  const product = {
    name: "Auriculares GalaxyPulse",
    description: "Auriculares inalámbricos con cancelación activa de ruido y hasta 30h de batería.",
    price: 79.99,
    image: "https://picsum.photos/seed/headphones/200/200"
  };

  const handleVolver = () => {
      window.location.href = '/';
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={styles.title}>{product.name}</h2>
      <p style={styles.description}>{product.description}</p>
      <div style={styles.footer}>
        <span style={styles.price}>${product.price.toFixed(2)}</span>
        <button style={styles.button}>Comprar</button>
      </div>

      {/* Botón para volver */}
      <button onClick={handleVolver} style={styles.backButton}>
        ← Volver
      </button>
    </div>
  );
};

const styles = {
  card: {
    width: 280,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
    position: "relative",
  },
  image: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    margin: "10px 0 5px",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "6px 12px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  backButton: {
    marginTop: 20,
    padding: "6px 12px",
    backgroundColor: "#ccc",
    color: "#000",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    width: "100%",
  },
};

export default ProductCard;
