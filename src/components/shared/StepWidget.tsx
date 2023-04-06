import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { v4 as uuidv4 } from 'uuid';

type stepperProps = { steps: string[] };

function Stepper({ steps }: stepperProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplet] = useState(false);

  function next() {
    if (currentStep === steps.length) setComplet(true);
    else {
      setCurrentStep((prev: number) => prev + 1);
    }
  }

  function previous() {
    if (currentStep > 1) {
      setComplet(false);
      setCurrentStep((prev: number) => prev - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row  justify-between w-[300px] lg:w-[60%]">
        {steps?.map((step, i) => (
          <div
            key={uuidv4()}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || complete) && 'complete'
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p>{step}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button type="button" className="btn" onClick={previous}>
          Previous
        </button>
        {!complete && (
          <button type="button" className="btn " onClick={next}>
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </button>
        )}
      </div>
    </>
  );
}

export default Stepper;
