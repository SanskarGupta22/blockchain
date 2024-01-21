import React from 'react';
import { Card, TextInput } from 'flowbite-react';
import { Button, Navbar, Label } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Med = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #191714, #2234AE)', minHeight: '100vh' }}>
    
   
    <Navbar fluid rounded style={{ backgroundColor: 'transparent', height: '80px', padding: '10px' }}>
        <Navbar.Brand href="">
          <img src="Screenshot 2023-12-21 200907.png" className="mr-20 h-22 sm:h-30 w-36" alt="Supply Link Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        
        

        < div className="flex md:order-2 space-x-4">
          
          
         

          {/* Search bar */}
          <div className="flex max-w-md flex-col gap-4" style={{width:"200px", marginTop: "14px" }} >
            <div>
              <div className="mb-2 block">
                
                <Label htmlFor="input-gray" color="gray" value="" />
              </div>
              <TextInput id="input-gray" placeholder="Search" required color="gray" style={{ width: '100%' }} />
            </div>
          </div>

          <p style={{ fontSize: '18px', color: 'white', marginTop: '28px', paddingLeft: '16px'}}>Sign In </p>

          <Button style={{ fontSize: '50px', padding: '20px', backgroundColor: '#496CF6', color: 'white', fontWeight: 'bold' }}>Sign Up</Button>
          
          


          {/* Navbar toggle button */}
          <Navbar.Toggle />
        </div>
        

        
          {/* Navbar links */}
          <Navbar.Collapse style={{ marginLeft: '140px' }}>
          <Navbar.Link href="#" active style={{ fontSize: '23px', color: 'white' }}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/MyPage" style={{ fontSize: '23px', color: 'white' }}>
            About
          </Navbar.Link>
          <Navbar.Link href="#" style={{ fontSize: '23px', color: 'white' }}>
            Track Your Order
          </Navbar.Link>
          <Navbar.Link href="#" style={{ fontSize: '23px', color: 'white' }}>
            Documents
          </Navbar.Link>
          <Navbar.Link href="/Question" style={{ fontSize: '23px', color: 'white' }}>
            Help/FAQ
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex justify-center flex-col sm:flex-row ">
        
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
              src="imgonline-com-ua-resize-PehYc9cdnu9iV2m.jpg"
              className="w-full h-max object-cover"
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Thermometer
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400" >
                <div className="flex justify-between items-center">
                  <div>Product ID: 145663</div>
                  <Link to="/Product6">
                    <button className="text-blue-500 hover:underline focus:outline-none ">
                      Track Order
                    </button>
                  </Link>
                </div>
                <span style={{ fontSize: '18px' }}>
                Thermometers are instruments designed to measure temperaturen , including healthcare, and environmental monitoring.</span>
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

