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
   < div className="flex flex-col items-center min-h-screen justify-center">
      <div align="center">
        <Navbar.Brand href="">
          <img src="Screenshot 2023-12-21 200907.png" className="mb-10 h-20 sm:h-30 w-50" alt="Supply Link Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
      </div>

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
  

  );
};

export default SignUp;
