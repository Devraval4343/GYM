import React, { useState } from 'react';
import{ClipLoader} from 'react-spinners';
import { toast } from 'react-toastify';
import axios from "axios";



const Concate = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[message,setmessage] = useState("")
  const[loading,setLoading] = useState(false)

  const sendMail = async(e)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const{data} = await axios.post("http://localhost:4000/send/email",{
        name,
        email,
        message,
      },
      {
        withCredentials: true, 
        headers:{"content-type":"application/json"},
      });
      setName("");
      setEmail("");
      setmessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
  console.error("Send Mail Error:", error);
  const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
  toast.error(errorMessage);
  setLoading(false);
}

    // catch (error) {
    //   toast.error (error.response.data.message || "Sometimes went Wrong");
    // }
  }

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT</h1>
        <div>
          <label>Name</label>
          <input type="text" 
          value={name} 
          onChange={(e)=> setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" 
           value={email} 
          onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <label>message</label>
          <input type="text" 
           value={message} 
          onChange={(e)=> setmessage(e.target.value)} />
        </div>
        <button 
        type='submit' 
        disabled={loading} 
        style={{
                display: "flex", 
                justifyContent:"center",
                alignItems:"center",
                gap:"15px",
              }}
        >
          {loading && <ClipLoader size={20} color="white"/>}
          Send message 
        </button>
      </form>
    </section>
  )
}

export default Concate
