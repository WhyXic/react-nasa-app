import { useState } from "react";
import Main from "./components/Main.jsx";
import SideBar from "./components/SideBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Main />
      {showModal && <SideBar />}
      <Footer />
    </>
  );
}

export default App;
