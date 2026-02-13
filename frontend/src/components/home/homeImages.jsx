import { motion } from "framer-motion";     
import img1 from "../../../public/assets/images/promo/adidas-1.jpg";   
import img2 from "../../../public/assets/images/promo/adidas-2.jpg";
import img3 from "../../../public/assets/images/promo/adidas-3.jpg";
import img4 from "../../../public/assets/images/promo/adidas-4.jpg";

function HomeImages() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      {/* Image principale */}
      

      {/* Grille 2x2 pour les petites images */}
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        {[img1, img2, img3, img4].map((img, idx) => (
          <motion.div
            key={idx}
            className="small-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 * idx }} // léger stagger
          >
            <img
              src={img}
              alt={`Small ${idx + 1}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HomeImages;
