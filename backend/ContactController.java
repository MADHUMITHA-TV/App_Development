package com.example.demo.controller;
import com.example.demo.model.ContactModel;
import com.example.demo.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {
    @Autowired
    private ContactService contactService;
    @PostMapping("/submit1")
    public ContactModel submitMessage(@RequestBody ContactModel contactModel) {
        return contactService.saveMessage(contactModel);
    }
    @GetMapping("/messages")
    public List<ContactModel> getAllMessages() {
        return contactService.getAllMessages();
    }
    @DeleteMapping("/messages/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactService.deleteMessage(id);
    }
}
