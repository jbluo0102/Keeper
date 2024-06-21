import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header";
import InputArea from "./component/InputArea";
import Note from "./component/Note";
import Footer from "./component/Footer";

const initialState = [];
function App() {
  const [item, setItem] = useState(initialState);

  function addItem(title, content) {
    setItem((prev) => {
      return [...prev, { title, content }];
    });
  }

  function deleteItem(id) {
    setItem((prev) => {
      return prev.filter((_, index) => index !== id);
    });
  }

  return (
    <div className="App">
      <Header />
      <InputArea onAddItem={addItem} />
      {item.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDeleteItem={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
