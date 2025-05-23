package com.reverbclone.reverbclone.repository;

import com.reverbclone.reverbclone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
