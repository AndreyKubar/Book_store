import styled from "styled-components";
import { STYLE_VARIABLES } from "../../constants/styleConstants";
export const Userpage = styled.div`
  .userpage__header {
    margin: 0 0 15px 0;
  }
  .title {
    font-size: 40px;
    margin: 0 0 30px;
  }
  .userpage__user {
    display: flex;
    align-items: center;
    margin: 0 0 40px 0;
  }
  .userpage__user-image {
    max-width: 120px;
    max-height: 120px;
    border-radius: 100%;
    margin: 0 15px 0 0;
  }
  .profile-img {
    width: 100px;
    height: 100px;
    display: block;
    margin: auto auto;
  }
  .userpage__user-name {
    font-size: ${STYLE_VARIABLES.PROFILE_FILTER_TEXT_FONT_SIZE};
    font-weight: 600;
    margin: 0 0 5px;
  }
  .userpage__user-contacts {
    font-size: ${STYLE_VARIABLES.TEXT_FONT_SIZE};
    color: #a0a0a0;
    display: flex;
    .user-contacts__phone {
      margin: 0;
    }
    .user-contacts__email {
      margin: 0 0 0 15px;
    }
  }
  .userpage__filters {
    display: flex;
    padding: 0;
  }
  .filter {
    margin: 0 30px 5px 0;
    font-size: ${STYLE_VARIABLES.PROFILE_FILTER_TEXT_FONT_SIZE};
    .link:hover {
      color: #46c3d2;
    }
  }
`;

export const Profile = styled.div`
  .profile__changer {
    display: flex;
    justify-content: space-between;
  }
  .profile__contacts {
    display: flex;
    flex-direction: column;
  }
  .contacts__item {
    max-width: 300px;
    width: 100%;
    margin: 5px 0;
  }
  .title {
    font-size: ${STYLE_VARIABLES.TEXT_TITLE_FONT_SIZE};
    margin: 0 0 20px 0;
    text-align: center;
  }
  .profile__title {
  }
  .profile__password-changer {
    display: flex;
    flex-direction: column;
  }
  .password-changer__item {
    margin: 5px 0;
  }
  .image-changer__image {
    max-width: 120px;
    max-height: 120px;
    border-radius: 100%;
    display: block;
    margin: 10px auto;
  }
  .changing-img {
    width: 100px;
    height: 100px;
    display: block;
    margin: auto auto;
  }
`;