import styled from 'styled-components';
import innerBackground from "../../assets/innerBackground.jpg";

export const HomePageWrap = styled.div`
    background-image: url(${innerBackground});
    background-position: right bottom;
    transition: all 0.5s ease-out;
    color: #000000;
    padding: 25px 16px;
    background-repeat: no-repeat;
    background-size: cover;

.app-header{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
}

.app-header img.app-logo{
  width: 100%;
  height: auto;
  max-width: 50px;
  border-radius: 3rem;
}

.app-header img.app-name{
  width: 100%;
  height: auto;
  max-width: 105px;

}


    .copyright{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1%;
        padding: 2rem 4rem 0 4rem;
    }

    .copyright:hover{
        opacity: 0.9;
        cursor: pointer;
    }

    .copyright p{
        font-size: 0.85rem;
        margin-top: -0.1rem;
        color: #f0daed;
    }

    .copyright img{
        width: 100%;
        max-width: 100px;
        height: auto;
    }


/* @media (max-width: 425px) {
  .modal-container{
    padding: 25px 3px;
    max-width: 690px;
    border-radius: 0.5rem;
} 

.modal-container input {
  width: 70%;
  height: 2.2rem;
  font-weight: 600;
  font-size: 0.8rem;
}

.modal-container button {
  width: 4.5rem;
  height: 2.2rem;
  font-weight: 600;
  font-size: 0.8rem;
}

} */

/* @media (max-width: 320px) {
  .modal-container{
    padding: 25px 7px;
    max-width: 690px;
} 

.modal-container input {
  width: 70%;
  height: 2.2rem;
  font-weight: 500;
}

.modal-container button {
  width: 4.5rem;
  height: 2.2rem;
}

  .modal-container button.hidden {
    display: block;
  }
} */

`