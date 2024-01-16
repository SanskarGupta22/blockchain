import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Label, TextInput } from 'flowbite-react';

const Home = () => {
  return (
    <div style={{backgroundColor: '#c5fcfc'}}>
      
      {/* Navbar */}
      
      <Navbar fluid rounded style={{backgroundColor: '#c5fcfc'}} >
        <Navbar.Brand href="">
          <img src="Screenshot 2023-12-21 200907.png" className="mr-20 h-20 sm:h-30 w-50" alt="Supply Link Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        
        

        < div className="flex md:order-2 space-x-4">
          
          
         

          {/* Search bar */}
          <div className="flex max-w-md flex-col gap-4" style={{width:"200px"}} >
            <div>
              <div className="mb-2 block">
                
                <Label htmlFor="input-gray" color="gray" value="" />
              </div>
              <TextInput id="input-gray" placeholder="Search" required color="gray" style={{ width: '100%' }} />
            </div>
          </div>
          
          <Button>Get In Touch</Button>

          {/* Navbar toggle button */}
          <Navbar.Toggle />
        </div>
        

        
          {/* Navbar links */}
        <Navbar.Collapse style={{ marginLeft: '120px' }}>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/MyPage">About</Navbar.Link>
          <Navbar.Link href="#">Track Your Order</Navbar.Link>
          <Navbar.Link href="#">Documents</Navbar.Link>
          <Navbar.Link href="/Question">Help/FAQ</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      

      {/* Card */}
      <div align="center">
        <Card className="max-w-sm" imgSrc="Screenshot 2023-12-21 202351.png" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Decentralized Supply Tracking Web Application
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A decentralized supply chain tracking application can help with transparency, accountability, and efficiency.
          </p>
        </Card>
      </div>
      {/*card1*/}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="mt-8 mx-4 ">
          <Card href="/Pharma" className="" style={{width:"425px"}} imgSrc="MBA-Pharma-and-Healthcare-Management-Program-1.jpg" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-3" align="center">
            Pharmaceutical Products</h5>
          
          
        </Card>
        </div>
      
        {/*card2*/}
        <div className="mt-8 mx-4 ">
          <Card href="/Product2" className="" style={{width:"425px"}} imgSrc="imgonline-com-ua-resize-5T2aPJk6zoi6.jpg" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Agricultural Products</h5>
          
        </Card>
        </div>
        {/*card3*/}
        <div  className="mt-8 mx-4 ">
          <Card href="/Product3" className="" style={{width:"425px"}} imgSrc="Screenshot 2023-12-21 202351.png" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Product 3</h5>
          
        </Card>
        </div>
       </div>
       {/*card4*/}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="mt-8 mx-4 ">
          <Card href="/Product4" className="" style={{width:"425px"}} imgSrc="MBA-Pharma-and-Healthcare-Management-Program-1.jpg" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-3" align="center">
             Product 4</h5>
          
          
        </Card>
        </div>
      
        {/*card5*/}
        <div className="mt-8 mx-4 ">
          <Card href="/Product5" className="" style={{width:"425px"}} imgSrc="Screenshot 2023-12-21 202351.png" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Product 5</h5>
          
        </Card>
        </div>
        {/*card6*/}
        <div className="mt-8 mx-4 ">
          <Card href="/Product6" className="" style={{width:"425px"}} imgSrc="Screenshot 2023-12-21 202351.png" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-9" align="center">
            Product 6</h5>
          
        </Card>
        </div>
       </div>
       
        
       
    </div>
  );
};

export default Home;


