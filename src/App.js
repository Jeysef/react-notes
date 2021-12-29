// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import Cards from "./components/cards";

import HeaderApp from "./HeaderApp";
import AboutMeApp from "./AboutMeApp";
// import Notes from "./components/notes";
// custom components
import NewCardForm from "./components/newCardForm";
import ReactFullpage from "@fullpage/react-fullpage";

const MainApp = () => {
  // State Holder

  const [content, setContent] = useState([]);
  // {"content": [{"id": 0, "notes": [{"content": "and this is note", "id": 0, "mark": false}], "title": "HI this is card"}]}

  // get data from server and set content
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const contentFomServer = await fetchContent();
  //     setContent(contentFomServer);
  //     console.log(content);
  //   };
  //   getTasks();
  // }, []);

  // const fetchContent = async () => {
  //   const response = await fetch(
  //     "https://json.extendsclass.com/bin/138ae146c385"
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   const bedata = data["content"];
  //   console.log(data);
  //   return bedata;
  // };

  /*

  * FUNCTIONS

  */

  const AddNewCardHandler = (titleName) => {
    if (content.length !== 0) {
      var arrOfIds = content.map((c) => c.id);
      var id =
        arrOfIds.reduce(function (a, b) {
          return Math.max(a, b);
        }, 0) + 1;
    } else {
      id = 0;
    }
    // this will update content
    setContent([
      ...content,
      {
        title: titleName,
        notes: [],
        id: id,
      },
    ]);
  };
  const AddNewNoteHandler = (contentValue, cardId) => {
    let becontent = content;
    console.log("length", becontent[cardId]["notes"].length);
    if (becontent[cardId]["notes"].length !== 0) {
      var arrOfIds = becontent[cardId]["notes"].map((c) => c.id);
      var id =
        arrOfIds.reduce(function (a, b) {
          return Math.max(a, b);
        }, 0) + 1;
    } else {
      id = 0;
    }
    // var arrOfIds = becontent[cardId]["notes"].map((c) => c.id);
    // var id =
    //   arrOfIds.reduce(function (a, b) {
    //     return Math.max(a, b);
    //   }, 0) + 1;

    becontent[cardId]["notes"].push({
      content: contentValue,
      id: id,
      mark: false,
    });
    // this will update content
    setContent([...becontent]);
  };
  const deleteNote = (cardId, NoteId) => {
    for (var i = 0; i < content[cardId]["notes"].length; i++) {
      if (content[cardId]["notes"][i].id === NoteId) {
        content[cardId]["notes"].splice(i, 1);
        i--;
      }
    }
    setContent(content);
  };
  const deleteCard = async (cardId) => {
    await fetch(`https://json.extendsclass.com/bin/138ae146c385`, {
      method: "DELETE",
    });

    let becontent = content.filter((carde) => carde.id !== cardId);
    setContent(becontent);
  };
  // dragNDropApp = () => {
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     if (localStorage.getItem("List")) {
  //       console.log(localStorage.getItem("List"));
  //       setData(JSON.parse(localStorage.getItem("List")));
  //     } else {
  //       setData(this.state.content);
  //     }
  //   }, [setData]);
  // };

  // const pluginWrapper = () => {
  //   require("./statics/fullpage.scrollHorizontally.min");
  // };
  // return (
  //   <ReactFullpage
  //     // pluginWrapper={pluginWrapper}
  //     //fullpage options
  //     licenseKey={"YOUR_KEY_HERE"}
  //     scrollingSpeed={1000} /* Options here */
  //     render={({ state, fullpageApi }) => {

  // mark Note
  const markNote = (cardId, noteId) => {
    let becontent = content;
    becontent[cardId]["notes"][noteId]["mark"] =
      !becontent[cardId]["notes"][noteId]["mark"];
    setContent([...becontent]);
  };

  return (
    <>
      <header id="header" class="header">
       <HeaderApp /> 
      </header>
      <main id="main" class="main">
        <div id="content" className="wrapper">
          <div id="overlay" className=""></div>
          <Cards
            content={content}
            newNoteHandler={AddNewNoteHandler}
            deleteNote={deleteNote}
            deleteCard={deleteCard}
            noteMarkerer={markNote}
          />
          <NewCardForm NewCardHandler={AddNewCardHandler} />
        </div>
      </main>
      <div id="secondPage" class="main">
        <AboutMeApp />
      </div>
    </>
  );
  //   }}
  // />
  // );
};

export default MainApp;
