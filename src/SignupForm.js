import React, {useEffect, useState} from "react";
import axios from "axios"
import{useNavigate, Link} from "react-router-dom"
export function SignupForm(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/SignupForm",{
                email, password
            })
            .then(res=>{
                if(res.data="Exists!"){
                    alert("User already exists. Log in now!")
                }
                else if(res.data="Not Exists!"){
                    history("/Portal")
                }
            })
            .catch(e=>{
                alert("Wrong Details Entered!")
                console.log(e);
            }
            )
        }
        catch(e){
            console.log(e)
        }

    return(
        <div className="auth-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
        <article>
              <h1>WAKEEL</h1>
              <p>Your partner for a successful legal battle</p>
              <br></br>
              <br></br>
              <br></br>
              </article>
            <label htmlFor="role">Select your appropriate user role</label>
            <select className="drop-down" name="role">
                <option value="lawyer">I am a lawyer who is looking for clients</option>
                <option value="client">I am a client who is looking for lawyers</option>
                <option value="admin">I am a system administrator</option>
            </select>
            <label htmlFor="email">Enter an active email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@xyz.com"/>
            <label htmlFor="password">Create a strong password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******"/>
            <br></br>
            <br></br>
            <input class="button-33" type = "submit" onClick={submit}>Sign Up</input>
        </form>
        <br></br>
        <Link to="/Homepage" className = "link-btn">Already have an account? Login Now!</Link>
        </div>
    )
    }
}