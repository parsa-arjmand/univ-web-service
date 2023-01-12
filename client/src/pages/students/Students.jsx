import React from "react";
import DisplayInfo from "../../components/DisplayInfo";
import { useFetch } from "../../hooks/useFetch";
import "./students.css";
function Students() {
  const { data, isPending, error } = useFetch("https://parsaarjmand.iran.liara.run/q1");
  return (
    <div className="section">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">در حال پردازش ...</p>}
      {data &&
        data.map((student) => (
          <DisplayInfo key={student.SID}>
            <span>{student.SID}</span>
            <span>{student.name}</span>
            <span>{student.birth_date}</span>
          </DisplayInfo>
        ))}
    </div>
  );
}

export default Students;
