package com._blog.backend.service;

import java.util.List;

import com._blog.backend.dto.UserRequestDto;
import com._blog.backend.dto.UserResponseDto;

public interface UserService {

    UserResponseDto createUser(UserRequestDto dto);

    List<UserResponseDto> getAllUsers();

    UserResponseDto getUserById(Long id);

    UserResponseDto updateUser(Long id, UserRequestDto dto);

    void deleteUser(Long id);
}
