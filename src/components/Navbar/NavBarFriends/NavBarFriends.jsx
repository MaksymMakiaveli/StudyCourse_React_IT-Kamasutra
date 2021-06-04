import React from 'react';
import friendStyles from './NavBarFriends.module.css';

let SideBarFriends = ({ DataFriends }) => {
  return (
    <>
      {DataFriends.map((element) => {
        return (
          <div key={element.id} className={friendStyles.wrapper}>
            <a href='##'>
              <img className={friendStyles.avatar} src={element.avatar} alt='' />
            </a>
            <div>
              <a href='##' className={friendStyles.nickname}>
                <p>{element.name}</p>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SideBarFriends;
