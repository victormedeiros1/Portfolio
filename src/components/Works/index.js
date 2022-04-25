import React, { useState } from "react";

import {
  WorksStyles,
  ProjectsList,
  Projects,
  Thumbnail,
  CardTitle,
  Card,
  CardParagraph,
  CardBody,
  Borders,
  CardFooter,
  Company,
} from "./styles";

import i18next from "../../translates/i18next";

import HeaderSection from "../HeaderSection";
import ButtonModernSmall from "../Buttons/ButtonModernSmall";
import Container from "../Container";

function Works() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 0,
      thumbnail: "/images/thumbnails/netflix.png",
      title: "Netflix Tudum",
      company: "Hox.rs - 2021",
      link: "https://www.tudumnetflix.com.br/",

      texts: [
        {
          id: 0,
          paragraph: i18next.t("works.netflix.paragraph1"),
        },
        {
          id: 1,
          paragraph: i18next.t("works.netflix.paragraph2"),
        },
        {
          id: 2,
          paragraph: i18next.t("works.netflix.paragraph3"),
        },
        {
          id: 3,
          paragraph: i18next.t("works.netflix.paragraph4"),
        },
        {
          id: 4,
          paragraph: i18next.t("works.netflix.paragraph5"),
        },
      ],
    },
    {
      id: 1,
      thumbnail: "/images/thumbnails/spotify.png",
      title: "Spotify Top Podcasters",
      company: "Hox.rs - 2021",
      link: "https://spotifytoppodcasters.byspotify.com/",

      texts: [
        {
          id: 0,
          paragraph: i18next.t("works.spotify.paragraph1"),
        },
        {
          id: 1,
          paragraph: i18next.t("works.spotify.paragraph2"),
        },
        {
          id: 2,
          paragraph: i18next.t("works.spotify.paragraph3"),
        },
        {
          id: 3,
          paragraph: i18next.t("works.spotify.paragraph4"),
        },
        {
          id: 4,
          paragraph: i18next.t("works.spotify.paragraph5"),
        },
      ],
    },
    {
      id: 2,
      thumbnail: "/images/thumbnails/omega.png",
      title: "Omega",
      company: "Hox.rs - 2021",
      link: "https://movimentoluzlivre.com.br/",

      texts: [
        {
          id: 0,
          paragraph: i18next.t("works.omega.paragraph1"),
        },
        {
          id: 1,
          paragraph: i18next.t("works.omega.paragraph2"),
        },
        {
          id: 2,
          paragraph: i18next.t("works.omega.paragraph3"),
        },
      ],
    },
  ];

  const handleCard = (event) => {
    setCurrentProject(event.target.parentNode.getAttribute("data-project"));
  };

  return (
    <WorksStyles id="works" className="works">
      <HeaderSection className="works-title" title={i18next.t("works.title")} />
      <Projects>
        <ProjectsList id="projects-list">
          {projects.map(({ id, thumbnail }) => (
            <div data-project={id} onClick={handleCard} key={id}>
              <Thumbnail className="thumbnail" src={thumbnail} />
            </div>
          ))}
        </ProjectsList>
        <Card>
          <Borders>
            <img
              alt="border"
              className="border-top"
              src="/images/border-top.svg"
            />
            <img
              alt="border"
              className="border-bottom"
              src="/images/border-bottom.svg"
            />
          </Borders>
          <CardTitle>{projects[currentProject].title.toUpperCase()}</CardTitle>
          <CardBody>
            {projects[currentProject].texts.map((text) => (
              <CardParagraph key={text.id}>{text.paragraph}</CardParagraph>
            ))}
            <CardFooter>
              <ButtonModernSmall
                text={i18next.t("works.card.visit")}
                link={projects[currentProject].link}
                target="_blank"
              />
              <Company>{projects[currentProject].company}</Company>
            </CardFooter>
          </CardBody>
        </Card>
      </Projects>
    </WorksStyles>
  );
}

export default Works;
