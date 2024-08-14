package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepository;
@Service
public class LoginService {
     @Autowired
    LoginRepository rr;
     public Login create(Login r)
    {
       
        return rr.save(r);
    } 
    public List<Login> fetchDepartmentList() 
    { 
        return (List<Login>) rr.findAll(); 
    } 
    public Login getByid(int userId)
    {
        return rr.findById(userId).orElse(null);
    }
    public List<Login> getbysort(String field)
    {
        return rr.findAll(Sort.by(Sort.Direction.ASC,field));
    }
    public boolean updateDetails(int userId,Login r)
    {
        if(rr.findById(userId)==null)
        {
            return false;
        }
        try{
            rr.save(r);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }
    public boolean deleteEmployee(int userId)
    {
        if(this.getByid(userId) == null)
        {
            return false;
        }
        rr.deleteById(userId);
        return true;
        }
    
}