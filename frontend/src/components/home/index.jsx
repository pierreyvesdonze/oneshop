import { motion } from "framer-motion";

function Home() {
  return (
    <>
      {/* Bloc H1 entier animé */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <motion.div
          className="text-container"
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
        >
          <h1>Choose Your Shoes</h1>
        </motion.div>
      </div>

      {/* Panneaux 50/50 */}
      <div className="text-container-blur">
        <motion.div
          className="blur-panel"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay: 0.3,
          }}
        >
          MEN
        </motion.div>

        <motion.div
          className="blur-panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay: 0.3,
          }}
        >
          WOMEN
        </motion.div>
      </div>
    </>
  );
}

export default Home;
