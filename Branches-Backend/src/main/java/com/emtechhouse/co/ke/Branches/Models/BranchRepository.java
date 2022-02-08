package com.emtechhouse.co.ke.Branches.Models;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {

    Branch findBysolCode(String solCode);


}

