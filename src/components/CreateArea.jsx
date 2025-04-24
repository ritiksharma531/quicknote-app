import React from "react";
import Note from "./Note";
// import notes from "../Notes";

function CreateArea() {
  const [notes, changeNotes] = React.useState([]);
  const [currLength, changeLength] = React.useState(notes.length);

  const [currTitle, changeTitle] = React.useState("");
  const [currContent, changeContent] = React.useState("");

  // const [currItem, changeItem] = React.useState({});

  function titleChanged(event) {
    changeTitle(event.target.value);
  }
  function contentChanged(event) {
    changeContent(event.target.value);
  }
  function addClicked(event) {
    changeTitle("");
    changeContent("");
    const newObject = {
      id: currLength,
      title: currTitle,
      content: currContent,
    };
    // changeItem(newObject);
    changeLength(currLength + 1);
    changeNotes((prevItems) => {
      return prevItems.length === 0 ? [newObject] : [...prevItems, newObject];
    });

    event.preventDefault();
  }

  function deleted(id) {
    changeLength(currLength - 1);
    changeNotes((prevItems) => {
      return prevItems.filter((item) => {
        return id !== item.id;
      });
    });
  }
  return (
    <div>
      <form onSubmit={addClicked}>
        <input
          onChange={titleChanged}
          name="title"
          placeholder="Title"
          value={currTitle}
        />
        <textarea
          onChange={contentChanged}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={currContent}
        />
        <button>Add</button>
      </form>
      {notes.map((item) => {
        return (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            deleteNote={deleted}
          />
        );
      })}
    </div>
  );
}

export default CreateArea;
