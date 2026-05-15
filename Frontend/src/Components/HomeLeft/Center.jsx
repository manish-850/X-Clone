import { RiHome5Line, RiSearchLine, RiAddLine, RiCompassDiscoverLine, RiNotificationLine,RiUserLine } from "@remixicon/react"

const Center = () => {
  return (
    <div className="center">
        <div className="navBtn">
          <div className="icon">
            <RiHome5Line />
          </div>
          <div className="text">Home</div>
        </div>
        <div className="navBtn">
          <div className="icon">
            <RiSearchLine />
          </div>
          <div className="text">Search</div>
        </div>
        <div className="navBtn">
          <div className="icon">
            <RiAddLine />
          </div>
          <div className="text">Create</div>
        </div>
        <div className="navBtn">
          <div className="icon">
            <RiCompassDiscoverLine />
          </div>
          <div className="text">Explore</div>
        </div>
        <div className="navBtn">
          <div className="icon">
            <RiNotificationLine />
          </div>
          <div className="text">Notifications</div>
        </div>
        <div className="navBtn">
          <div className="icon">
            <RiUserLine />
          </div>
          <div className="text">Profile</div>
        </div>
      </div>
  )
}

export default Center