import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
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
      <div className="profile-content-container">
      <CgProfile className="profile-icon name" />
      <h3 className="profile-name">{props.name}</h3>
      </div>
      <div className="profile-content-container">
      <MdLocationOn className="profile-icon city"/>
      <h4 className="profile-city">{props.city}</h4>
      </div>
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
