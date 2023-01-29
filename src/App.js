import { ChakraProvider } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import "./App.css";
import { Chatpage } from "./Pages/Chatpage";
import { Homepage } from "./Pages/Homepage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Route path="/" exact component={Homepage} />
        <Route path="/chats" component={Chatpage} />
      </div>
    </ChakraProvider>
  );
}

export default App;
