import React from "react";
import { useFetch } from "../hooks/useFetch";
import DisplayInfo from "../components/DisplayInfo";
function Q4() {
  const { data, isPending, error } = useFetch("https://parsaarjmand.iran.liara.run/q4");
  return (
    <div className="section">
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

export default Q4;
