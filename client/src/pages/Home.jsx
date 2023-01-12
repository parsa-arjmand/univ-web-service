import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link style={{ color: "#0004ff" }} to="/datamodel">
        مشاهده ی data model
      </Link>
      <h3 style={{ margin: "1rem 0" }}>کوئری ها</h3>
      <div className="q-content">
        <div className="q-title">
          <p> شماره دانشجویی،تاریخ تولد و نام دانشجویان گروه کامپیوتر</p>
          <Link className="button" to="/q1">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>
            نام و نام خانوادگی دانشجویانی که بالاترین نمره را در درس هوش مصنوعی گرفته اند
          </p>
          <Link className="button" to="/q2">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>دانشجویانی که در درس بلاکچین پاس شدند</p>
          <Link className="button" to="/q3">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>
            نام و نام خانوادگی دانشجویانی که نمره درس هوش مصنوعی آنها در نیمسال پاییز ۱۴۰۱
            با استاد سینا محسنی بیشتر از میانگین کلاس است
          </p>
          <Link className="button" to="/q4">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>
            اسامی و کدملی استادهایی که در ترم پاییز 1401 استاد دانشجو با نام فاطمه عطاری
            هستند
          </p>
          <Link className="button" to="/q5">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>تاریخ تولد و نام دانشجویان زمین شناسی</p>
          <Link className="button" to="/q6">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>تعداد دانشجویانی که در درس استاتیک پاس شدند (به تفکیک ترم)</p>
          <Link className="button" to="/q7">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>معدل دانشجو فریبرز عابدی</p>
          <Link className="button" to="/q8">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>جمع نمرات درس های اخذ شده توسط الهام امیری با احتساب تعداد واحد</p>
          <Link className="button" to="/q9">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
      <div className="q-content">
        <div className="q-title">
          <p>تعداد واحد اخذ شده آرمان امیریان</p>
          <Link className="button" to="/q10">
            دریافت اطلاعات
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
