import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FaHourglassEnd } from 'react-icons/fa';
import { useCreate2faMutation } from './2faSlice';
import { Button } from '../../../components/shared';

export function Enable2fa() {
  const [create2fa] = useCreate2faMutation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labelValue, setLabelValue] = useState(() => {
    const label = localStorage.getItem('label');
    if (label) {
      return label;
    }
    return 'Enable';
  });

  const twoFactorAuthReqHandler = () => {
    if (!(localStorage.getItem('label') as string)) {
      setIsLoading(true);
      create2fa('')
        .unwrap()
        .then(() => {
          setIsLoading(false);

          navigate('/dashboard/seller/settings/2fa/success-route');
        })
        .catch((err) => {
          setIsLoading(false);

          setError(err.message);
        });
    }
  };

  return (
    <div className="w-auto">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <Button label={labelValue} onClick={twoFactorAuthReqHandler} colorScheme="btn-primary" />
      )}
    </div>
  );
}
