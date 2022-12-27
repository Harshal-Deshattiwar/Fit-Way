import axios from "axios"
import React, { useEffect, useState } from "react"
import './Style.css'
import { API_URL } from "../common/URL"

const Feed = () => {

   

    const [allfeedbacklist, setAllFeedbackList] = useState([])
    
    useEffect(() => {
        axios.get(API_URL+"getAllfeedbacks")
        .then((response) => {
            console.log(response.data.data)
            setAllFeedbackList(response.data.data)
        })
    }, [])
   
    const firstFiveFeedback = [];
    const firstFiveFeedbackName = [];
    
    allfeedbacklist.map((val,index) => {
        
            firstFiveFeedback.push(val.feedback)
            firstFiveFeedbackName.push(val.completeName)
        
    })


    const NewfirstFiveFeedback = [];
    const NewfirstFiveFeedbackName = [];
    
    allfeedbacklist.map((val,index) => {
        if(index <= 5){
            NewfirstFiveFeedback.push(firstFiveFeedback[allfeedbacklist.length - index])
            NewfirstFiveFeedbackName.push(firstFiveFeedbackName[allfeedbacklist.length - index])
        }
    })

    


    const introStyle = {
        height : '100%',
      }
   
  
    return(
        <div style={introStyle} className="card">
            <div class="footercard">
            
            <div className='card text-center footercardbody' style={introStyle}>
                <div style={introStyle} className='card footercardbody'>
                <div style= {introStyle} className="card-body footercardbody">
                    <h1>Members Feedback</h1>
                    {allfeedbacklist.map((val,index) => {
                        return<div className='row' key={val.id}>
                                <div className='col'>
                                    <b>{NewfirstFiveFeedbackName[index]}</b>
                                    <p>{NewfirstFiveFeedback[index]}</p>
                                </div>
                            </div>
                    })}
                </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}
export default Feed;
