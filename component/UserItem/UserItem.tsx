import Link from "next/link";
import React from "react";
import styles from "./UserItem.module.scss";

interface propsUser {
  id: number;
  name: string;
  city: string;
  companyName: string;
  allData: [];
}

export default function UserItem(props: propsUser) {
  return (
    <div className={styles.UserItem}>
      <div>
        <h6>ФИО:</h6>
        <p>{props.name}</p>
      </div>
      <div>
        <h6>город:</h6>
        <p>{props.city}</p>
      </div>
      <div>
        <h6>компания:</h6>
        <p>{props.companyName}</p>
      </div>
      <Link href={`/${props.id}`}>Подробнее</Link>
    </div>
  );
}
