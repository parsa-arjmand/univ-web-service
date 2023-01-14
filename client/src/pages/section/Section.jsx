import React from "react";
import { useFetch } from "../../hooks/useFetch";
import DisplayInfo from "../../components/DisplayInfo";
function Section() {
  const { data, isPending, error } = useFetch("https://parsaarjmand.iran.liara.run/q3");
  return (
    <div className="section">
      <div className="title">
        <span>نام دانشجو</span>
      </div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">در حال پردازش ...</p>}
      {data &&
        data.map((student, index) => (
          <DisplayInfo key={index}>
            <span>{student.name}</span>
          </DisplayInfo>
        ))}
    </div>
  );
}

export default Section;
