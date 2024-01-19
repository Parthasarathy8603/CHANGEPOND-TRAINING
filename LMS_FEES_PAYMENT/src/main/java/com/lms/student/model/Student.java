package com.lms.student.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "FEE_PAYMENT")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Regid")
    private String Regid;

    @Column(name = "full_name")
    private String full_name;

    @Column(name = "course_id")
    private String course_id;

    @Column(name = "course_name")
    private String course_name;

    @Column(name = "total_course_fees")
    private String total_course_fees;

    @Column(name = "payment_option")
    private String payment_option;

    @Column(name = "installment_count")
    private String installment_count;

    @Column(name = "amount_pay")
    private String amount_pay;

    @Column(name = "pending_amount")
    private String pending_amount;

    @Column(name = "payment_type")
    private String payment_type;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRegid() {
		return Regid;
	}

	public void setRegid(String regid) {
		Regid = regid;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public String getCourse_id() {
		return course_id;
	}

	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}

	public String getCourse_name() {
		return course_name;
	}

	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}

	public String getTotal_course_fees() {
		return total_course_fees;
	}

	public void setTotal_course_fees(String total_course_fees) {
		this.total_course_fees = total_course_fees;
	}

	public String getPayment_option() {
		return payment_option;
	}

	public void setPayment_option(String payment_option) {
		this.payment_option = payment_option;
	}

	public String getInstallment_count() {
		return installment_count;
	}

	public void setInstallment_count(String installment_count) {
		this.installment_count = installment_count;
	}

	public String getAmount_pay() {
		return amount_pay;
	}

	public void setAmount_pay(String amount_pay) {
		this.amount_pay = amount_pay;
	}

	public String getPending_amount() {
		return pending_amount;
	}

	public void setPending_amount(String pending_amount) {
		this.pending_amount = pending_amount;
	}

	public String getPayment_type() {
		return payment_type;
	}

	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}

	public Student(int id, String regid, String full_name, String course_id, String course_name,
			String total_course_fees, String payment_option, String installment_count, String amount_pay,
			String pending_amount, String payment_type) {
		super();
		this.id = id;
		Regid = regid;
		this.full_name = full_name;
		this.course_id = course_id;
		this.course_name = course_name;
		this.total_course_fees = total_course_fees;
		this.payment_option = payment_option;
		this.installment_count = installment_count;
		this.amount_pay = amount_pay;
		this.pending_amount = pending_amount;
		this.payment_type = payment_type;
	}

    
}
