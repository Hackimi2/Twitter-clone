import React from "react";
import "./profile.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";


export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt="Profile cover"
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt="Profile user"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Jane Doe</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile={true} />
          </div>
        </div>
      </div>
    </>
  );
}
