import { useState } from "react"
import { CgProfile } from "react-icons/cg";
import { Menu } from "../menu/Menu"

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
      <div className="profile-container">
        <CgProfile className="profile-icon name" />
        <div className="profile-left-side">
          <div className="detail-container">
            <p className="profile-paragraph">Location</p>
            <input className="profile-input" value={cityName} onChange={(e) => setCityName(e.target.value)} />
          </div>
          <div className="detail-container">
            <p className="profile-paragraph">Date Of Birth</p>
            <div className="date-of-birth-container">
              <p>{user.dateOfBirth.getDay()}</p>
              <p>{user.dateOfBirth.getMonth()}</p>
              <p>{user.dateOfBirth.getFullYear()}</p>
            </div>
          </div>
          <div className="detail-container">
            <p className="profile-paragraph">Email</p>
            <p className="profile-paragraph">{user.email}</p>
          </div>
          <div className="profile-buttons">
            <button className="profile-button">Change Email</button>
            <button className="profile-button">Change Password</button>
          </div>
        </div>
        <div className="profile-right-side">
          <div className="detail-container">
            <p className="profile-paragraph">Skills</p>
            <textarea className="skills input" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>
          <div className="detail-container">
            <p className="profile-paragraph">Wanted Skills</p>
            <textarea className="skills input" value={wantedSkills} onChange={(e) => setWantedSkills(e.target.value)} />
          </div>
        </div>
        <div className="bio-container">
          <p className="detail-container">Bio</p>
          <textarea className="bio input" value={bio} onChange={(e) => setBio(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}
