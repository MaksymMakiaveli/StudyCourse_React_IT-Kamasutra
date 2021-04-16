import React from "react";
import AvatarPlusDescription from "./AvatarPlusDescription/AvatarPlusDescription";
import MyPosts from "./MyPosts/MyPosts";

import ProfileStyles from "./Profile.module.css";

const Profile = () => {
  return (<div >
    <div className={ProfileStyles.background_profile}>
      <img
        className={ProfileStyles.background_profile_img}
        src="https://image.freepik.com/free-vector/leaves-background-with-metallic-foil_79603-956.jpg">
      </img>
    </div>
    <AvatarPlusDescription />
    <MyPosts />

  </div>)
}

export default Profile;