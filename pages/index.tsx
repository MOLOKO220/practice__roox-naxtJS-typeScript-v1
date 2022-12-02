import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveUsers } from "../storage/mainReducer";

import UserItem from "../component/UserItem/UserItem";

export default function index() {
  // redux
  const users: any[] = useSelector((state: any) => state.main.users);
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    // получаем данные пользователей
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(saveUsers(data));
      });
  }, []);

  return (
    <div className="users-list">
      <h1
        onClick={() => {
          console.log(users);
        }}
      >
        Список пользователей
      </h1>
      {users.length > 0
        ? users.map((user) => {
            return (
              <UserItem
                key={user.id}
                name={user.name}
                city={user.address.city}
                companyName={user.company.name}
                allData={user}
                id={user.id}
              />
            );
          })
        : "ожидание..."}
    </div>
  );
}
