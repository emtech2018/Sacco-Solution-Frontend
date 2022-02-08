package com.emtechhouse.co.ke.Branches.Controllers;

import com.emtechhouse.co.ke.Branches.Models.Branch;
import com.emtechhouse.co.ke.Branches.Models.BranchService;
import com.emtechhouse.co.ke.Branches.Responses.CONSTANTS;
import com.emtechhouse.co.ke.Branches.Responses.EntityResponse;
import com.emtechhouse.co.ke.Branches.Responses.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin
@RequestMapping("branch")
public class BranchController {
    @Autowired
    private BranchService branchService;

    @GetMapping("{code}")
    public ResponseEntity<?> getBranch(@PathVariable("code") String code, HttpServletRequest request){
        EntityResponse<Branch> entityResponse = new EntityResponse<>();
        entityResponse.setEntity(branchService.retrieveBranch(code));
        entityResponse.setMessage(Messages.RECORD_FOUND);
        entityResponse.setStatusCode(HttpStatus.OK.value());
        return ResponseEntity.status(HttpStatus.OK).body(entityResponse);
    }

    @PostMapping("add")
    public ResponseEntity<?> addBranch(@RequestBody Branch branch, HttpServletRequest request){
        EntityResponse<Branch> entityResponse = new EntityResponse<>();
        entityResponse.setEntity(branchService.saveBranch(branch));
        entityResponse.setMessage(Messages.RECORD_CREATED);
        entityResponse.setStatusCode(HttpStatus.CREATED.value());
        return ResponseEntity.status(HttpStatus.CREATED).body(entityResponse);
    }
    @GetMapping("all")
    public ResponseEntity<?> allBranches(){
        EntityResponse<List<Branch>> entityResponse = new EntityResponse<>();
        entityResponse.setEntity(branchService.retrieveAllBranches());
        entityResponse.setStatusCode(HttpStatus.OK.value());
        entityResponse.setMessage(Messages.RECORD_FOUND);
        return ResponseEntity.ok().body(entityResponse);
    }

    @PutMapping("update")
    public ResponseEntity<EntityResponse<Branch>> updateBranch(@RequestBody Branch branch){
        EntityResponse<Branch> entityResponse = new EntityResponse<>();

        if(branch.getDeletedFlag().equals(CONSTANTS.Yes) && branch.getVerifiedFlag().equals(CONSTANTS.Yes)){
            entityResponse.setEntity(null);
            entityResponse.setStatusCode(HttpStatus.NO_CONTENT.value());
            entityResponse.setMessage(Messages.RECORD_DELETED);
            return ResponseEntity.status(HttpStatus.OK).body(entityResponse);
        } else if (branch.getDeletedFlag().equals(CONSTANTS.Yes) && branch.getVerifiedFlag().equals(CONSTANTS.No)){
            entityResponse.setEntity(null);
            entityResponse.setMessage(Messages.RECORD_DELETED);
            entityResponse.setStatusCode(HttpStatus.NO_CONTENT.value());
            return ResponseEntity.status(HttpStatus.OK).body(entityResponse);
        }else if (branch.getDeletedFlag().equals(CONSTANTS.No) && branch.getVerifiedFlag().equals(CONSTANTS.Yes)){
            entityResponse.setEntity(null);
            entityResponse.setMessage(Messages.RECORD_UPDATED);
            entityResponse.setStatusCode(HttpStatus.OK.value());
            return ResponseEntity.ok().body(entityResponse);
        }else{
            entityResponse.setEntity(null);
            entityResponse.setMessage(Messages.RECORD_FOUND);
            entityResponse.setStatusCode(HttpStatus.OK.value());
            return ResponseEntity.ok().body(entityResponse);
        }
    }



}
