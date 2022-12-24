import React, { useState } from "react";
// import Sound from "react-sound";
import { motion } from "framer-motion";
import styles from "./styles.module.sass";
import pickles from "./images/pickles.jpg";
import toki from "./images/toki.jpg";
import griffins from "./images/griffins.JPG";

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

  const handleClick = (location) => {
    if (location === "card" && flipped === false) {
      setFlipped(!flipped);
    }
  };

  return (
    <>
      <div role="button" tabIndex={0} className={styles.flashcards}>
        <div>
          <motion.div
            className={styles.card}
            onClick={() => handleClick("card")}
            variants={cardVariants}
            animate={flipped ? "flipped" : "notFlipped"}
          >
            <motion.div
              className={
                flipped ? `${styles.backContent}` : `${styles.frontContent}`
              }
              onMouseDown={() => {
                if (!flipped) {
                  fadeFunction();
                }
              }}
              onMouseUp={() => {
                if (!flipped) {
                  setTimeout(() => {
                    fadeFunction();
                  }, 500);
                }
              }}
              animate={{ opacity: fading ? 0 : 1 }}
            >
              <div
                className={fading || flipped ? "is-hidden" : styles.imageArea}
              >
                <div className={styles.topImage}>
                  <img src={griffins} alt="Quinn and Hayes"></img>
                </div>
                <div className={styles.bottomImages}>
                  <img src={pickles} alt="Pickles the cat."></img>
                  <img src={toki} alt="Toki the cat."></img>
                </div>
              </div>
              <div
                className={fading || !flipped ? "is-hidden" : styles.message}
              >
                <h1>Happy Holidays from the Griffins</h1>
                <p>
                  In 2022 the Griffins continued to enjoy being back in Columbus
                  closer to friends and family.
                </p>
                <p>
                  Hayes has been teaching lessons at Denison University and
                  Pikeville, as well as privately, and recently went independent
                  with his online music school,{" "}
                  <a
                    href="https://hayesgriffin.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Guitar Club
                  </a>
                  .
                </p>
                <p>
                  Quinn completed the Google UX Designer course and continues to
                  enjoy her{" "}
                  <a
                    href="https://quinneringriffin.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    new career path
                  </a>{" "}
                  as a web designer and developer.
                </p>
                <p>
                  Highlights of 2022 include spending time with Pickles and
                  Toki; lots of swimming, biking and running; and, this past
                  summer, visiting friends in Sweden.
                </p>
                <br />
                <button
                  className="button is-success"
                  onClick={() => {
                    setFlipped(false);
                  }}
                >
                  BACK
                </button>
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
