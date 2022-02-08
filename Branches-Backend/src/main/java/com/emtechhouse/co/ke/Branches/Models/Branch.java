package com.emtechhouse.co.ke.Branches.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long sn;
    @Column(length = 6, nullable = false, unique = true)
    @JsonProperty
    private String solCode;
    @Column(length = 200, nullable = false, unique = false)
    private String branchDescription;
    @Column(length = 100, nullable = false, unique = false)
    private  String location;
    @Column(length = 100, nullable = false,unique = false)
    private String email;
    @Column(length = 13, nullable = false, unique = false)
    private String phoneNumber;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date postedTime;
    @Column(length = 100, nullable = false, unique = false)
    private String postedBy;
    @Column(nullable = false)
    private Character postedFlag;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date verifiedTime;
    @Column(length = 100, nullable = false, unique = false)
    private String verifiedBy;
    @Column(nullable = false)
    private Character verifiedFlag;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date deletedTime;
    @Column(length = 100, nullable = false, unique = false)
    private String deletedBy;
    @Column(nullable = false)
    private Character deletedFlag;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date modifiedTime;
    @Column(length = 100,nullable = false, unique = false)
    private String modifiedBy;

    public long getSn() {
        return sn;
    }

    public void setSn(long sn) {
        this.sn = sn;
    }

    public String getSolCode() {
        return solCode;
    }

    public void setSolCode(String solCode) {
        this.solCode = solCode;
    }

    public String getBranchDescription() {
        return branchDescription;
    }

    public void setBranchDescription(String branchDescription) {
        this.branchDescription = branchDescription;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getPostedTime() {
        return postedTime;
    }

    public void setPostedTime(Date postedTime) {
        this.postedTime = postedTime;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(String postedBy) {
        this.postedBy = postedBy;
    }

    public Character getPostedFlag() {
        return postedFlag;
    }

    public void setPostedFlag(Character postedFlag) {
        this.postedFlag = postedFlag;
    }

    public Date getVerifiedTime() {
        return verifiedTime;
    }

    public void setVerifiedTime(Date verifiedTime) {
        this.verifiedTime = verifiedTime;
    }

    public String getVerifiedBy() {
        return verifiedBy;
    }

    public void setVerifiedBy(String verifiedBy) {
        this.verifiedBy = verifiedBy;
    }

    public Character getVerifiedFlag() {
        return verifiedFlag;
    }

    public void setVerifiedFlag(Character verifiedFlag) {
        this.verifiedFlag = verifiedFlag;
    }

    public Date getDeletedTime() {
        return deletedTime;
    }

    public void setDeletedTime(Date deletedTime) {
        this.deletedTime = deletedTime;
    }

    public String getDeletedBy() {
        return deletedBy;
    }

    public void setDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
    }

    public Character getDeletedFlag() {
        return deletedFlag;
    }

    public void setDeletedFlag(Character deletedFlag) {
        this.deletedFlag = deletedFlag;
    }

    public Date getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(Date modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }
}
