import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllMeembers from "./components/MembersComponenets/AllMembers";
import AdminProfile from "./components/AdminProfile";

import GetFeedback from "./components/Feedback";
import Trainer from "../Dashboard/components/MembersComponenets/Trainer";
import Plans from "./components/MembersComponenets/Plans";
import DietPlan from "./components/MembersComponenets/Diet";
import GymEuipments from "./components/MembersComponenets/GymEquipment";

import memberIcon from "./Icons/memberIcon.svg"
import profileIcon from "./Icons/profileIcon.svg"
import trainerIcon from "./Icons/trainerIcon.svg"
import planIcon from "./Icons/plansIcon.svg"
import dietPlanIcon from "./Icons/dietPlanIcon.svg"
import equipmentsIcon from "./Icons/equipmentsIcon.svg"
import feedbackIcon from "./Icons/feedbackIcon.svg"
import Navbar from'./components/navbar/Navbar'
import './Dashboard.css'


function Dashboard() {
  const LinkStyle = {
    color: 'black',
  }
  return (
    <Router>
      <Navbar />
      <div className='innerContainer'>
        <div className="sidenavbar">
          <div className="sidenavbarItem">
            <div className='NavBarContaineritem'>
              <Link className='dashboardsidelink' style={LinkStyle} to='/dashboard/members'><img src={memberIcon} alt="members" /> Members</Link>
            </div>
            <div className='NavBarContaineritem'>
              <Link className='dashboardsidelink' style={LinkStyle} to='/dashboard/adminprofile'><img src={profileIcon} alt="adminProfile" />Profile</Link>
            </div>
            <div className='NavBarContaineritem'>
              <Link className='dashboardsidelink' style={LinkStyle} to='/dashboard/admintrainer'><img src={trainerIcon} alt="traiers" /> Trainer</Link>
            </div>
            <div className='NavBarContaineritem'>
              <Link className='dashboardsidelink' style={LinkStyle} to='/dashboard/adminplans'><img src={planIcon} alt="plans" /> Plans</Link>
            </div>
            <div className='NavBarContaineritem'>
              <Link className='dashboardsidelink' style={LinkStyle} to='/dashboard/dietplan'><img src={dietPlanIcon} alt="dietPlan" /> Diet Plan</Link>
            </div>
            <div className='NavBarContaineritem'>
              <Link className='dashboardsidelink' style={LinkStyle} to='/dashboard/gymequipments'><img src={equipmentsIcon} alt="Equipments" /> Equipments</Link>
            </div>
            <div className='NavBarContaineritem'>
              <Link className='dashboardsidelink' style={LinkStyle} to='/dashboard/getfeedback'><img src={feedbackIcon} alt="feddback"  /> Feedback</Link>
            </div>
          </div>

          <div className='sidebarcontainer'>

            <Switch>
              <Route path='/dashboard/members' component={AllMeembers}></Route>
              <Route path='/dashboard/adminprofile' component={AdminProfile}></Route>
              <Route path='/dashboard/admintrainer' component={Trainer}></Route>
              <Route path='/dashboard/adminplans' component={Plans}></Route>
              <Route path='/dashboard/dietplan' component={DietPlan}></Route>
              <Route path='/dashboard/gymequipments' component={GymEuipments}></Route>
              <Route path='/dashboard/getfeedback' component={GetFeedback}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;