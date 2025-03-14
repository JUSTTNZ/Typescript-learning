import { Input } from "./components/input";
import { Button } from "./components/Button";
function App() {
  return (
  <main>
    {/* <Input id="name" label="Your name"/>
    <Input id="age" label="Your age"/> */}
    <p>
      <Button>A Button</Button>
    </p>
    <p>
      <Button href="http://google.com">A Link</Button>
    </p>
  </main>
  );
}

export default App;
