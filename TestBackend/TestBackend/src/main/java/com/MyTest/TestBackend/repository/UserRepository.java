package com.MyTest.TestBackend.repository;

import com.MyTest.TestBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
