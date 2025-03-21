import { useState } from 'react';


function Header({ 
  fullName: initialFullName ="Will Moore", 
  phone: initialPhone ="+63912-3456-789", 
  email: initialEmail="wlofranco@fake.com", 
  address: initialAddress="Olympus Blvd, Gale Crater City, Mars", 
  linkedin: initialLinkedIn=" www.linkedin.com/in/wilmar-lofranco-ba82a7304",
  summary: initialSummary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo, velit iusto, dicta iste ipsam fuga, temporibus consectetur maxime voluptate saepe. Suscipit ducimus maxime eius quos quisquam sequi reprehenderit libero! Quas quo, velit iusto, dicta iste ipsam fuga, temporibus consectetur maxime voluptate saepe" }) {

    const [modal, setModal] = useState(false)

    const [name, setName] = useState(initialFullName);
    const [phone, setPhone] = useState(initialPhone);
    const [email, setEmail] = useState(initialEmail);
    const [address, setAddress] = useState(initialAddress);
    const [linkedin, setLinkedIn] = useState(initialLinkedIn);
    const [summary, setSummary] = useState(initialSummary);

    const handleModal = () => setModal(true);
    const handleClose = () => setModal(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setModal(false)
    }

  return (
      <div className='header'>
        <h1>{name}</h1>
        <p>{phone} | {email} | {address} | <a href={linkedin}> LinkedIn </a> </p>
        <p className='summary'>{summary}</p>
        <button onClick={handleModal}>Edit</button>
      

      {modal && (
        <div className="modal">
        <form onSubmit={handleSubmit}>
          <label>
            Full Name: <br></br>
            <input 
              type="text" 
              name="fullName" 
              onChange={(e) => setName(e.target.value)}
              placeholder="John Birador"
            />
          </label>
          <label>
            Phone No: <br></br>
            <input 
              type="tel" 
              name="phoneNum" 
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </label>
          <label>
            E-mail: <br></br>
            <input 
              type="email" 
              name="email" 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail"
            />
          </label>
          <label>
            Address: <br></br>
            <input 
              type="text" 
              name="address" 
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
          </label>
          <label>
            LinkedIn Link: <br></br>
            <input 
              type="text" 
              name="linkedin" 
              onChange={(e) => setLinkedIn(e.target.value)}
              placeholder="Enter your LinkedIn Link"
            />
          </label>
          <label>
            Summary: <br></br>
            <textarea
              rows="4"
              cols="80" 
              name="summary" 
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Brief description of yourself"
            />
          </label>
          <div>
          <button type="submit">Save</button>
          <button type="button" onClick={handleClose}>Cancel</button>
          </div>
        </form>
        </div>
      )}
      </div>
  )
}

export { Header };
