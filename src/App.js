import logo from './logo.svg';
import './App.css';
import FeesDetails from './Fees/FeesDetails';
import GetDeatils from './Fees/GetDeatils';
import Homepage from './Routing/Homepage';
import FormDetails from './Fees/StudentFormComponent';
import React from 'react';
import StudentFormComponent from './Fees/StudentFormComponent';
import MainContent from './Component/MainContent';
import ExamFees from './Fees/ExamFees';
import net from './Fees/NetBankingForm';
import NetbankingForm from './Fees/NetBankingForm';
import CardDetails from './Fees/CardDetails';
import PaymentPage from './Fees/PaymentPage';
import UpiPaymentForm from './Fees/UpiPaymentForm';
import CourseTable from './Fees/CourseTable';
import AdminCourseTable from './Admin/AdminCourseTable';




const App = () => {
  return (
    <div className="App">
       {/* <FeesDetails/> */}
      {/* <StudentFormComponent  /> */}
      {/* <ExamFees/> */}
      <Homepage/>
      {/* <AdminCourseTable/> */}
      {/* <CourseTable/> */}
      {/* <UpiPaymentForm/> */}
      <MainContent/>
      {/* <Sidebar/> */}
      {/* <NetbankingForm/> */}
     {/* <CardDetails/> */}
     {/* <PaymentPage/> */}
  

    </div>
  );
};


export default App;
