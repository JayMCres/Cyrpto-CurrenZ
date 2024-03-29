import React from "react";

const Search = props => {
  // console.log("Props in search", props)
  return (
    <div
      className="ui huge fluid icon input"
      style={{ "border-style": "double", "border-color": "#6666ff" }}
    >
      <input
        onChange={props.handleChange}
        type="text"
        placeholder={"Search your Cryptos"}
        value={props.inputValue}
      />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;
