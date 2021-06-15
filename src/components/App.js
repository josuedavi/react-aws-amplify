import '../assets/app';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <h1>Hello, World! (AWS)</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);