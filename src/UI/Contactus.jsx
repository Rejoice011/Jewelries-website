import React, { useState }  from 'react';
import '../Style/Contact.css'
import ContactForm from './ContactForm';
import Popup from './Popup';


const Contactus = () => {
  
    const [formStatus, setFormStatus] = React.useState('Submit')
    const [isOpen, setIsOpen] = useState(false)
    
   const togglePopup  = () => {
    setIsOpen(!isOpen)
   }

    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitted')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (
      <div className="containerform">
        <h2 className="mb-3">Pleace contact us right here</h2>
        <form onSubmit={onSubmit}>
        <div className="row">
      <div className="col-25">
        <label for="fname"  >First Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
    </div>
   
        <div className="row">
      <div className="col-25">
            <label className="form-label" htmlFor="name">
               Last Name
            </label>
            </div>
            <div className="col-75">
            <input className="form-control" type="text" id="name" placeholder="Your last name.." required />
        </div>
       </div>
          <div className="row">
         <div className="col-25">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            </div>
            <div className="col-75">
            <input className="form-control" type="email" id="email" placeholder='email' required />
          </div>
         </div>
         <div className="row">
         <div className="col-25">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            </div>
            <div className="col-75">
            <textarea className="form-control" placeholder="Write something.." style={{height:"200px"}} id="message" required />
          </div>
       </div>
          <button className="btn btn-danger"
           type="submit"
        value="Submit" onClick={togglePopup} >
             {formStatus}
          </button>
    
           {isOpen && <Popup
      content={<>
       <h1><b> Thank you for submiting your email</b></h1>
        <p>We will send feed back right away!! </p>
        
      </>}
      handleClose={togglePopup}
    />}
        </form>
        <ContactForm/>
      </div>
    )
  }



export default Contactus