import { useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersApiSlice"
import NewNoteForm from './NewNoteForm'

const NewNote = () => {
    const users = useSelector(selectAllUsers)

    const content = users.length ? <NewNoteForm users={users} /> : <p> Loading... Hopefully this message goes away soon. </p>

    return content
}
export default NewNote