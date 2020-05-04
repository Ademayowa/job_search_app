import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertState';

const Alerts = () => {
  const { alerts, setAlert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
    )
  );
};

export default Alerts;
