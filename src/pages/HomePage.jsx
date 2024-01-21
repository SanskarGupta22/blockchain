import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Label, TextInput } from 'flowbite-react';

const Home = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #191714, #2234AE)', minHeight: '100vh' }}>
      {/* Navbar */}
      
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

      {/* Big white text */}
      <div align ="center">
        <h1 style={{ fontSize: '65px', color: 'white', marginTop: '115px', fontWeight: 'bold', lineHeight: '1.2'  }}>Decentralized Supply Tracking <br /> Web Application</h1>
      
        {/* Smaller white text lines */}
        <p style={{ fontSize: '25px', color: 'white', marginTop: '25px'}}>SupplyLink is a cutting-edge company specializing in decentralized supply chain </p>
        <p style={{ fontSize: '25px', color: 'white' }}>tracking applications. Our innovative technology fosters transparency,  </p>
        <p style={{ fontSize: '25px', color: 'white' }}>ensuring a clear view of the supply chain process.</p>
      
      </div>

      

     
      {/*card1*/}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: '80px'}}>
        <div className="mt-8 mx-4 ">
          <Card href="/Pharma" className="" style={{width:"600px", height: "200px"}} imgSrc="MBA-Pharma-and-Healthcare-Management-Program-1.jpg" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-3" align="center">
            Pharmaceutical Products</h5>
          
          
        </Card>
        </div>
      
        {/*card2*/}
        <div className="mt-8 mx-4 ">
          <Card href="/Product2" className="" style={{width:"600px", height: "200px"}} imgSrc="imgonline-com-ua-resize-5T2aPJk6zoi6.jpg" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Agricultural Products</h5>
          
        </Card>
        </div>
        {/*card3*/}
        <div  className="mt-8 mx-4 ">
          <Card href="/Product3" className="" style={{width:"600px", height: "200px"}} imgSrc="Screenshot 2023-12-21 202351.png" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Consumer Technology</h5>
          
        </Card>
        </div>
       </div>
       {/*card4*/}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="mt-8 mx-4 ">
          <Card href="/Product4" className="" style={{width:"600px", height: "200px"}} imgSrc="MBA-Pharma-and-Healthcare-Management-Program-1.jpg" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-3" align="center">
             Automotive Industry</h5>
          
          
        </Card>
        </div>
      
        {/*card5*/}
        <div className="mt-8 mx-4 ">
          <Card href="/Product5" className="" style={{width:"600px", height: "200px"}} imgSrc="Screenshot 2023-12-21 202351.png" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Travel</h5>
          
        </Card>
        </div>
        {/*card6*/}
        <div className="mt-8 mx-4 ">
          <Card href="/Product6" className="" style={{width:"600px", height: "200px"}} imgSrc="Screenshot 2023-12-21 202351.png" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Stationery</h5>
          
        </Card>
        </div>
       </div>
       
        
       
    </div>
  );
};

export default Home;


