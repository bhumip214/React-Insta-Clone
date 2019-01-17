import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 200px 15px;
  font-size: 25px;
  align-items: center;
  border-bottom: 1px solid rgb(187, 186, 186);
`;

const LogoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderH1 = styled.h1`
  font-size: 40px;
  font-family: "Cookie", cursive;
  font-weight: 350;
  margin: 10px;
  margin-left: 15px;
`;

const SearchInput = styled.input`
  width: 220px;
  font-size: 16px;
  text-align: center;
  padding: 2px;
  font-family: "FontAwesome", "Calibri";
`;

const HeaderIcons = styled.div`
  display: flex;
  font-size: 20px;
  width: 120px;
  justify-content: space-between;
  color: grey;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <i className="insta-logo fab fa-instagram" />
        <hr />
        <HeaderH1>Instagram</HeaderH1>
      </LogoHeader>
      <div>
        <SearchInput
          onChange={props.handleSearchInput}
          type="text"
          value={props.searchInputValue}
          placeholder="&#xf002; Search"
        />
      </div>
      <HeaderIcons>
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user" />
        </div>
      </HeaderIcons>
    </Header>
  );
};

export default SearchBar;
