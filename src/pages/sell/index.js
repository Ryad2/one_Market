import React, { useState, useEffect } from "react";
import Header from "../../components/ui/header";
import styles from "./Sell.module.css";

export default function Sell() {
  const [boutons, setBoutons] = useState([false, false, false, false]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    blockchains: [],
  });

  useEffect(() => {
    // Vérifiez si le formulaire est complet ici
    const isComplete =
      boutons.filter((selected) => selected).length >= 1 &&
      formData.title.trim() !== "" &&
      formData.description.trim() !== "" &&
      formData.price.trim() !== "";
    console.log(formData);
    console.log(isComplete);

    setIsFormComplete(isComplete);
  }, [boutons, formData]);

  const handleClick = (index) => {
    const nouveauxBoutons = boutons.map((selected, i) =>
      i === index ? !selected : selected
    );
    setBoutons(nouveauxBoutons);

    const selectedBlockchains = nouveauxBoutons.reduce(
      (acc, selected, index) => {
        if (selected) {
          acc.push(`bouton ${index + 1}`);
        }
        return acc;
      },
      []
    );

    setFormData({
      ...formData,
      blockchains: selectedBlockchains,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete) {
      console.log("Form Data:", formData);
      // Vous pouvez effectuer ici toute autre action avec les données du formulaire.
      // Par exemple, soumettre les données à un backend ou effectuer une action avec les données.
    }
  };

  return (
    <div className={styles.containerSell}>
      <Header />
      <form className={styles.mainSell} onSubmit={handleSubmit}>
        <label htmlFor="" className={styles.labelSell}>
          <div>Title</div>
          <input
            type="text"
            name="title"
            className={styles.inputSell}
            placeholder="What’s the name of the product you’re selling..."
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="" className={styles.labelSell}>
          <div>Description</div>
          <textarea
            name="description"
            className={styles.inputSell}
            placeholder="Tell more about your product..."
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <label htmlFor="" className={styles.labelSell}>
          <div>What&apos;s the price?</div>
          <input
            type="number"
            name="price"
            className={styles.inputSell}
            placeholder="420,69 $USDC looks like a good number, any other idea?"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="" className={styles.labelSell}>
          <div>On which blockchains would you like to receive USDCs?</div>
          <div className={styles.selectBlockchainSell}>
            {boutons.map((selected, index) => (
              <button
                key={index}
                type="button"
                style={{ backgroundColor: selected ? "#DCE1FB" : "" }}
                onClick={() => handleClick(index)}
              >
                Bouton {index + 1}
              </button>
            ))}
          </div>
        </label>
        <input
          type="submit"
          value={isFormComplete ? "Submit" : "Fill the form"}
          className={`${styles.submitSell} ${
            isFormComplete ? "" : styles.disabledSubmit
          }`}
          disabled={!isFormComplete}
        ></input>
      </form>
    </div>
  );
}
