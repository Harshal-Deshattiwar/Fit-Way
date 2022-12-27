import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowProfile from './ShowProfile';
import MyPlan from './MyPlan';
import BuyPlan from './BuyPlan';
import UserDiet from './UserDiet';
import MyFeedback from './MyFeedback';

import Home from '../home/Home';

import ProfileIcon from './Icons/ProfileIcon.svg'
import PlanIcon from './Icons/PlanIcon.svg'
import BrowseIcon from './Icons/BrowseIcon.svg'
import DietIcon from './Icons/DietIcon.svg'
import FeedbackIcon from './Icons/FeedbackIcon.svg'
import Navbar from './navbar/Navbar';

const Profile = () => {
    const [isUser, setIsUser] = useState('')
    useEffect(() => {
        setIsUser(localStorage.getItem("name"))
    }, [])

    return (
        <Router>
            <Navbar />
            {isUser ?
                <div>
                    <div className="card text-left ProfileCard">
                        <div className="card-body profile_conatiner">
                            <div className='sidenavbarItem'>
                                <div className='NavBarContaineritem'>
                                    <Link className='btn dashboardsidelink' to='/showprofile'><img src={ProfileIcon} alt="profile" /> User Profile</Link>
                                </div>
                                <div className='NavBarContaineritem'>
                                    <Link className='btn dashboardsidelink' to='/myplan'> <img src={PlanIcon} alt="myPlan"/> My Plans</Link>
                                </div>
                                <div className='NavBarContaineritem'>
                                    <Link className='btn dashboardsidelink' to='/allplan'><img src={BrowseIcon} alt="allPlan" /> Browse Plans</Link>
                                </div>
                                <div className='NavBarContaineritem'>
                                    <Link className='btn dashboardsidelink' to='/userdietplan'><img src={DietIcon} alt="Diet" /> Diet Plans</Link>
                                </div>
                                <div className='NavBarContaineritem'>
                                    <Link className='btn dashboardsidelink' to='/myfeedback'><img src={FeedbackIcon} alt="Feedback" /> My Feedback</Link>
                                </div>
                            </div>
                            <div className='viwe_profile_container'>
                                <Switch>
                                    <Route path='/showprofile' component={ShowProfile}></Route>
                                    <Route path='/myplan' component={MyPlan}></Route>
                                    <Route path='/allplan' component={BuyPlan}></Route>
                                    <Route path='/userdietplan' component={UserDiet}></Route>
                                    <Route path='/myfeedback' component={MyFeedback}></Route>
                                </Switch>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            FOOTER
                        </div>
                    </div>
                </div>
                : <Home></Home>}
        </Router>
    )
}

export default Profile;