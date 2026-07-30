import { use, useState } from "react"
import { Form } from "react-router"
const Login = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [allValid, setAllValid] = useState(false)
    const formHandling = () => {
        if (firstname.trim().length < 4 && lastname.trim().length < 6) {
            setAllValid(true)
        }
    }
    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-slate-500">
            <Form method="POST" className="w-1/3 p-4 aspect-video flex flex-col justify-evenly rounded-lg bg-slate-400">
                <div className="flex gap-x-5">
                    <div className="text-center">
                        <input name="firstname" onChange={e => setFirstname(e.target.value)} value={firstname} className="input" type="text" placeholder="Firstname" />
                        {allValid && <span className="text-sm font-semibold">lastname must be more than 4 character</span>}
                    </div>
                    <div className="text-center">
                        <input name="lastname" onChange={e => setLastname(e.target.value)} value={lastname} className="input" type="text" placeholder="Lastname" />
                        {allValid && <span className="text-sm font-semibold">lastname must be more than 6 character</span>}
                    </div>
                </div>
                <input name="email" onChange={e => setEmail(e.target.value)} pattern="\w+@gmail\.com" title="enter an email" value={email} className="input w-1/2 self-center " type="email" placeholder="Email" />
                <button onClick={formHandling} className="p-2 w-full bg-slate-800 text-white rounded-lg font-semibold" type="submit">Login</button>
            </Form>
        </div>
    )
}

export default Login