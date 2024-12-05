import React from 'react';
import './index.css'; // Include your CSS
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports'; // Generated during `amplify push`

Amplify.configure(awsExports);

function App() {
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  return (
    <div>
      <header>
        <h1>Practical Test: AWS Amplify React App</h1>
      </header>
      <div className="container">
        <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
        <p>This React application integrates with AWS Amplify for backend services.</p>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default function Root() {
  return (
    <Authenticator>
      <App />
    </Authenticator>
  );
}
