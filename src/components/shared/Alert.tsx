import React from 'react';

function Alert({ message }: { message: string }) {
  return <div className="bg-warning px-3 py-2 m-2">{message}</div>;
}

export default Alert;
