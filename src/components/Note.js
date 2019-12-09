import React from 'react';

const Note = props => (
    <article>
          <h1 className="header-text">{props.title}</h1>
          <p className="body-text">{props.body}</p>
    </article>
);

export default Note;