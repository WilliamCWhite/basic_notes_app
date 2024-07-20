
import '../styles/NoteListItem.css'

function NoteListItem({ note, switchNote, noteIndex }) {
    return (
        <div className="note-list-item" onClick={() => { switchNote(noteIndex) }}>
            <h3>{note.title}</h3>
            <p>{note.time_created}</p>
            <p>{note.time_modified}</p>
        </div>
    )
}

export default NoteListItem