import styled from 'styled-components';

export const Main = styled.div`
.all {
display: flex;
justify-content: center;
 .slider {
    background-color: none;
    img {
        width: 100%;
        filter: brightness(45%);
    } 
   .awssld__content { 
       display: flex;
       align-items: flex-start !important;
       background: none;
    }
    .awssld__bullets {
        display: none;
    }
 }
}
.productsDiv {
 display: flex;
 justify-content: space-between;
 margin-left: 10px;
 padding: 10px;
.products-title {
  font-family: 'Montserrat';
 }
 span {
    align-self: center;
    font-family: 'Montserrat';
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
 }
}
.last-div {
background: #000;
width: 100%;
display: flex;
justify-content: center;
  h1 { 
    color: #fff;
    font-family: 'Montserrat';
    font-size: 24px;
    letter-spacing: 3px;
    font-weight: 500;
    margin: 20px;
    @media screen and (max-width: 848px) {
      font-size: 19px
    }
  }
}
.videoDiv {
  filter: brightness(25%);
}
.centerDiv {
  img {
    height: 320px;
    @media screen and (max-width: 900px) {
      height: 250px; 
    }
    @media screen and (max-width: 700px) {
      height: 200px; 
    }
    @media screen and (max-width: 650px) {
      height: 150px;
    }
  }
    h1 {
      color: #fff;
      letter-spacing: 15px;
      font-family: 'Nanum Brush Script', cursive;
    }
}
`;

export const Tab = styled.div`
display: flex;
align-items: center;
position: absolute;
z-index: 100;
margin-top: 10px;
background: #fff;
width: 95%;
height: 50px;
border-radius: 3px;
h1 {
    font-weight: 400;
    color: #000;
    font-family: 'Montserrat';
    font-size: 24px;
    letter-spacing: 3px;
    font-weight: 500;
    margin: 20px;
}
`;

export const GamesTab = styled.div`
display: flex;
`;

export const GamesBar = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: flex-start;
`;

export const DivTable = styled.div`
.ColumnPrices {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
      display: flex;  
      justify-content: space-between;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.6;
      letter-spacing: 0.0075em;
      margin: 5px;
      transition: all 0.3s;
      :hover {
          background: rgb(30,30,30);
          transition: all 0.3s;
          border-radius: 2.2px;
          padding: 5px;
          color: #fff;
      }
    }
}
.fillButton {
    padding: 5px;
    background: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    border: 1px solid #00A86B;
    border-radius: 3px;
    width: 90px;
    letter-spacing: 0.0075em;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
        background: #00A86B;
        color: #fff;
        transition: all 0.3s;
    }
}
.fa-check {
    color:  #00A86B;
}
.fillBoxBtn {
  display: flex;
  justify-content: center;
}
.canvasClearBtn{
    padding: 10px;
    border: none;
    color: #fff;
    background: #E50914;
    margin: 5px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  }
`;

export const GameBox = styled.div`
  display: flex;
  margin: 5px;
  width: 430px;
  height: 250px;
 
  @media screen and (max-width: 1340px) {
   width: 290px;   
   height: 200px;
  }
  @media screen and (max-width: 1300px) {
   width: 360px;   
   height: 200px;
  }
  @media screen and (max-width: 1125px) {
   width: 300px;   
   height: 200px;
  }
  @media screen and (max-width: 950px) {
   width: 270px;   
   height: 200px;
  }
  @media screen and (max-width: 860px) {
   width: 95%;   
   height: 200px;
  }
  img {
      object-fit: cover;
      filter: brightness(55%); 
      cursor: pointer;   
      transition: all 0.5s;   
      :hover {
       filter: brightness(15%);
       transition: all 0.5s;  
      }
  }
`;

export const AbsoluteDescription = styled.div`
   display: flex;
   position: absolute;
   align-self: flex-end;
   span {
    color: #fff;
    font-size: 18px;    
    font-weight: 400;
    margin: 7px;
    font-family: Open Sans,sans-serif;
   }
`;
