import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../components';

function NeedPRI() {
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    navigate('/password-reset');
  };

  const onCloseHandler = () => {
    navigate('/login');
  };

  return (
    <Modal
      isOpen
      disabled={false}
      title="Need Password Reset"
      body={(
        <div>
          <p>Your password was expired, please update your password.</p>
        </div>
      )}
      onClose={onCloseHandler}
      onSubmit={onSubmitHandler}
      actionColorScheme="btn-primary"
      actionLabel="Update Your Password"
    />
  );
}

export default NeedPRI;
