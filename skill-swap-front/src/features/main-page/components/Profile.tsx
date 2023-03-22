import React from 'react';
import '../styles/Profile.css';

interface ProfileData {
  name: string;
  city: string;
  skills: string[];
  wantedSkills: string[];
}

export const Profile = (props: ProfileData) => {
  return(
    <div className="profile-container">
      <h3 className="profile-name">{props.name}</h3>
      <h4 className="profile-city">{props.city}</h4>
      <p className="profile-skills">Skills: {props.skills.map((skill) => (
        <li className="skills-list">{skill}</li>
      ))}</p>
      <p className="profile-skills">Wants: {props.wantedSkills.map((skill) => (
        <li className="skills-list">{skill}</li>
      ))}</p>
      <button className="chat-button">Start Chatting</button>
    </div>
  )
}
