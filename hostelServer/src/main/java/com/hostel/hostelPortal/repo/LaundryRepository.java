package com.hostel.hostelPortal.repo;


import com.hostel.hostelPortal.model.LaundryRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface LaundryRepository extends JpaRepository<LaundryRequest,Long> {
    @Modifying
    @Transactional
    @Query("update LaundryRequest lr set lr.weightOfCloths = :weight where lr.id = :reqId")
    int setWeightInLaundryRequest(@Param("reqId") Long id,@Param("weight") Integer new_weight);
}
