import React from 'react';

const DeleteNote = props => (
    <button type="button" onClick={props.deleteNote} className="button secondary header-text">Delete Note</button>
);

export default DeleteNote;