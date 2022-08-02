import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Skills from "../Components/Skills";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <Skills />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
