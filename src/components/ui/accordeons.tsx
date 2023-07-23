/* eslint-disable */
import React, { useState } from "react";
import styles from "./Accordeons.module.css";

type AccordeonProps = {
  className?: string;
  title?: string;
  questions?: any[];
};

const Accordeons = React.forwardRef<unknown, AccordeonProps>(
  ({ className, title, questions, ...props }, ref) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleQuestionClick = (index: any) => {
      if (index === openIndex) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };

    return (
      <div className={styles.mainAccordeons}>
        {questions?.map((e, i) => (
          <div key={i} className={styles.divQuestionAccordeon}>
            <div
              className={styles.questionAccordeon}
              onClick={() => handleQuestionClick(i)}
            >
              {e.question}
            </div>
            <div
              className={`${styles.answerAccordeon} ${
                i === openIndex ? styles.open : ""
              }`}
            >
              {e.answer}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Accordeons.displayName = "Accordeons";

export default Accordeons;
