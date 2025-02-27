import { useState, useEffect } from "react";
import Main from "./components/Main.jsx";
import SideBar from "./components/SideBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData(params) {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
        console.log("DATA:", apiData);
      } catch (e) {
        console.long("ERROR:", e);
      }

      return data;
    }
    fetchAPIData();
  }, []);
  console.log("TITLE:", data?.title);
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      <Footer
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        data={data}
      />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal} data={data} />
      )}
    </>
  );
}

export default App;
