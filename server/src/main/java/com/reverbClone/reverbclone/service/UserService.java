package com.reverbclone.reverbclone.service;

import com.reverbclone.reverbclone.model.User;
import com.reverbclone.reverbclone.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
//import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    // Constructor
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    // Creates a user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Gets a user by id
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Gets a user by email
    public Optional<User> getUserByEmail(String email) { return userRepository.findByEmail(email); }

    // Edits a user
    public User updateUser(User user) { return userRepository.save(user); }

    // Deletes a user
    public void deleteUser(Long id) { userRepository.deleteById(id); }

}
