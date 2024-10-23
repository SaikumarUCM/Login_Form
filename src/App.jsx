import { useState } from "react";
import "./styles.css"

function App(){

    const [Values, SetValues] = useState({
        firstname:'',
        lastname: '',
        email : '',
        gender : '',
        contact : '',
        subject: '',
        resume: '',
        url: '',
        about: ''
    })

    const handleChange=(e)=>{
        SetValues({...Values,[e.target.name]: [e.target.value]})

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!Values.firstname){

            return false;
        }
        if(!Values.lastname){
            return false;
        }
        console.log(Values)
    }

    const handleReset=()=>{
        SetValues({firstname:'',lastname:'',email:'',
            contact:'',about:'', url:'', resume:'', subject:'',gender:undefined,
        })
    }





    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstname">FirstName</label>
                    <input 
                        type="text" 
                        id="firstname"
                        name="firstname"
                        value={Values.firstname}
                        placeholder="Enter First name"
                        onChange={(e)=>handleChange(e)}
                        required
                    />
                    <label htmlFor="lastname">LastName</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={Values.lastname}
                        placeholder="Enter last Name"
                        onChange={(e)=>handleChange(e)}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" value={Values.email} 
                    onChange={(e)=>handleChange(e)} required/>

                    <label htmlFor="contact">Contact*</label>
                    <input type="text"  id="contact" name="contact" placeholder="Enter Phone #"  value={Values.contact}
                    onChange={(e)=>handleChange(e)}required/>

                    <label htmlFor="gender">Gender* </label>
                    <input type="radio" name="gender" value="male"  onChange={(e)=>handleChange(e)}/> Male
                    <input type="radio" name="gender" value="Female"  onChange={(e)=>handleChange(e)}/> Female
                    <input type="radio" name="gender" value="Other"  onChange={(e)=>handleChange(e)}/> other


                    <label htmlFor="subject">Subject</label>
                    <select name="subject" id="subject" onChange={(e)=>handleChange(e)}>
                        <option value="math">Math</option>
                        <option value="Physics">Physics</option>
                        <option value="English">English</option>
                    </select>

                    <label htmlFor="resume">Resume</label>
                    <input type="file" placeholder="Select Resume" name="resume" value={Values.resume}
                    onChange={(e)=>handleChange(e)}/>

                    <label htmlFor="url">URL</label>
                    <input type="text" name="url" placeholder="Enter Image URl" value={Values.url} 
                    onChange={(e)=>handleChange(e)}/>

                    <label htmlFor="about">About</label>
                    <textarea name="about" id="about" cols="30" rows="10" placeholder="Enter Description" value={Values.about}
                    onChange={(e)=>handleChange(e)}></textarea>


                    <button type="button" onClick={()=>handleReset()}>Reset</button>
                    <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>


                </form>


            </fieldset>
        </div>

    )
}

export default App;