import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faCheckCircle, faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectNoteById } from "./notesApiSlice"

const Note = (noteId) => {

    const note = useSelector(state => selectNoteById(state, noteId))

    const navigate = useNavigate()

    if (note){
        const created = new Date(note.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

        const updated = new Date(note.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

        const handleEdit = () => navigate(`/dash/notes/${noteId}`)

        return (
            <tr className="table__row">
                <td className="table__cell note__status">
                    {note.completed
                        ? <FontAwesomeIcon icon={faCheckCircle} className="note__status--complete" />
                        : <FontAwesomeIcon icon={faCirclePlay} className="note__status--open" />
                    }
                </td>
                <td className="table__cell note__created">{created}</td>
                <td className="table__cell note__updated">{updated}</td>
                <td className="table__cell note__title">{note.title}</td>
                <td className="table__cell note__username"> {note.username} </td>
                <td className="table__cell">
                    <button 
                    className="icon-button table__button" 
                    onClick={handleEdit}> 
                    <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}

export default Note