import { useState } from "react";
import Header from "./components/Header/Header";
import MainElement from "./components/MainElement/MainElement";
import Form from "./components/Form";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* <Form /> */}
      <Header />
      <div className="container">
        <MainElement darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
}
