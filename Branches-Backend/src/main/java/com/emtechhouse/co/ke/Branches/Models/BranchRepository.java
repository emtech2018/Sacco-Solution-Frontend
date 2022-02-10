package com.emtechhouse.co.ke.Branches.Models;

import com.emtechhouse.co.ke.Branches.Responses.CONSTANTS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {

    Branch findBysolCode(String solCode);

    List<Branch> findBydeletedFlag(Character deletedFlag);

}

