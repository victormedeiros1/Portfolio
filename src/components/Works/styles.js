import styled from "styled-components";

export const WorksStyles = styled.section`
  margin-top: 0;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectsList = styled.div`
  width: 25%;
  overflow: hidden;
  padding: 20px 0;

  @media (min-width: 600px) {
    width: 40%;
    padding: 55px 0;
  }
  @media (min-width: 800px) {
    padding: 120px 0;
  }
`;

export const Thumbnail = styled.img`
  margin-top: -5px;
  width: 200%;
  transform: rotate(20deg) translateX(-15%) translateY(50px);

  @media (min-width: 800px) {
    transform: rotate(20deg) translateX(-150px) translateY(50px);
    width: initial;
  }
`;

export const Card = styled.div`
  width: 65%;
  position: relative;
  margin: 64px 0 0 8px;
  padding: 16px;
  height: fit-content;

  @media (min-width: 600px) {
    width: 60%;
    margin: 100px 0 0 48px;
    padding: 32px;
  }

  @media (min-width: 800px) {
    width: 60%;
    margin: 185px 0 0 48px;
    padding: 32px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 8px;

  @media (min-width: 800px) {
    font-size: 36px;
  }
`;

export const Borders = styled.div`
  img {
    position: absolute;
    width: 50%;
  }
  .border-top {
    top: 0;
    left: 0;
  }
  .border-bottom {
    bottom: 0;
    right: 0;
  }
`;

export const CardBody = styled.div``;

export const CardParagraph = styled.p`
  font-size: 12px;
  margin-bottom: 8px;

  @media (min-width: 800px) {
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 18px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Company = styled.p`
  font-size: 14px;
  line-height: 18px;
`;
