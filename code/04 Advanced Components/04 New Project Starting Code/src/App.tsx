import Input  from "./components/input";
// import { Button } from "./components/Button";
// import {Container} from './components/Container'
// import { useRef } from "react";
import Form from "./components/Form";
import { Button } from "./components/Button";
function App() {
  //const input  = useRef(null);
  function handleSave(data: unknown) {
    const extractedData = data as {name: string, age: string};
    console.log(extractedData)
  }
  return (
  <main>
    {/* <Input id="name" label="Your name"/>
    <Input id="age" label="Your age"/> */}
    {/* <p>
      <Button>A Button</Button>
    </p>
    <p>
      <Button href="http://google.com">A Link</Button>
    </p> */}
    {/* <Container as={Button}>Click Me</Container> */}
    {/* <Input label="Test" id="test" ref={input}/> */}
    <Form onSave={handleSave}>
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Age" id="age"/>
      <p>
        <Button>Save</Button>
      </p>
    </Form>
  </main>
  );
}

export default App;
