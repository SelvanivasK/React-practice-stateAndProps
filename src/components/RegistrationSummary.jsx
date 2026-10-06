import React from 'react'

const RegistrationSummary = ({formData}) => {

 const {userName,email,phone,city,gender,terms} = formData;
  return (
    <div>
        <h1>Regis</h1>
        <h3 className="">Name :{userName}</h3>
        <h3 className="">Email : {email}</h3>
        <h3 className="">Phone : {phone}</h3>
        <h3 className="">City : {city}</h3>
        <h3 className="">Gender : {gender}</h3>
        <h3>Terms : {terms?"Accepted":"Rejected"}</h3>
    </div>
  )
}

export default RegistrationSummary

