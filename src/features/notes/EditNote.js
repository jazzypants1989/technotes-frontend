import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectNoteById } from "./notesApiSlice"
import { selectAllUsers } from "../users/usersApiSlice"
import EditNoteForm from './EditNoteForm'

const EditNote = () => {
    const { id } = useParams()

    const note = useSelector(state => selectNoteById(state, id))
    const users = useSelector(selectAllUsers)

    const content = note && users.length ? <EditNoteForm note={note} users={users} /> : <p> Loading... Hopefully this message goes away soon. </p>

    return content
}

export default EditNote