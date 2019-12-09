import React from 'react';

const CreateNote = props => (
    <button type="button" onClick={props.enterCreateWorkspace} className="button block tertiary header-text">Create Note</button>
);

export default CreateNote;