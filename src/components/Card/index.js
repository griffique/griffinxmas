import React, { useState } from "react";
// import Sound from "react-sound";
import { motion } from "framer-motion";
import styles from "./styles.module.sass";

const cardVariants = {
  flipped: {
    rotateY: 180,
    transition: { duration: 0.5 },
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  notFlipped: () => ({
    rotateY: 0,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    transition: { duration: 0.5 },
  }),
};
const Card = () => {
  const [fading, setFading] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const fadeFunction = () => {
    setFading(!fading);
  };

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <div role="button" tabIndex={0} className={styles.flashcards}>
        <div>
          <motion.div
            className={styles.card}
            onClick={() => handleClick()}
            variants={cardVariants}
            animate={flipped ? "flipped" : "notFlipped"}
          >
            <motion.div
              className={
                flipped ? `${styles.backContent}` : `${styles.frontContent}`
              }
              onMouseDown={() => {
                fadeFunction();
              }}
              onMouseUp={() => {
                setTimeout(() => {
                  fadeFunction();
                }, 500);
              }}
              animate={{ opacity: fading ? 0 : 1 }}
            >
              <div className={fading || flipped ? "is-hidden" : ""}>
                {" "}
                CARD IMAGE{" "}
              </div>
              <div
                className={
                  fading || !flipped ? "is-hidden" : `${styles.message}`
                }
              >
                MESSAGE
              </div>
            </motion.div>
          </motion.div>
        </div>
        <p className={styles.clickNote}>
          Click the card for a holiday message from Quinn and Hayes.
        </p>
      </div>
    </>
  );
};

export default Card;
