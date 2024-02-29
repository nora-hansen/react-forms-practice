import { useState } from "react";
import "./App.css";

export default function App() {

  //TODO: Add your state fields here
  const [complaintData, setComplaintData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    complaint: "",
    contactType: "",
    consent: false
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(complaintData)
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
    const inputName = event.target.name

    if (inputName === "name") {
      setComplaintData({...complaintData, fullName: inputValue})
    }
    if (inputName === "address") {
      setComplaintData({...complaintData, address: inputValue})
    }
    if (inputName === "phone") {
      setComplaintData({...complaintData, phoneNumber: inputValue})
    }
    if (inputName === "email") {
      setComplaintData({...complaintData, email: inputValue})
    }
    if (inputName === "complaint") {
      setComplaintData({...complaintData, complaint: inputValue})
    }
    if (inputName === "contact") {
      setComplaintData({...complaintData, contactType: inputValue})
    }
    if (inputName === "consent") {
      setComplaintData({...complaintData, consent: event.target.checked})
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={handleChange}/>
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleChange}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handleChange}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleChange}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handleChange}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handleChange}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handleChange}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={handleChange}/>
          </label>
        </div>
        <input type="submit" value="Submit!" on/>
      </form>
    </>
  );
}
