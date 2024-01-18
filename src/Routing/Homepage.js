import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Router,Routes,} from "react-router-dom";
import GetDeatils from '../Fees/GetDeatils';
import FeesDetails from '../Fees/FeesDetails';
import NetBanking from '../Fees/NetBankingForm';
import StudentFormComponent from '../Fees/StudentFormComponent';
import SideBar from '../Component/SideBar';
import ExamFees from '../Fees/ExamFees';
import NetbankingForm from '../Fees/NetBankingForm';
import PaymentPage from '../Fees/PaymentPage';
import CardDetails from '../Fees/CardDetails';
import UpiPaymentForm from '../Fees/UpiPaymentForm';
import CourseTable from '../Fees/CourseTable';



 class Homepage extends Component {
    render() {
        return (
            <div>

              
              <BrowserRouter>
               
                <Routes>
                  
                    <Route path='/' element={<SideBar/>}></Route>
                    <Route path='/registration-fees' element={<StudentFormComponent/>}></Route>
                    <Route path='/course-fee-details' element={<CourseTable/>}></Route>
                    <Route path='/exam-fees' element={<ExamFees/>}></Route>
                    <Route path='/carddetails' element={<CardDetails/>}></Route>
                    <Route path='/netbanking' element={<NetbankingForm/>}></Route>
                    <Route path='/payment' element={<PaymentPage/>}></Route>
                    <Route path='/upi' element={<UpiPaymentForm/>}></Route>

                </Routes>
               
              </BrowserRouter>
              
            </div>
        )
    }
}

export default Homepage
