import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InputField, Modal } from '../../../components';
import { Button } from '../../../components/shared';
import { TtwoFAFieldValue } from '../../../utils/schemas/2faCode.Schema';
import { useVerify2faCodeMutation } from './2faSlice';

function TokenInputModalRender() {
  const { register, handleSubmit } = useForm<TtwoFAFieldValue>();
  const [verify2faCode] = useVerify2faCodeMutation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onCancelHandler = () => {
    navigate('/dashboard/seller/settings');
  };

  const CodeVerificationHandler = (data: TtwoFAFieldValue) => {
    setDisabled(true);
    setIsLoading(true);
    verify2faCode(data)
      .unwrap()
      .then(() => {
        setIsLoading(false);
        localStorage.setItem('label', 'Unable');
        navigate('/dashboard/seller/settings');
      })
      .catch((err) => {
        setIsLoading(false);

        setError(err.message);
      });
  };

  return (
    <Modal
      isOpen
      disabled={disabled}
      onClose={onCancelHandler}
      actionColorScheme="btn-secondary"
      onSubmit={onCancelHandler}
      title="Two Factory Authentication Code Verification"
      body={
        <>
          {error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <form onSubmit={handleSubmit(CodeVerificationHandler)}>
              <InputField
                id="code"
                label="Enter two factor authentication code sent to your email"
                type="tel"
                register={register}
                required
              />
              <Button isSubmit label="Verify Code" colorScheme="btn-primary" />
            </form>
          )}
        </>
      }
      actionLabel="Cancel"
    />
  );
}

export default TokenInputModalRender;
