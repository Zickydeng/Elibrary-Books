import React from "react";
import styled from "@emotion/styled";
import ErrorText from "./errorText";
import "./bookSearchForm.css"


const Input = styled.input`
  outline: 0;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
  @media (max-width: 778px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: #2185d0;
  color: #ffffff;
  text-shadow: none;
  background-image: none;
  padding: 0.6rem 1.5rem;
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;
  @media (max-width: 778px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

// const className = styled.filters`
//   margin: 0;
//   flex: 1 0 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   height: 13rem;
//   text-shadow: none;
//   background-image: none;
//   padding: 1.5rem 0.2rem;
//   margin-left: 250px;
//   border-radius: 3px;
//   cursor: pointer;`;

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error
}) => {
  return (
    <>

    <form onSubmit={onSubmitHandler}>
      <Input
        type="search"
        placeholder="Search by the title"
        value={searchTerm}
        onChange={onInputChange}
        required
      />
      <Button type="submit">Find Books</Button>
      {error && (
        <ErrorText>Some error occurred, while fetching books API</ErrorText>
      )}
    </form>

     <form className="filters">
          <label name="author">Author</label>
          <select name="author" onChange=" " value=" ">
              <option value='All'>All</option>
          </select>

          <label name="tags">Tags</label>
          <select name="tags"  value="">
              <option value='All'>All</option>
        
          </select>

          <label name="year">Year Published</label>
          <select name="year"  value= "">
              <option value='All'>All</option>
    
          </select>

          <button type="button" className="btn btn-clear">Clear Filters</button>
      </form>

      

    </>
  );
 }

export default BookSearchForm;
