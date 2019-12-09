import React from 'react';

const NoteList = props => (

    <ul>
        {
            props.notes.map((note, id) => 
            <li key={id} onClick={() => props.selectNote(id)} > 
                <h3 className="header-text no-margin"> {note.title} </h3>
                <p className="body-text no-margin muted"> Last updated: {note.lastUpdated} </p>
            </li>)
        }
    </ul> 
);

export default NoteList;