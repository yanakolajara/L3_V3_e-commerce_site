package com.reverbclone.reverbclone.service;

import com.reverbclone.reverbclone.model.User;
import com.reverbclone.reverbclone.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
//import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
}
