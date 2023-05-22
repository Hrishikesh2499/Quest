package com.example.quest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quest.models.DataManager;

public interface DataManagerRepository extends JpaRepository<DataManager,Long> {
    
}
