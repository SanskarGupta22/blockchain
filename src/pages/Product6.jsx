import React from 'react';
import { Card } from 'flowbite-react';

const DeliveryStatus = ({ deliveryStatus }) => {
  return (
    <div align="center">
      <div className="flex items-center justify-between mb-10">
        <img
          src="Screenshot 2023-12-21 200907.png"
          className="h-20 sm:h-30 w-50"
          alt="Supply Link Logo"
        />
        </div>
     <Card className="max-w-sm" imgSrc="customer-using-mobile-app-tracking-order-delivery_74855-5229.avif" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Order Status
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Your package is still pending delivery. Please be patient.
          </p>
        </Card>
    </div>
  );
};

export default DeliveryStatus;

