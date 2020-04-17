import styled from 'styled-components';

export const Main = styled.div`
.hvr-fade {
  cursor: pointer;
  padding: 10px;
  width: 200px;
  color: #fff;
  border: 1px solid #fff;
  outline: none;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {
  background-color: #fff;
  color: #000;
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
 `;

export const Header = styled.div`
justify-content: center;
display: flex;
 video {
  filter: brightness(45%);
     min-height: 100vh;
     background-size: cover;
     object-fit: cover;
 }
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 95%;
  margin-top: 10px;
  border-radius: 3px;
  z-index: 1;
  background: #fff;
  h1 {
    color: #000;
    font-family: 'Montserrat';
    font-size: 24px;
    letter-spacing: 3px;
    font-weight: 500;
    margin: 20px;
    @media screen and (max-width: 848px) {
      font-size: 19px
    }
  }
  div {
   display: flex;
   align-items: center;
   margin-right: 20px;
    i{
      color: #000;
      cursor: pointer;
       margin: 8px;
      @media screen and (max-width: 848px) {
      font-size: 28px;
  }
    }
  }
`;

export const SecondTab = styled.div`
 display: flex;
 justify-content: center;
 align-self: center;
 align-content: center;
 width: 100%;
 z-index: 1;
 position: absolute;
 text-align: center;
 a {
   text-decoration: none;
   color: #fff;
   font-family: 'Montserrat';
   font-size: 13px;
   letter-spacing: 3px;
   font-weight: 300;
   padding: 10px;
   @media screen and (max-width: 848px) {
     font-size: 13px;
   }
 }
`;

export const SecondHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.subtitles {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 848px) {
    flex-direction: column;
  }
}
.phrase {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 30px;
  @media screen and (max-width: 848px){
    margin: 15px;
  }
}
h2 {
  align-self: center;
  font-family: 'Montserrat';
  font-size: 21px;
  letter-spacing: 1px;
  margin-top: 10px;
  margin: 5px;
}
span {
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    letter-spacing: .01em;
    text-transform: none;
    line-height: 1.5em;
    flex-wrap: wrap;
    max-width: 380px;
    text-align: center;
    align-self: center;
    @media screen and (max-width: 848px) {
     max-width: 400px;
    }
  } 
`;

export const ImgBox = styled.img`
 height: 240px;
 width: 90%;
 object-fit: cover;
 border-radius: 5px;
 @media screen and (max-width: 848px){
   height: 230px;
   width: 90%;
 }
`;

export const GamesBar = styled.div`
display: flex;
flex-direction: column;
h1 {
  align-self: center;
  font-family: 'Arial';
  font-weight: 400;
  margin-bottom: 40px;
  margin-top: 40px;
  font-size: 21px;
  @media screen and (max-width: 848px) {
    font-weight: 100;
    font-size: 18px;
  }
}
`;

export const GamesTab = styled.div`
display: flex;
justify-content: space-around;
 img {
   width: 390px;
   height: auto;
   margin: 5px;
  }
   @media screen and (max-width: 720px){
     flex-direction: column;
   }
 `;

export const Games = styled.div`
display: flex;
justify-content: center;
margin: 5px;

.png {
  width: 300px;
}
:hover{
  cursor: pointer;
 & .absoluteImg {
  transform: translate3d(0, -60% ,0);
  transition: 0.7s ease;
  transition-property: transform;
 }
 & .img {
   filter: brightness(15%);
   transition: all 0.5s ;
 }
}
.img{
    filter: brightness(60%);
}
.absoluteImg {
  display: flex;
  align-self: center;
  position: absolute;
  justify-content: flex-end;
  flex-direction: column;
  transition: all .6s ease;
  img {
     height: 80px;
     @media screen and (max-width: 840px){
     height: 60px;
   }
  }
}
`;
