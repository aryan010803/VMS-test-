import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faBell,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import userImage from "../../../assets/jpg/user-img.jpeg";
import { useState } from "react";

const TopPanel = (props) => {
    const [UserData, UpdateUserData] = useState({
        nickname: "Taylor Swift",
        notificationEnabled: false,
    });
    const toggleNotificationSetting = () => {
        UpdateUserData({
            ...UserData,
            notificationEnabled: !UserData.notificationEnabled,
        });
    };
    return (
        <div className="top-panel">
            <div className="search-box">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="search-icon"
                />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="right-options">
                <FontAwesomeIcon
                    icon={faBell}
                    className="notification-bell"
                    style={
                        UserData.notificationEnabled
                            ? { color: "#742ADF" }
                            : {}
                    }
                    onClick={toggleNotificationSetting}
                />
                <div className="user-account-container">
                    <img src={userImage} alt="😵" />
                    <div>{UserData.nickname}</div>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
        </div>
    );
};

export default TopPanel;
