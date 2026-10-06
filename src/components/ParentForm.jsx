import React,{useState} from "react";
import RegistrationSummary from "./RegistrationSummary.jsx";

const ParentForm = () => {
  
  const [form,setForm] = useState({userName:"",email:"",phone:"",city:"",gender:"",terms:false});

  function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    
     const userName = formData.get('username');
     const email = formData.get('email');
     const phone = formData.get('phone');
     const gender = formData.get('gender');
     const city = formData.get('city')
     const terms  = formData.get('terms');

     setForm({
        userName:userName,
        email:email,
        phone:phone,
        city:city,
        gender:gender,
        terms:terms
     })
  }

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="card col-6">
            <form className="mt-3" onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  userName
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  name="username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2">
                  Email
                </span>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Recipient’s username"
                  aria-label="Recipient’s username"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Phone
                </span>
                <input
                  type="tel"
                  class="form-control"
                  name="phone"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  City
                </span>
                <input
                  type="text"
                  class="form-control"
                  name="city"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <select class="form-select" aria-label="Default select example" name="gender">
                <option selected>select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">others</option>
              </select>
              <br />
              <div class="for m-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="terms"
                  id="checkDefault"
                />
                <label class="form-check-label" for="checkDefault">
                  Terms And Conditions
                </label>
              </div>

              <input type="submit" className="btn btn-primary my-2"/>
            </form>
          </div>
          <div class="card col-6"><RegistrationSummary formData={form} /> </div>
        </div>
      </div>
    </>
  );
};

export default ParentForm;
