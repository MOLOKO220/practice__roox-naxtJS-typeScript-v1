import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export const getServerSideProps = async (contstc: any) => {
  // contstc.query получаем идентификатор данной страницы (id конкретного пользователя)
  return { props: { id: contstc.query.id } };
};

export default function id(props: any) {
  // redux
  const users: any[] = useSelector((state: any) => state.main.users);

  // получаем данные конкретного пользователя
  const userData = users.filter((user) => {
    return user.id == props.id;
  });

  // hooks
  const [readonly, setReadonly] = useState(true);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function Edit() {
    setReadonly(!readonly);
  }

  return (
    <div className="user-profile">
      <header>
        <h4>Профиль пользоваетля</h4>
        <button onClick={Edit}>Редактироввать</button>
      </header>
      <main>
        <form>
          <label>
            <h6>Name</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].name}
              {...register("Name", { required: true })} // onCheng
              className={errors.Name ? "input-error" : ""} // error
            />
          </label>
          <label>
            <h6>User name</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].username}
              {...register("userName", { required: true })}
              className={errors.userName ? "input-error" : ""}
            />
          </label>
          <label>
            <h6>E-mail</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].email}
              {...register("email", { required: true })}
              className={errors.email ? "input-error" : ""}
            />
          </label>
          <label>
            <h6>Street</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].address.street}
              {...register("street", { required: true })}
              className={errors.street ? "input-error" : ""}
            />
          </label>
          <label>
            <h6>City</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].address.city}
              {...register("city", { required: true })}
              className={errors.city ? "input-error" : ""}
            />
          </label>
          <label>
            <h6>Zip code</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].address.zipcode}
              {...register("zip", { required: true })}
              className={errors.zip ? "input-error" : ""}
            />
          </label>
          <label>
            <h6>Phone</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].phone}
              {...register("phone", { required: true })}
              className={errors.phone ? "input-error" : ""}
            />
          </label>
          <label>
            <h6>Website</h6>
            <input
              type="text"
              readOnly={readonly}
              defaultValue={userData[0].website}
              {...register("website", { required: true })}
              className={errors.website ? "input-error" : ""}
            />
          </label>
          <label>
            <h6>Comment</h6>
            <textarea readOnly={readonly} {...register("Comment")}></textarea>
          </label>
        </form>
        <button
          disabled={readonly}
          onClick={handleSubmit((data) => console.log(JSON.stringify(data)))}
        >
          Отправить
        </button>
      </main>
    </div>
  );
}
