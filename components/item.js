import axios from "axios";
import { useState } from "react";

export default function Item({ data }) {
  const [alive, setAlive] = useState(true);
  const deleteWith = () => {
    axios
      .delete(`/api/with-list/${data._id}`)
      .then((res) => {
        // console.log(res);
        setAlive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return alive ? (
    data.type == "DEPOSIT" ? (
      <div className="ms-5 card shadow-lg p-3 mb-5 bg-body rounded me-5">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="fs-4">{data.category}</div>
            <div className="fs-5">{data.description}</div>
            <div className="fs-6 text-muted">
              {data.inserted.substring(0, 10)}
            </div>
          </div>

          <div className="fs-3" style={{ color: "green" }}>
            {data.value}$
          </div>
          <div className="btn btn-danger" onClick={deleteWith}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"></path>
            </svg>
          </div>
        </div>
      </div>
    ) : (
      <div className="ms-5 card shadow-lg p-3 mb-5 bg-body rounded me-5">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="fs-4">{data.category}</div>
            <div className="fs-5">{data.description}</div>
            <div className="fs-6 text-muted">
              {data.inserted.substring(0, 10)}
            </div>
          </div>

          <div className="fs-3" style={{ color: "red" }}>
            {data.value}$
          </div>
          <div className="btn btn-danger" onClick={deleteWith}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"></path>
            </svg>
          </div>
        </div>
      </div>
    )
  ) : null;
}
