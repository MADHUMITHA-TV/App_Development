package com.example.demo.model;
import jakarta.persistence.*;
@Entity
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    String email,password;
    public Login() {}
    public Login(int userId, String email, String password, Register register) {
        this.userId = userId;
        this.email = email;
        this.password = password;     
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }    
}