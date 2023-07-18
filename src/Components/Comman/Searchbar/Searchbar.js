import React from "react";
import "./searchbarStyles.scss";
import { Input } from "reactstrap";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <>
      <div className="form-group has-search">
        <span className="form-control-feedback">
          <BsSearch />
        </span>
        <Input
          className="rounded-pill form-control"
          type="search"
          placeholder="Enter batch number"
        />
      </div>
    </>
  );
};

export default Searchbar;
