import React from "react";
import { useFetch } from "../hooks/useFetch";
import DisplayInfo from "../components/DisplayInfo";
function Q5() {
  const { data, isPending, error } = useFetch("https://parsaarjmand.iran.liara.run/q5");
  return (
    <div className="section">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">در حال پردازش ...</p>}
      {data &&
        data.map((student) => (
          <DisplayInfo key={student.prof_code}>
            <span>{student.name}</span>
            <span>{student.prof_code}</span>
          </DisplayInfo>
        ))}
    </div>
  );
}

export default Q5;
