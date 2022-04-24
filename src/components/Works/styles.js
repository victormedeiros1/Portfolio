import styled from "styled-components";

export const WorksStyles = styled.section`
  margin-top: 0;

  .works {
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectsList = styled.div`
  width: 500px;
  overflow: hidden;
  padding: 100px 0;
`;

export const Thumbnail = styled.img`
  transform: rotate(20deg) translateX(-150px) translateY(50px);

  &:hover {
    transform: rotate(20deg) translateX(-200px) translateY(50px);
  }
`;

export const Card = styled.div`
  position: relative;
  flex: 1;
  padding: 32px;
  margin: 140px 0 0 48px;
  height: fit-content;
`;

export const CardTitle = styled.h3`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 8px;
`;

export const CardBody = styled.div``;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const CardParagraph = styled.p`
  font-size: 14px;
  line-height: 18px;

  margin-bottom: 12px;
`;

export const Company = styled.p``;

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
