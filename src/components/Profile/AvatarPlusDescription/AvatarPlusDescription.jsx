import React from "react";
import AvatarPlusDescriptionStyles from "./AvatarPlusDescription.module.css";

const AvatarPlusDescription = () => {
  return (<div className={AvatarPlusDescriptionStyles.wrapper_description}>
    <img src="https://image.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg" className={AvatarPlusDescriptionStyles.description_avatar}></img>
    <div className={AvatarPlusDescriptionStyles.description_text}>
      <h2 className={AvatarPlusDescriptionStyles.description_namePerson}>Max A</h2>
      <ul className={AvatarPlusDescriptionStyles.description_list}>
        <li className={AvatarPlusDescriptionStyles.description_list_item}>Date of Birth: 2 january</li>
        <li className={AvatarPlusDescriptionStyles.description_list_item} >Date of Birth: 2 january</li>
        <li className={AvatarPlusDescriptionStyles.description_list_item}>Date of Birth: 2 january</li>
        <li className={AvatarPlusDescriptionStyles.description_list_item}>Date of Birth: 2 january</li>
      </ul>
    </div>
  </div>)
}

export default AvatarPlusDescription;