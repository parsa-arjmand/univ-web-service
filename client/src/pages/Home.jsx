import React from "react";
import HomeContent from "../components/HomeContent";
import HomeNav from "../components/HomeNav";

function Home() {
  return (
    <>
      <h3> جداول SQL و مدل داده</h3>
      <HomeNav />

      <h3>کوئری ها</h3>
      <HomeContent
        path="/q1"
        text="شماره دانشجویی،تاریخ تولد و نام دانشجویان گروه کامپیوتر"
        select="student.name,student.SID,student.birth_date"
        from="student, university.groups , group_student"
        where=" university.groups.GID = group_student.GID AND student.SID =
group_student.SID AND university.groups.name = 'comp.sci' GROUP BY
student.SID"
      />
      <HomeContent
        path="/q2"
        text="نام و نام خانوادگی دانشجویانی که بالاترین نمره را در درس هوش مصنوعی گرفته اند"
        select="student.name"
        from="student, cspt"
        where=" student.SID = cspt.SID and cspt.grade IN (SELECT
          MAX(cspt.grade) from cspt, course where cspt.CID = course.CID and course.Cname =
          'AI')"
      />
      <HomeContent
        path="/q3"
        text="دانشجویانی که در درس بلاکچین پاس شدند"
        select=" student.name"
        from="student,course,cspt"
        where=" student.SID = cspt.SID and cspt.CID = course.CID and cspt.grade > 10 and course.Cname = 'blockchain'"
      />
      <HomeContent
        path="/q4"
        text="نام و نام خانوادگی دانشجویانی که نمره درس هوش مصنوعی آنها در نیمسال پاییز ۱۴۰۱
        با استاد سینا محسنی بیشتر از میانگین کلاس است"
        select="student.name"
        from=" cspt,student,course,term,prof"
        where=" student.SID = cspt.SID and
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
        prof.name = 'sina mohseni')"
      />
      <HomeContent
        path="/q5"
        text="اسامی و کدملی استادهایی که در ترم پاییز 1401 استاد دانشجو با نام فاطمه عطاری
        هستند"
        select="prof.name, prof_code"
        from="prof,student,cspt,term"
        where="student.SID = cspt.SID and prof.PID = cspt.PID and term.TID = cspt.TID and term.TID = 101 and student.name = 'fatemeh attari'"
      />
      <HomeContent
        path="/q6"
        text="تاریخ تولد و نام دانشجویان زمین شناسی "
        select="student.name, student.birth_date"
        from=" student, university.groups, group_student"
        where=" university.groups.GID = group_student.GID and group_student.SID = student.SID and university.groups.name = 'geology'"
      />
      <HomeContent
        path="/q7"
        text="تعداد دانشجویانی که در درس استاتیک پاس شدند (به تفکیک ترم)"
        select="COUNT(student.SID) as 'student_count',term.desc"
        from="student, cspt, course,term"
        where="student.SID = cspt.SID and cspt.CID = course.CID and cspt.grade >= 10 and course.Cname = 'static' GROUP BY term.TID"
      />

      <HomeContent
        path="/q8"
        text="معدل دانشجو فریبرز عابدی"
        select=" avg(cspt.grade) as 'avg_grade'"
        from=" cspt,student"
        where=" student.SID = cspt.SID and student.name = 'fariborz abedi'"
      />
      <HomeContent
        path="/q9"
        text="جمع نمرات درس های اخذ شده توسط الهام امیری با احتساب تعداد واحد"
        select="sum(cspt.grade * course.unit) / sum(course.unit) 'avg_grade_m'"
        from="cspt,course,student"
        where="student.SID = cspt.SID and course.CID = cspt.CID and student.SID = cspt.SID and student.name = 'elham amiri'"
      />
      <HomeContent
        path="/q10"
        text="تعداد واحد اخذ شده آرمان امیریان"
        select="sum(course.unit) 'sum_unit'"
        from="course, student,cspt"
        where="course.CID = cspt.CID and student.SID = cspt.SID and student.name = 'arman amirian'"
      />
    </>
  );
}

export default Home;
