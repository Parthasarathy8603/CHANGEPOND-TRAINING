package com.lms.student.service;

import java.util.List;

import com.lms.student.model.Student;

public interface StudentService {
    Student saveStudent(Student student);
    List<Student> getAllStudents();
}
