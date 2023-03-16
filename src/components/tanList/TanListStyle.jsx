import styled from "styled-components";

export const TanListWrap = styled.div`
    margin: 4rem 6rem;
    /* padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        padding-bottom: 1rem; */

    .tan-card{
        /* background-color: #c5c5c5; */
        text-align: center;
        border-radius: 0.5rem;
        border: 1px solid #a8a6a6;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        padding-bottom: 1.5rem;
        color: #10062c;
        font-size: 1rem;
        font-weight: 900;
        line-height: 1.4rem;
        margin-bottom: 4rem;
        
    }

    .tan-image{
        background-color: #a8a6a6;
        /* border: 1px solid #a8a6a6; */
        border-radius: 0.5rem 0.5rem 0 0;  
        margin-bottom: 1rem;
        
    }

    .tan-image img{
         height: auto;
         width: 100%;
         max-width: 215px;
    }

    .card-button{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3%;
        /* padding: 0 27rem; */
        margin-top: 0.6rem;

    }

    .card-button button.button-1{
        background-color: #83d744;
        border: 1px solid #83d744;
        background-position: right bottom;
        transition: all 0.5s ease-in-out;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.9rem;
        padding: 0.3rem 0.8rem;
        margin-left: 1rem;
        border-radius: 0.3rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        
        
    }

    .card-button button.button-1:hover{
        background-color: #1e330e;
        border: 1px solid #1e330e;
        cursor: pointer;
        background-position: left bottom;
    }


    .card-button button.button-2{
        background-color: #c663cb;
        border: 1px solid #c663cb;
        background-position: right bottom;
        transition: all 0.5s ease-in-out;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.9rem;
        padding: 0.3rem 0.8rem;
        margin-right: 1rem;
        border-radius: 0.3rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        
        
    }

    .card-button button.button-2:hover{
        background-color: #3c0d3f;
        border: 1px solid #3c0d3f;
        cursor: pointer;
        background-position: left bottom;
    }

    @media (max-width: 768px) {
        margin: 3rem 2rem;

        .tan-image img{
         height: auto;
         width: 100%;
         max-width: 215px;
        }
        
    }

    @media (max-width: 425px) {
        margin: 2.5rem 1rem;

        .tan-image img{
         height: auto;
         width: 100%;
         max-width: 215px;
        }
    }

    @media (max-width: 320px) {
    }
    
`