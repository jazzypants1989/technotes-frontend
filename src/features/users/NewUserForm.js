import { useState, useEffect} from 'react'
import { useAddNewUserMutation } from './usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { ROLES } from '../../config/roles'

const USER_REGEX = /^[A-z0-9]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{8,20}$/

const NewUserForm = () => {

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(["Employee"])

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        if (isSuccess) {
            setUsername('')
            setPassword('')
            setRoles([])
            navigate('/dash/users')
        }
    }, [isSuccess, navigate])

    const onUsernameChanged = (e) => setUsername(e.target.value)
    const onPasswordChanged = (e) => setPassword(e.target.value)

    const onRolesChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions,
            option => option.value
        )
        setRoles(values)
    }

    const canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading

    const onSaveUserClicked = async(e) => {
        e.preventDefault()
        if (canSave) {
                await addNewUser({username, password, roles})
        }
    }

const options = Object.values(ROLES).map(role => {
    return (
        <option 
        key={role} 
        value={role}
        > {role} </option>
    )
})

const errClass = isError ? "errMsg" : "offscreen"
const validUserClass = !validUsername ? 'form__input--incomplete' : ''
const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''

const content = (
    <>
    <p className={errClass}>{error?.data?.message}</p>
    <form className="form" onSubmit={onSaveUserClicked}>
        <div className="form__title-row">
            <h2>New User</h2>
            <div className="form__action-buttons">
                <button
                className="icon-button"
                title="Save"
                disabled={!canSave}
                >
                    <FontAwesomeIcon icon={faSave} />
                </button>
            </div>
        </div>
        <label className="form__label" htmlFor="username">
            Username: <span className="nowrap">[3-20 letters and numbers]</span></label>
            <input
            className={`form__input ${validUserClass}`}
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onUsernameChanged}
            autoComplete="off"
            />
            <label className="form__label" htmlFor="password">
                <span>[Password: 8-20 Letters, Numbers and these special characters: !@#$%]</span></label>
            <input
            className={`form__input ${validPwdClass}`}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onPasswordChanged}
            />

            <label className="form__label" htmlFor="roles">
                Assigned Roles: </label>
            <select
            className={`form__select ${validRolesClass}`}
            id="roles"
            name="roles"
            value={roles}
            onChange={onRolesChanged}
            multiple={true}
            size={3}
            >
                {options}
            </select>

    </form>
    
    </>
)

return content

}

export default NewUserForm