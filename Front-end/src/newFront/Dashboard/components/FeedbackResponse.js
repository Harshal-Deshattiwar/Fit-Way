import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { API_URL } from '../../common/URL';


const FeedbackResponse = (props) => {

    const history = useHistory();

    var feedID = props.feedID


    const [feedback,setFeedback] = useState('')

    const onChangeFeedback = (e) => {
        const feedback = e.target.value;
        setFeedback(feedback);
      };

      const submitFeedback = () => {
        axios.post(API_URL + 'feedbackResponse',{
            id:feedID,
            response:feedback
        })
        .then((response) => {
            alert('submit response')
            history.push("/dashboard/getfeedback")
        })
      };

    return(

        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Respond
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <label htmlFor='feedback'>Feedback</label>
                    <textarea  
                    type='text' 
                    className='form-control form-control-sm'
                    name='feedback'
                    value={feedback}
                    onChange={onChangeFeedback}></textarea>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary"
                    onClick={submitFeedback}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        

    )
}
export default FeedbackResponse