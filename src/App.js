import { Box, Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";


function App() {
  return (
    <Box className="App">

        <Header/>
        <Content/>
        <Footer/>
    </Box>
  );
}

export default App;
