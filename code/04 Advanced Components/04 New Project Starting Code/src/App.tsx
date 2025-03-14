import { Input } from "./components/input";
import { Button } from "./components/Button";
function App() {
  return (
  <main>
    {/* <Input id="name" label="Your name"/>
    <Input id="age" label="Your age"/> */}
    <p>
      <Button el="button">A Button</Button>
    </p>
    <p>
      <Button el="anchor" href="http://google.com">A Link</Button>
    </p>
  </main>
  );
}

export default App;
