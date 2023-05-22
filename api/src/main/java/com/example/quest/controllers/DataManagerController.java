package com.example.quest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.quest.Dto.AddDataDto;
import com.example.quest.Dto.ResponseDto;
import com.example.quest.models.DataManager;
import com.example.quest.services.DataManagerService;

@RestController
@RequestMapping("dataManager")
@CrossOrigin("*")
public class DataManagerController {
    @Autowired
    DataManagerService dataManagerService;

    @GetMapping("/")
    public ResponseEntity<?> getAllData() {
        try {
            ResponseDto response = new ResponseDto();
            response.setData(dataManagerService.getData());
            response.setMessage("Data Retrieved Successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);

        }
    }

    @PostMapping("/")
    public ResponseEntity<?> addNewData(@RequestBody AddDataDto payload) {
        try {
            ResponseDto response = new ResponseDto();
            response.setData(dataManagerService.addData(payload));
            response.setMessage("Data Added Successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);

        }
    }

    @PutMapping("/")
    public ResponseEntity<?> updateData(@RequestBody DataManager payload) {
        try {
            ResponseDto response = new ResponseDto();
            response.setData(dataManagerService.updateData(payload));
            response.setMessage("Data Updated Successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);

        }
    }


}
