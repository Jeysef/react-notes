// import logo from './logo.svg';
import React, { useState, useEffect, useRef } from "react";
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

  const [content, setContent] = useState({
    content: [
      {
        id: 0,
        notes: [
          { content: "and this is note", id: 0, mark: false },
          { content: "and this is note2", id: 1, mark: false },
        ],
        title: "card1",
      },
      {
        id: 1,
        notes: [
          { content: "and this is note", id: 0, mark: false },
          { content: "and this is note2", id: 1, mark: false },
        ],
        title: "card2",
      },
      {
        id: 2,
        notes: [
          { content: "and this is note", id: 0, mark: false },
          { content: "and this is note2", id: 1, mark: false },
        ],
        title: "card3",
      },
    ],
  });
  // {"content": [{"id": 0, "notes": [{"content": "and this is note", "id": 0, "mark": false}], "title": "HI this is card"}]}

  // [
  // "user1":{
  //   "id":0,
  //   "password":{"hash": hash("password"), "salt": this.id},

  //   "content":
  //   {"title": "card1", "id": 0, "notes": [
  //   {"title": "note1", "id": 0, "mark": false}
  //   ]}
  //   ], "colors":{"background": "linear-gradient(var(--bgorange), var(--bggray)", "colorScheme": "light"}
  //   },
  //   "user2":{
  //   "id":1,
  //   "password":{"hash": hash("password"), "salt": this.id},

  //   "content":
  //   {"title": "card1", "id": 0, "notes": [
  //   {"title": "note1", "id": 0, "mark": false}
  //   ]}
  //   ], "colors":{"background": "linear-gradient(var(--bgorange), var(--bggray)", "colorScheme": "dark"}
  //   }
  //   ]

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
    if (content["content"].length !== 0) {
      var arrOfIds = content["content"].map((c) => c.id);
      var id =
        arrOfIds.reduce(function (a, b) {
          return Math.max(a, b);
        }, 0) + 1;
    } else {
      id = 0;
    }
    // this will update content
    const becontent = JSON.parse(JSON.stringify(content));    
    console.log(becontent["content"], "fdf");
    becontent["content"].push({
      id: id,
      notes: [],
      title: titleName,
    });
    setContent(becontent);
    return;
  };
  const AddNewNoteHandler = (contentValue, cardId) => {
    let becontent = content;
    // console.log("length", becontent[cardId]["notes"].length);
    if (becontent["content"][cardId]["notes"].length !== 0) {
      var arrOfIds = becontent["content"][cardId]["notes"].map((c) => c.id);
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

    becontent["content"][cardId]["notes"].push({
      content: contentValue,
      id: id,
      mark: false,
    });
    // this will update content
    setContent(becontent);
  };
  const deleteNote = (cardId, NoteId) => {
    const becontent = JSON.parse(JSON.stringify(content));

    // becontent["content"][cardId]["notes"].filter(
    //   (note) => note.id !== NoteId
    // );
    for (var i = 0; i < becontent["content"][cardId]["notes"].length; i++) {
      if (becontent["content"][cardId]["notes"][i]["id"] === NoteId) {
        becontent["content"][cardId]["notes"].splice(i, 1);
        i--;
      }
    }
    
    setContent(becontent);
  };
  const deleteCard = async (cardId) => {
    // await fetch(`https://json.extendsclass.com/bin/138ae146c385`, {
    //   method: "DELETE",
    // });
    const becontent = JSON.parse(JSON.stringify(content));
    for (var i = 0; i < becontent["content"].length; i++) {
      if (becontent["content"][i]["id"] === cardId) {
        becontent["content"].splice(i, 1);
        i--;
      }
    }
    // becontent["content"].filter((card) => card.id !== cardId);
    console.log(content, becontent);
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
    const becontent = JSON.parse(JSON.stringify(content));    
    becontent["content"][cardId]["notes"][noteId]["mark"] =
      !becontent["content"][cardId]["notes"][noteId]["mark"];
      console.log(content, becontent);

    setContent(becontent);

  };

  const card = useRef();

  return (
    <>
      <header id="header" class="header">
        <HeaderApp />
      </header>
      <main id="main" class="main">
        <div id="content" className="wrapper">
          <div
            id="overlay"
            className=""
            // onDragEnter={
            //   card.current &&
            //   card.current.dragging && !content.length
            //     ? (e) => card.current.handleDragEnter(e, { itemI: 0 })
            //     : null
            // }
          ></div>
          <Cards
            ref={card}
            content={content}
            newNoteHandler={AddNewNoteHandler}
            deleteNote={deleteNote}
            deleteCard={deleteCard}
            noteMarkerer={markNote}
            setContent={setContent}
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
