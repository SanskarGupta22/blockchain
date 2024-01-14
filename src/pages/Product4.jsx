import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Med = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-10">
        <img
          src="Screenshot 2023-12-21 200907.png"
          className="h-20 sm:h-30 w-50"
          alt="Supply Link Logo"
        />
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Pharmaceutical Equipments
        </h1>
        <div className="w-50"></div>
      </div>

      <div className="flex justify-center flex-col sm:flex-row">
        {/* Product 1 */}
        <Card className="max-w-sm">
            <img
              alt="Meaningful alt text for an image that is not purely decorative"
              src="81e4jEKYoyL._SL1500_.jpg"
              className="w-full h-50 object-cover"
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stethoscope
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <div className="flex justify-between items-center">
                  <div>Product ID: 13223</div>
                  <Link to="/Product6">
                    <button className="text-blue-500 hover:underline focus:outline-none">
                      Track Order
                    </button>
                  </Link>
                </div>
                <span style={{ fontSize: '18px' }}>
                It is a fundamental tool in the field of medicine and plays a
                crucial role in the initial assessment and diagnosis of patients.</span>
              </p>
            </div>
          </Card>

        {/* Product 2 */}
        <Card className="max-w-sm mx-10">
            <img
              alt="Meaningful alt text for an image that is not purely decorative"
              src="81e4jEKYoyL._SL1500_.jpg"
              className="w-full h-50 object-cover"
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stethoscope
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400" >
                <div className="flex justify-between items-center">
                  <div>Product ID: 13223</div>
                  <Link to="/Product6">
                    <button className="text-blue-500 hover:underline focus:outline-none ">
                      Track Order
                    </button>
                  </Link>
                </div>
                <span style={{ fontSize: '18px' }}>
                It is a fundamental tool in the field of medicine and plays a
                crucial role in the initial assessment and diagnosis of patients.</span>
              </p>
            </div>
          </Card>

        {/* Product 3 */}
         {/* Product 3 */}
         <Card className="max-w-sm">
            <img
              alt="Meaningful alt text for an image that is not purely decorative"
              src="81e4jEKYoyL._SL1500_.jpg"
              className="w-full h-50 object-cover"
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stethoscope
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <div className="flex justify-between items-center">
                  <div>Product ID: 13223</div>
                  <Link to="/Product6">
                    <button className="text-blue-500 hover:underline focus:outline-none">
                      Track Order
                    </button>
                  </Link>
                </div>
                <span style={{ fontSize: '18px' }}>
                It is a fundamental tool in the field of medicine and plays a
                crucial role in the initial assessment and diagnosis of patients.</span>
              </p>
            </div>
          </Card>
      </div>
    </div>
  );
};

export default Med;

