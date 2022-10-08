import { useState } from "react";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";
import styles from "../styles/PledgeForm.module.css";

export default function PledgeForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (step) => {
    setCurrentStep(step);
  };
  

 
  return (
    <main className={styles.container}>
      {currentStep === 0 && <First handleNextStep={handleNextStep} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
      {currentStep === 1 && <Second handleNextStep={handleNextStep} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <Third handleNextStep={handleNextStep} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
    </main>
  );
}
