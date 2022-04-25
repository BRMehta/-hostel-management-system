package com.hostel.hostelPortal.repo;


import com.hostel.hostelPortal.model.LaundryRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface LaundryRepository extends JpaRepository<LaundryRequest,Long> {
    @Modifying
    @Transactional
    @Query("update LaundryRequest lr set lr.weightOfCloths = :weight,lr.clothsDry=:dryCloths" +
            ",lr.numberOfIronedCloths=:numIronCloths where lr.id = :reqId")
    int updateLaundryrequest(@Param("reqId") Long id,@Param("weight") Integer new_weight,
                             @Param("dryCloths") Boolean dryCloths,@Param("numIronCloths") Integer numIronCloths);

    List<LaundryRequest> findByUser_IdAndAcceptanceTimeIsNullAndRejectionTimeIsNull(@Param("reqId") Long id);

    List<LaundryRequest> findByAcceptanceTimeIsNullAndRejectionTimeIsNull();

    List<LaundryRequest> findByUser_IdAndAcceptanceTimeIsNotNull(@Param("reqId") Long id);

    List<LaundryRequest> findByAcceptanceTimeIsNotNull();

    List<LaundryRequest> findByUser_IdAndRejectionTimeIsNotNull(@Param("reqId") Long id);

    List<LaundryRequest> findByRejectionTimeIsNotNull();

    List<LaundryRequest> findByUser_IdAndCompletionTimeIsNotNull(@Param("reqId") Long id);

    List<LaundryRequest> findByCompletionTimeIsNotNull();

    List<LaundryRequest> findByIdAndAcceptanceTimeIsNullAndRejectionTimeIsNull(Long reqId);
}
