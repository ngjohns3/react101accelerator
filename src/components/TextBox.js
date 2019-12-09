import React from 'react';

class TextBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        title: ''
    };
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleBodyChange= this.handleBodyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleBodyChange(event) {
      this.setState({value: event.target.value});
    }
    
    handleTitleChange(event) {
      this.setState({title: event.target.value})
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.addNote(this.state);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h3 className="header-text">Title</h3>
            <input type="text" className="titlebox" value ={this.state.title} onChange={this.handleTitleChange}></input>
            <h3 className="header-text">Note</h3>
            <textarea rows="8" className="textarea" value={this.state.value} onChange={this.handleBodyChange} />
            <input type="submit" className="submit header-text" value="Submit"/>
        </form>
      );
    }
  }
  export default TextBox;