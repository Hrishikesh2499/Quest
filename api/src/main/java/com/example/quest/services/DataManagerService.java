package com.example.quest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.quest.Dto.AddDataDto;
import com.example.quest.models.DataManager;
import com.example.quest.repositories.DataManagerRepository;

@Service
public class DataManagerService {
    @Autowired
    private DataManagerRepository dataManagerRepository;

    public List<DataManager> getData() {
        Sort sort=Sort.by("id").ascending();
        return dataManagerRepository.findAll(sort);

    }

    public List<DataManager> addData(AddDataDto payload) {
        DataManager dataManager = new DataManager();
        dataManager.setBeta(payload.getBeta());
        dataManager.setEmail(payload.getEmail());
        dataManager.setExpires(payload.getExpires());

        dataManagerRepository.save(dataManager);
        return getData();

    }
    public List<DataManager> updateData(DataManager payload) {
        dataManagerRepository.save(payload);
        return getData();

    }
}
