import React, {useEffect, useState} from "react";
import axios from "axios"
import{useNavigate, Link} from "react-router-dom"

export function Homepage(){

    const history=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/Homepage",{
                email, password
            })
            .then(res=>{
                if(res.data="Exists!"){
                    history("/Portal")
                }
                else if(res.data="Not Exists!"){
                    alert("User does not exist. Sign up first!")
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
    }
    return(
        <div className="container">
        <div className="column">
        <div>
            <div>
<p>Welcome to Wakeel – your one-stop destination for all your legal needs! <br></br><br></br> We're a unique platform that connects clients with top-notch lawyers across various practice areas. Our mission is to make legal services more accessible and convenient for everyone. With Wakeel, finding the right lawyer has never been easier. Our user-friendly platform allows you to search for lawyers by practice area, location, and rating. You can also browse lawyer profiles, read reviews from other clients, and connect with attorneys directly through our website. <br></br><br></br>At Wakeel, we understand that dealing with legal matters can be overwhelming, which is why we've designed our platform to simplify the process. Whether you need legal advice for your business or personal matters, we've got you covered. <br></br><br></br>Join the thousands of satisfied clients who have found the right lawyer for their legal needs on Wakeel. <br></br><br></br>Register today and let us help you find the perfect legal partner!</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
</div>
     <div class="overlay"></div>
<div class="text">
	<div class="wrapper">
		<div id="W" class="letter">W</div>
		<div class="shadow">W</div>
	</div>
	<div class="wrapper">
		<div id="A" class="letter">A</div>
		<div class="shadow">A</div>
	</div>
	<div class="wrapper">
		<div id="K" class="letter">K</div>
		<div class="shadow">K</div>
	</div>
	<div class="wrapper">
		<div id="E" class="letter">E</div>
		<div class="shadow">E</div>
	</div>
	<div class="wrapper">
		<div id="E" class="letter">E</div>
		<div class="shadow">E</div>
	</div>
	<div class="wrapper">
		<div id="L" class="letter">L</div>
		<div class="shadow">L</div>
	</div>
   </div>
</div>
        </div>
        <div className="column">
        <div className="auth-form-container">
            <article>
              <h1>WAKEEL</h1>
              <p>Your partner for a successful legal battle</p>
              <br></br>
              <br></br>
              <br></br>
              </article>
        <form action = "POST" className="login-form" onSubmit={handleSubmit}>
            <label for="email">Enter a registered email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@xyz.com"/>
            <label for="password">Enter your password</label>
            <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********"/>
            <br></br>
            <br></br>
            <input class="button-33" type = "submit" onClick={submit}>Log In</input> 
        </form>
        <br></br>
        <Link to="/SignupForm" className = "link-btn">Don't have an account? Register now!</Link>
        </div>
        </div>
      </div>
    )
}