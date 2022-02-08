package com.emtechhouse.co.ke.Branches.Responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EntityResponse<T> {
    private T entity;
    private String message;
    private Integer statusCode;

}
