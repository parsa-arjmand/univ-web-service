import React from "react";
import { useFetch } from "../hooks/useFetch";
import DisplayInfo from "../components/DisplayInfo";
function Q6() {
  const { data, isPending, error } = useFetch("https://parsaarjmand.iran.liara.run/q6");
  return (
    <div className="section">
      <div className="title">
        <span>نام دانشجو</span>
        <span>تاریخ تولد</span>
      </div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">در حال پردازش ...</p>}
      {data &&
        data.map((student, index) => (
          <DisplayInfo key={index}>
            <span>{student.name}</span>
            <span>{student.birth_date}</span>
          </DisplayInfo>
        ))}
    </div>
  );
}

export default Q6;
