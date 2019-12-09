import React, {Component} from 'react';
import './App.css';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import Note from './components/Note';
import EditBox from './components/EditBox';
import TextBox from './components/TextBox';
import DeleteNote from './components/DeleteNote';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      activeNoteId: -1,
      editting: -1,
      isDateVisible: false
    };

    this.enterCreateWorkspace= this.enterCreateWorkspace.bind(this);
    this.enterEditWorkspace= this.enterEditWorkspace.bind(this);
    this.addNote= this.addNote.bind(this);
    this.selectNote= this.selectNote.bind(this);
    this.editNote= this.editNote.bind(this);
    this.deleteNote= this.deleteNote.bind(this);
    this.getCurrentDateTime= this.getCurrentDateTime.bind(this);
  }
  
  //When the create button is clicked, switch to create workspace
  enterCreateWorkspace() {
    return this.setState({activeNoteId: -2});
  }

  //When the edit button is clicked, preserve activeNoteId in state, and enter the edit workspace by changing to its reserved state
  enterEditWorkspace() {
    let temp = this.state.activeNoteId;
    return this.setState({editting: temp, activeNoteId: -2 });
  }


  //When Submit button is clicked, add the note to state
  addNote(note) {
    return this.setState({notes: [...this.state.notes, {title: note.title, body: note.value, lastUpdated: this.getCurrentDateTime()}], activeNoteId: this.state.notes.length});
  }

   //When Update button is clicked, update the note in state
   editNote(note) {
    let tempArray = this.state.notes;
    tempArray[this.state.editting]= {title: note.title, body: note.value, lastUpdated: this.getCurrentDateTime()};
    return this.setState({notes: tempArray, activeNoteId: this.state.editting});
  }

  //When a note is a selected, changes the note shown on screen by modifying activeNoteId in state
  selectNote(id) {
    return this.setState({activeNoteId : id});
  }
  
  //Delete active  note and switch to reserved activeNoteId for deleted screen
  deleteNote() {
      let newNotes = this.state.notes;
      newNotes.splice(this.state.activeNoteId,1);
      return this.setState({notes: newNotes, activeNoteId : -3});
  }

  //gets a formatted date and time
  getCurrentDateTime() {
    let fullDate = new Date();
    return fullDate.toLocaleString();
  }
  
  render() {
    return (
      <div>
        <section className="layout">
        <aside className="sidebar">
          <CreateNote enterCreateWorkspace={this.enterCreateWorkspace}/>
          <NoteList notes={this.state.notes} selectNote={this.selectNote}/>
        </aside>
      <main>
        <header>
          {this.state.activeNoteId !== -1 && this.state.activeNoteId !== -2 && this.state.activeNoteId !== -3 ?
            <p className="body-text no-margin muted">Last Updated: {this.getCurrentDateTime()}</p> : null
          }
          {this.state.activeNoteId >= 0 ?
            <div className="button-group">
              <EditNote enterEditWorkspace={this.enterEditWorkspace}/>
              <DeleteNote deleteNote={this.deleteNote}/> 
            </div> : null}  
        </header>
        {
          this.state.activeNoteId === -1 ?
            <article><h1 className="header-text">Welcome!</h1></article>:
          this.state.activeNoteId === -2 && this.state.editting !== -1 ?
            <EditBox editNote={this.editNote} editId={this.state.editting} title={this.state.notes[this.state.editting].title} body={this.state.notes[this.state.editting].body}/> :
          this.state.activeNoteId === -2 ?
            <TextBox addNote={this.addNote}/> :
          this.state.activeNoteId === -3 ?
            <h3 className="header-text-delete">Note deleted!</h3>
          :
            <Note title={this.state.notes[this.state.activeNoteId].title} body={this.state.notes[this.state.activeNoteId].body} />
        }
        </main>
        </section>
      </div>
    );
  }
}
