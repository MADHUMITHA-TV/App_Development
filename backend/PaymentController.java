package com.example.demo.controller;

import com.example.demo.model.PaymentModel;
import com.example.demo.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:3000") 
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/submit2")
    public PaymentModel submitPayment(@RequestBody PaymentModel paymentModel) {
        return paymentService.savePayment(paymentModel);
    }

    @GetMapping("/all")
    public List<PaymentModel> getAllPayments() {

        return paymentService.getAllPayments();
    }

    @PutMapping("/all/{id}")
    public PaymentModel updatePayment(@PathVariable Long id, @RequestBody PaymentModel paymentModel) {
        return paymentService.updatePayment(id, paymentModel);
    }

    @DeleteMapping("/all/{id}")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
    }
}
