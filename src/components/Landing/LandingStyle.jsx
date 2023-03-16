import styled from 'styled-components';
import background from "../../assets/background.jpg";
import innerBackground from "../../assets/innerBackground.jpg";

export const AppModalOverlay = styled.div`
    /* position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(3, 39, 3, 0.555)), url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    overflow-y: auto;
    font-family: 'Righteous', cursive; */
    background-image: url(${innerBackground});
    background-position: right bottom;
    transition: all 0.5s ease-out;
    color: #000000;
    padding: 25px 16px;
    /* font-family: 'Righteous', cursive; */



.modal-container{
    /* background-image: url(${innerBackground}); */
    /* background-position: right bottom;
    transition: all 0.5s ease-out;
    color: #000000;
    padding: 25px 16px;
    width: 100%;
    max-width: 390px;
    height: auto; */
    /* border-radius: 0.8rem; */
    /* border: 1px solid #ffffff; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
} 

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

.poketan-search{
  align-items: center;
  justify-content: center;
  display: flex;

}

.modal-container input {
  width: 50%;
  height: 3rem;
  border-radius: 0 0 0 8px;
  border: 1px solid #aeb1b3;
  padding-bottom: 2px;
  padding-left: 0.5rem;
  font-weight: 900;
  font-size: 1.2rem;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;

}

.modal-container input::placeholder {
  color: #bdc2ca;
}

.modal-container input:focus {
  outline: none;
}

.head-section button {
  width: 5rem;
  height: 3rem;
  border-radius: 0 6px 0 0;
  border: 1px solid #222222;
  border-right: none;
  background-color: #222222;
  color: #ffffff;
  font-weight: 900;
  /* padding-top: 4px; */
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  font-size: 1.2rem;
}

.head-section button:hover {
  background-position: left bottom;
  cursor: pointer;
  opacity: 0.9;
  translate: 5s;
  color: #ffe5b4;
  background-color: #000000;
  border: 1px solid #000000;
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

    /* MEDIA QUERY */
/* @media (max-width: 960px) {
  .modal-container input {
    width: 22vw;
  }
  .modal-container input::placeholder {
    padding-left: 10px;
    font-size: 12px;
  }

  .modal-container button {
    width: 6vw;
  }
} */

@media (max-width: 768px) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(3, 39, 3, 0.555)), url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    overflow-y: auto;
    font-family: 'Righteous', cursive;

.modal-container{
    background-image: url(${innerBackground});
    background-position: right bottom;
    transition: all 0.5s ease-out;
    color: #000000;
    padding: 25px 16px;
    width: 100%;
    max-width: 690px;
    height: auto;
    border-radius: 0.8rem;
    border: 1px solid #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} 

.modal-container input {
  width: 50%;
  height: 2.5rem;
  font-size: 0.9rem;
}

.modal-container button {
  width: 5rem;
  height: 2.5rem;
  font-size: 0.9rem;
}


}

@media (max-width: 425px) {
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

}

@media (max-width: 320px) {
  .modal-container{
    padding: 25px 7px;
    max-width: 690px;
} 

.modal-container input {
  width: 70%;
  height: 2.2rem;
  /* border-radius: 0 0 0 8px; */
  /* border: 1px solid #aeb1b3; */
  /* padding-bottom: 2px; */
  /* padding-left: 0.5rem; */
  font-weight: 500;
}

.modal-container button {
  width: 4.5rem;
  height: 2.2rem;
  /* border-radius: 0 6px 0 0;
  border: 1px solid #222222;
  border-right: none; */
  /* font-weight: 900; */
}

  .modal-container button.hidden {
    display: block;
  }
}

`