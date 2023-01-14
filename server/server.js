const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

//create connection
const db = mysql.createConnection({
  // host: "localhost",
  // port: "34106",
  user: "root",
  password: "1234",
  database: "university",
});

//connect
db.connect((err) => {
  if (err) console.log(err);
  console.log("my sql connected...");
});
//middleware
app.use(cors());
app.get("/course", (req, res) => {
  const q = "SELECT * from university.course";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/cspt", (req, res) => {
  const q = "SELECT * from university.cspt";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/group-student", (req, res) => {
  const q = "SELECT * from university.group_student";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/groups", (req, res) => {
  const q = "SELECT * from university.groups";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/groups-course", (req, res) => {
  const q = "SELECT * from university.groups_course";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/prof", (req, res) => {
  const q = "SELECT * from university.prof";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/student", (req, res) => {
  const q = "SELECT * from university.student";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/term", (req, res) => {
  const q = "SELECT * from university.term";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q1", (req, res) => {
  //شماره دانشجویی،تاریخ تولد و نام دانشجویان گروه کامپیوتر
  const q =
    "SELECT student.name,student.SID,student.birth_date FROM student, university.groups , group_student WHERE university.groups.GID = group_student.GID AND student.SID = group_student.SID AND university.groups.name = 'comp.sci' GROUP BY student.SID";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q2", (req, res) => {
  //نام و نام خانوادگی دانشچوییانی که بالاترین نمره را در درس هوش مصنوعی گرفته اند
  const q =
    "select student.name from student, cspt where student.SID = cspt.SID and cspt.grade IN (SELECT MAX(cspt.grade) from cspt, course where cspt.CID = course.CID and course.Cname = 'AI')  ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q3", (req, res) => {
  //دانشجویانی که در درس بلاکچین پاس شدند
  const q =
    "select student.name from student, course,cspt where student.SID = cspt.SID and cspt.CID = course.CID and cspt.grade > 10 and course.Cname = 'blockchain'";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q10", (req, res) => {
  //تعداد واحد اخذ شده آرمان امیریان
  const q =
    "select sum(course.unit) 'sum_unit' from course, student,cspt where course.CID = cspt.CID and student.SID = cspt.SID and student.name = 'arman amirian'";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q5", (req, res) => {
  // اسامی و کدملی استادهایی که در ترم پاییز 1401 استاد دانشجو با نام فاطمه عطاری هستند
  const q =
    "select prof.name, prof_code from prof,student,cspt,term where student.SID = cspt.SID and prof.PID = cspt.PID and term.TID = cspt.TID and term.TID = 101 and student.name = 'fatemeh attari'";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q6", (req, res) => {
  //تاریخ تولد و نام دانشجویان زمین شناسی
  const q =
    "select student.name, student.birth_date from student, university.groups, group_student where university.groups.GID = group_student.GID and group_student.SID = student.SID and university.groups.name = 'geology'";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q7", (req, res) => {
  //دانشجویانی که در درس استاتیک پاس شدند (به تفکیک ترم)
  const q =
    "select COUNT(student.SID) as 'student_count',term.desc from student, cspt , course,term where student.SID = cspt.SID and cspt.CID = course.CID and cspt.grade >= 10 and course.Cname = 'static' GROUP BY term.TID";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q8", (req, res) => {
  //معدل دانشجو فریبرز عابدی
  const q =
    "select avg(cspt.grade) as 'avg_grade' from cspt,student where student.SID = cspt.SID and student.name = 'fariborz abedi' ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q9", (req, res) => {
  //جمع نمرات درس های اخذ شده توسط الهام امیری با احتساب تعداد واخد
  const q =
    "select sum(cspt.grade * course.unit) / sum(course.unit) 'avg_grade_m'  from cspt,course,student where student.SID = cspt.SID and course.CID = cspt.CID and student.SID = cspt.SID and student.name = 'elham amiri' ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/q4", (req, res) => {
  //نام و نام خانوادگی دانشجویانی که نمره درس هوش مصنوعی آنها در نیمسال پاییز ۱۴۰۱ با استاد سینا محسنی بیشتر از میانگین کلاس است
  const q = `select student.name from cspt,student,course,term,prof
      where student.SID = cspt.SID and
      course.CID = cspt.CID and 
      course.Cname = 'AI' and
      term.TID = cspt.TID and
      term.TID = 101 and
      prof.PID = cspt.PID and 
      prof.name = 'sina mohseni' and
      cspt.grade > (select avg(cspt.grade) from cspt,course,prof,student
      where student.SID = cspt.SID and
      course.CID = cspt.CID and
      prof.PID = cspt.PID and
      course.Cname = 'AI' and
      prof.name = 'sina mohseni')`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
port = 3005;
app.listen(port, () => console.log(`running on port ${port}`));
