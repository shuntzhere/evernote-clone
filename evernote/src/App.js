import React from 'react';
import './App.css';
import SideBarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';

import firebase from 'firebase';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return (
      <div className='app-container'>
        <SideBarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        ></SideBarComponent>
        {
          this.state.selectedNote ?
          <EditorComponent selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          ></EditorComponent> :
          null
        }


      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        console.log(notes);
        this.setState({ notes: notes });
        //setNotes(notes);
      });
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectNote: note });

}

export default App;
