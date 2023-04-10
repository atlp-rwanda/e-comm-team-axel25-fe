import React, { useMemo, useState } from 'react';
import { MultiStepForm } from './form';

const STEPS = {
  INFO: 0 as number,
  ADDRESS: 1 as number,
} as const;
export function SignUp() {
  const [step, setStep] = useState(STEPS.INFO);
  const [isLoading, setIsLoading] = useState(false);

  const previousStep = () => {
    setStep((value) => value - 1);
  };

  const nextStep = () => {
    setStep((value) => value + 1);
  };

  const onSubmit = async () => {
    if (step !== STEPS.ADDRESS) return nextStep();

    return setIsLoading(true);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.ADDRESS) return 'Create your account';
    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.INFO) return undefined;
    return 'Back';
  }, [step]);

  let bodyContent;

  const footerContent = (
    <figcaption className="my-5 text-sm text-center text-gray-500">
      By registering, you agree to Cypher&#39;s <a href="/">Terms of Service</a>{' '}
      and <a href="/">Privacy Policy</a>.
    </figcaption>
  );

  return (
    <div className="py-20">
      <MultiStepForm
        title="It's fast and free to get started"
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={previousStep}
        body={bodyContent}
        footer={footerContent}
        onCancel={() => {
          // Do something
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
}
