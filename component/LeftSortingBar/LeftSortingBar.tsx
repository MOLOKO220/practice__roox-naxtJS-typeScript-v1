import React from "react";
import styles from "./LeftSortingBar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { saveUsers } from "../../storage/mainReducer";

export default function LeftSortingBar() {
  // redux
  const users: any[] = useSelector((state: any) => state.main.users);
  const dispatch = useDispatch();

  function sortCity() {
    let newUsers = [...users];
    newUsers.sort((a, b) => (a.name > b.name ? 1 : -1));
    dispatch(saveUsers(newUsers));
  }

  function sortCompani() {
    let newUsers = [...users];
    newUsers.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
    dispatch(saveUsers(newUsers));
  }

  return (
    <div className={styles.LeftSortingBar}>
      <h6
        onClick={() => {
          console.log(users);
        }}
      >
        Сортировка
      </h6>
      <button onClick={sortCity}>по городу</button>
      <button onClick={sortCompani}>по компании</button>
    </div>
  );
}
