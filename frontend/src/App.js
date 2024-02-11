import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [word, setWord] = useState("");
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    console.log(word);
  };

  console.log(word);
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search
        word={word}
        setWord={setWord}
        validated={validated}
        setValidated={setValidated}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;
