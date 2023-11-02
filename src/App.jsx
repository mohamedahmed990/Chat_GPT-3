import "./App.css";
import { Navbar, Brand, Cta } from "./Components"
import { Blog, Header, Footer, Features, WhatGPT3 } from "./Containers";
function App() {
  return <>
    <div className="App">
      <div className="gradient__bg overflow-hidden">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Cta />
      <Blog />
      <Footer />
    </div>
  </>;
}

export default App;
