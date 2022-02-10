package com.emtechhouse.co.ke.Branches.Models;

import com.emtechhouse.co.ke.Branches.Responses.CONSTANTS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springfox.documentation.spring.web.readers.operation.CachingOperationNameGenerator;

import java.util.Date;
import java.util.List;

@Service
public class BranchService {

    @Autowired
    public BranchRepository branchRepository;

    public Branch saveBranch(Branch branch){
        branch.setDeletedFlag(CONSTANTS.No);
        branch.setPostedTime(new Date());
        branch.setPostedFlag(CONSTANTS.Yes);

        return branchRepository.save(branch);
    }

    public Branch updateBranch(Branch branch){
        return branchRepository.save(branch);
    }

    public Branch retrieveBranch(String solCode){
        return branchRepository.findBysolCode(solCode);

    }

    public List<Branch> retrieveAllBranches(){
        return branchRepository.findBydeletedFlag('N');
    }

}
