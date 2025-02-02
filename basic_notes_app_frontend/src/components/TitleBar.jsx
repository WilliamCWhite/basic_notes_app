import { useState, useEffect } from 'react'

import '../styles/TitleBar.css'

function TitleBar({ selectedNoteIndex, updateNoteInDB, notesArray, sortNotesArray }) {
    const selectedNote = notesArray[selectedNoteIndex];
    const [noteTitle, setNoteTitle] = useState(selectedNote.title);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            if (selectedNote.title !== noteTitle) {
                const timeModified = new Date(Date.now()).toISOString();
                updateNoteInDB(selectedNote.note_id, noteTitle, selectedNote.body, timeModified);

                const tempNotesArray = [...notesArray];
                tempNotesArray[selectedNoteIndex].title = noteTitle;
                tempNotesArray[selectedNoteIndex].time_modified = timeModified;
                sortNotesArray(tempNotesArray);
            }
        }, 3000);

        return (() => clearTimeout(timeoutID));
    }, [noteTitle])

    function handleInput(event) {
        setNoteTitle(event.target.innerHTML)
    }

    return (
        <div id='title-bar'>
            <button id='display-sidebar-button'></button>
            <h1
                contentEditable
                onInput={handleInput}
                suppressContentEditableWarning
            >{selectedNote.title}</h1>
        </div>
    )
}

export default TitleBar