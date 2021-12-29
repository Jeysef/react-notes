import React, { useState } from "react";
import Notes from "./notes";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Cards = ({
  content,
  newNoteHandler,
  deleteNote,
  deleteCard,
  noteMarkerer,
}) => {
  Cards.PropTypes = {
    content: PropTypes.object,
    newNoteHandler: PropTypes.func,
    deleteNote: PropTypes.func,
    deleteCard: PropTypes.func,
    noteMarkerer: PropTypes.func,
  };

  const [noteTitle, setnoteTitle] = useState("");
  

  const setTextValue = (event) => {
    // event.nativeEvent.target.previousElementSibling.value = "";
    setnoteTitle("");
  };
  const handleAddNewNote = (e, cardId) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please add a text");
      return;
    }
    newNoteHandler(noteTitle, cardId);
    setnoteTitle("");
  };

  const handleDeleteCard = (cardId) => {
    deleteCard(cardId);
  };

  return content.map((card) => (
    <section
      className={"Card "}
      key={card.id}
      draggable
      contentEditable="false"
    >
      <header className="flex-between">
        <h3 className="CardTitle" contentEditable="true" spellCheck="false">
          {card.title}
        </h3>
        <div className="LinksWrapper">
          <button
            className="deleteCard"
            onClick={() => {
              handleDeleteCard(card.id);
            }}
          >
            <FaTimes />
          </button>
        </div>
      </header>
      <ul>
        <Notes
          contentNotes={card["notes"]}
          deleteNote={deleteNote}
          cardId={card.id}
          noteMarkerer={noteMarkerer}
        />
      </ul>
      <footer>
        <form onSubmit={(e) => handleAddNewNote(e, card.id)}>
          <textarea
            value={noteTitle}
            onChange={(e) => {
              setnoteTitle(e.target.value);
            }}
            spellCheck="false"
            className="textarea addCardTextarea"
            rows="2"
          ></textarea>
          <input type="submit" value="Add card" className="addNoteBtn" />
        </form>
      </footer>
    </section>
  ));
};

export default Cards;
