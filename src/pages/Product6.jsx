import React from 'react';

const DeliveryStatus = ({ deliveryStatus }) => {
  return (
    <div>
      {deliveryStatus === 'delivered' ? (
        <p>Your package has been delivered. Thank you!</p>
      ) : (
        <p>Your package is still pending delivery. Please be patient.</p>
      )}
    </div>
  );
};

export default DeliveryStatus;

