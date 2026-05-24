import style from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const navigate = useNavigate();

    const handelAdminLogin = async (e)=>{
      e.preventDefault();

      const response = await fetch("https://ecommerce-backend-e4yh.onrender.com/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email: Email,
          password: Password
        })
      });

      const data = await response.json();

      if(data.success){
        localStorage.setItem("adminLogin", "true");
        
        alert("Login Success");

        navigate("/admin");
      }else{
        alert(data.msg);
      }
    }

    return(
      <>
      <h1>Login</h1>
      <div className={style.main}>
        
        <form onSubmit={handelAdminLogin}>

            <input
              type="email"
              placeholder="Enter your email"
              required
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter your password"
              required
              value={Password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="submit">
              Login
            </button>

        </form>
      </div>

      </>
    )
}

export default Login;