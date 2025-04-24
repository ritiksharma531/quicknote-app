import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../Notes";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {/* {notes.map((item) => {
        return <Note key={item.id} title={item.title} content={item.content} />;
      })} */}
      <Footer />
    </div>
  );
}

export default App;
