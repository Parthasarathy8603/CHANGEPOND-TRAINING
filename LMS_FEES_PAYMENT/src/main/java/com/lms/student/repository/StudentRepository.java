package com.lms.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.student.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    // Add custom query methods if needed
}
