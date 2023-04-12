import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Menu } from "../menu/Menu";
import "./styles/ProfilePage.css";

interface UserDetails {
  cityName: string,
  dateOfBirth: Date,
  email: string,
  skills: string,
  wantedSkills: string,
  bio: string,
}

export const ProfilePage = (user: UserDetails) => {
  const [cityName, setCityName] = useState(user.cityName);
  const [skills, setSkills] = useState(user.skills);
  const [wantedSkills, setWantedSkills] = useState(user.wantedSkills);
  const [bio, setBio] = useState(user.bio);


  return (
    <div className="global-container">
      <Menu />
        <div className="profile-icon-container">
          <CgProfile className="profile-icon" />
        </div>
      <div className="profile-container">
        <div className="content-container">
          <div className="detail-container">
            <p className="profile-paragraph">Location</p>
            <input className="profile-input city" value={cityName} onChange={(e) => setCityName(e.target.value)} />
          </div>
          <div className="detail-container">
            <p className="profile-paragraph">Date Of Birth</p>
            <div className="date-of-birth-container">
              <p>{user.dateOfBirth.getDay()}.</p>
              <p>{user.dateOfBirth.getMonth()}.</p>
              <p>{user.dateOfBirth.getFullYear()}</p>
            </div>
          </div>
          <div className="detail-container">
            <p className="profile-paragraph">Email</p>
            <p className="email-paragraph">{user.email}</p>
          </div>
          <div className="profile-buttons-container">
            <button className="profile-button">Change Email</button>
            <button className="profile-button">Change Password</button>
          </div>
        </div>
        <div className="content-container">
          <div className="detail-container">
            <p className="profile-paragraph">Skills</p>
            <textarea className="profile-input box" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>
          <div className="detail-container">
            <p className="profile-paragraph">Wanted Skills</p>
            <textarea className="profile-input box" value={wantedSkills} onChange={(e) => setWantedSkills(e.target.value)} />
          </div>
        </div>
        <div className="content-container">
          <p className="profile-paragraph">Bio</p>
          <textarea className="profile-input box bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}
