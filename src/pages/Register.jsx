import RegisterImg from "../assets/register.jpg";
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../api/axios";



export const Register = () => {
    const {register , handleSubmit , formState:{errors}} = useForm()
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    async function onSubmit(data){
        try {
             
            const response=await api.post("register",data)
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
              src={RegisterImg}
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
                 <h2>Sign Up</h2>
            <p className="mt-4 ">
              You already have an account?{" "}
              <a
                href="/login"
                className="text-decoration-none fw-bold text-success"
              >
                Sign in{" "}
              </a>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row my-3">
              <div className="col-6 mb-3 gap-3">
                 <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  id="exampleInputEmail1"
                    {...register("firstName" , {required:"First name is required",
                        minLength :{
                        value:3 ,
                        message:"min 3 character"}
                    })}
                  placeholder="First name"
                
                />
                {
                      errors["firstName"] && <p className="text-danger">{errors["firstName"]?.message}</p> 
                 }
                 </div>
                 <div className=" col-6 mb-3 gap-3">
                    <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  id="exampleInputEmail1"
                    {...register("lastName" , {required:"Last name is required",
                        minLength :{
                        value:3 ,
                        message:"min 3 character"
                     }
                    })}
                  placeholder="Last name"
                
                />
                {
                      errors["lastName"] && <p className="text-danger">{errors["lastName"]?.message}</p> 
                 }
                 </div>
                </div>
                 <div className="mb-4">
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  id="username"
                    {...register("username" ,  {required : "username is required" , 
                     pattern :{
                        value : /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
                        message : "Invalid userename"
                     },
                   
                     })}
                  placeholder="username"
                  
                />
                {
                      errors.username && <p className="text-danger">{errors.username?.message}</p> 
                 }
                </div>
                <div className="mb-4">
                <input
                  type="email"
                  className="form-control border-0 border-bottom"
                  id="exampleInputEmail1"
                    {...register("email" ,  {required : "email is required" , 
                     pattern :{
                        value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message : "Invalid Email"
                     },
                   
                     })}
                  placeholder="email address"
                  aria-describedby="emailHelp"
                />
                {
                      errors.email && <p className="text-danger">{errors.email?.message}</p> 
                 }
                </div>
              <div className="my-4">
                <input
                  type="password"
                  {...register("password" , {required:"password is required",
                    pattern : {
                       value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                        message : "Minimum six characters, at least one letter and one number"
                    }
                  })}
                  className="form-control border-0 border-bottom"
                  placeholder="password"
                  id="exampleInputPassword1"
                />
                {
                      errors.password && <p className="text-danger">{errors.password?.message}</p> 
                 }
              </div>
              
              
              <div className="my-5 ">

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
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
