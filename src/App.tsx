import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      {visibility && <Alert onClose={() => setVisibility(false)}>Hello</Alert>}
      <Button
        color="success"
        onCLick={() => {
          setVisibility(true);
        }}
      >
        Btn Sucess
      </Button>

      <Button
        color="danger"
        onCLick={() => {
          setVisibility(true);
        }}
      >
        Btn Sucess
      </Button>
    </div>
  );
}

export default App;
