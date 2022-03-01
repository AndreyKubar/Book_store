import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SERVER_PATH } from "../../constants/notNamedYet";
import { useAppSelector } from "../../utils/reduxHooks";
import { Userpage } from "./UserPage.styles";

function UserPage() {
  const {
    user: { fullname, email },
    avatarPath,
  } = useAppSelector((state) => state.userData);
  const [filter, setFilter] = useState<string>("Профиль");

  return (
    <Userpage className="userpage">
      <div className="userpage__header">
        <div className="userpage__title">
          <h2 className="title">{filter}</h2>
        </div>
        <div className="userpage__user">
          <div className="userpage__user-image">
            <img
              className="profile-img"
              src={avatarPath ? `${SERVER_PATH}${avatarPath}` : ""}
              alt="user_avatar"
            />
          </div>
          <div className="userpage__user-info">
            <div className="userpage__user-name">
              {fullname} 
            </div>
            <div className="userpage__user-contacts user-contacts">

              <div className="user-contacts__email">{email}</div>
            </div>
          </div>
        </div>
        <div>
          <ul className="userpage__filters">
            <div className="filter">
              <Link
                className={`link ${filter === "Профиль" ? "link-active" : ""}`}
                to="profile"
                onClick={() => {
                  setFilter("Профиль");
                }}
              >
                Профиль
              </Link>
            </div>

            <div className="filter">
              <Link
                className={`link ${filter === "Заказы" ? "link-active" : ""}`}
                to="orders"
                onClick={() => {
                  setFilter("Заказы");
                }}
              >
                Заказы
              </Link>
            </div>

            <div className="filter">
              <Link
                className={`link ${filter === "Список желаний" ? "link-active" : ""}`}
                to="wishlist"
                onClick={() => {
                  setFilter("Список желаний");
                }}
              >
                Вишлист
              </Link>
            </div>
          </ul>
        </div>
      </div>

      <Outlet />
    </Userpage>
  );
}

export default UserPage;