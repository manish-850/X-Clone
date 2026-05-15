import React from 'react'
import {RiLogoutCircleRLine} from "@remixicon/react"
const Bottom = () => {
  return (
    <div className="bottom">
        <div className="bottom-left">
          <div className="user-info">
            <div className="profile-pic">
              <img src="https://i.pinimg.com/736x/71/72/dd/7172ddc09dfbd4cc627ab217e84eb159.jpg" alt="" />
            </div>
            <div className="user-details">
              <div className="name">Manish</div>
              <div className="username">@ManishDot_Dev</div>
            </div>
          </div>
        </div>
        <div className="bottom-right">
          <div className="logoutBtn">
            <RiLogoutCircleRLine />
          </div>
        </div>
      </div>
  )
}

export default Bottom