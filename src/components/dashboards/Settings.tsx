import React from 'react';
import { Enable2fa } from '../../features/authentication/twoFA/Enable2fa';

function Settings() {
  return (
    <div className="flex w-full justify-between py-10">
      <h2>Two Factor Authentication</h2>
      <Enable2fa />
    </div>
  );
}

export default Settings;
