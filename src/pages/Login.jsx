import loginImg from "../assets/login.jpg";
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../api/axios";


export const Login = () => {
    const {register , handleSubmit , formState:{errors}} = useForm()
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    async function onSubmit(data){
        try {

            const response=await api.post("login",data)
            console.log(response.data)

             localStorage.setItem('token' , response.data.token)
             navigate("/")

        }catch (error) {
           console.log(error.response.data.message)
           setError(error.response.data.message)
        }
    
    }







  return (
    <>
      <section className="container-fluid vh-100 d-flex  justify-content-center align-items-center">
        
        <div className=" row g-0 my-5 d-flex justify-content-between" style={{ maxWidth: "1200px" }}>
            {/* left-side */}
          <div className="col-5 ">
            <img
              src={loginImg}
              alt=""
              className="img-fluid rounded-4 w-100 h-100 object-fit-cover "
              
            />
          </div>
            {/* right side */}
          <div className="col-5 d-flex  justify-content-center align-items-center mx-auto ">
         <div className="w-100 d-flex flex-column justify-content-between" style={{ maxWidth: "400px"}}>
            {
            error &&  <div className="alert alert-danger"> <p className="mb-0">{error}</p> </div>
        }
                 <h2>Sign In</h2>
            <p className="mt-4 ">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-decoration-none fw-bold text-success"
              >
                Sign up{" "}
              </a>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 gap-3">
                <input
                  type="email"
                  className="form-control border-0 border-bottom"
                  id="exampleInputEmail1"
                    {...register("email" , {required:"email is required"})}
                  placeholder="email address"
                  aria-describedby="emailHelp"
                />
                {
                      errors.email && <p className="text-danger">{errors.email?.message}</p> 
                 }
              </div>
              <div className="mb-3 gap-3">
                <input
                  type="password"
                  {...register("password" , {required:"password is required"})}
                  className="form-control border-0 border-bottom"
                  placeholder="password"
                  id="exampleInputPassword1"
                />
                {
                      errors.password && <p className="text-danger">{errors.password?.message}</p> 
                 }
              </div>
              <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100 mb-4">
                <div><input
                  type="checkbox"
                  
                  className="form-check-input"
                  id="exampleCheck1"
                />
                
                
                 <label className="form-check-label text-muted " for="exampleCheck1">
                    Remember me
                </label></div>
                
                <span> <a className="text-decoration-non text-muted fw-semibold" href="forget password?">Forgot Password?</a> </span>
                
               
              </div>
              <div className="mb-3 ">

              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
                </div>
            </form>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
