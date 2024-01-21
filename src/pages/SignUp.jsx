import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Button, Label, TextInput, Navbar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'; 

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (password === passwordTwo) {
      try {
        const authUser = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Success. The user is created in Firebase");
        navigate('/Profile');
      } catch (error) {
      
        setError(error.message);
      }
    } else {
      setError("Passwords do not match");
    }
  };

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
      
   < div className="flex flex-col items-center min-h-screen justify-center">

      <div className="flex flex-col items-center max-w-md p-4 bg-gray-100 rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Create an Account</h1>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="passwordTwo" value="Confirm password" />
          </div>
          <TextInput
            id="passwordTwo"
            type="password"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <p className="text-sm text-gray-500">Must be at least 8 characters, contain at least 1 uppercase letter, and 1 lowercase letter, and 1 number.</p>
        
        <Button type="create account">Create Account</Button>
      </form>
    </div>
  </div>
  </div>
  

  );
};

export default SignUp;
