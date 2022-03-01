import styled from "styled-components";

export const HeaderS = styled.header`
  box-sizing: border-box;
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header__menu {
    display: flex;
  }
  .header__icons {
    margin-right: 20px;
    &:last-child {
      margin: 0;
    }
  }
`;

export const HeaderLogo = styled.div`
  box-sizing: border-box;
  margin-right: 10px;
  .header__text {
    font-family: "Rowdies", sans-serif;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    margin: auto 0;
  }
`;

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;