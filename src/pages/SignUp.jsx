import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Button, Label, TextInput } from 'flowbite-react';
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
        // An error occurred. Set error message to be displayed to the user
        setError(error.message);
      }
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
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
          <Label htmlFor="password" value="Your password" />
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SignUp;
