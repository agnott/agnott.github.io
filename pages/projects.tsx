import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { Colors, Fonts, Shadows, Spacing } from '../design-system';

const DisclaimerContainer = styled.div`
  margin: ${Spacing.medium}px;
  padding: ${Spacing.small}px;
  background-color: ${Colors.solids.raisinBlack};
  color: ${Colors.solids.oldLace};
`;

const DisclaimerTitle = styled.div`
  ${Fonts.bold[500]}
  color: ${Colors.solids.oldLace};
`;

const DisclaimerText = styled.div`
  ${Fonts.regular[300]}
  margin-top: ${Spacing.xxSmall}px;
  margin-left: ${Spacing.xSmall}px;
  color: ${Colors.solids.oldLace};
`;

const ProjectContainer = styled.div`
  padding: ${Spacing.medium}px;
  padding-top: 0px;
`;

const ProjectName = styled.div`
  ${Fonts.bold[700]};
  color: ${Colors.solids.raisinBlack};
`;

const ProjectDescription = styled.div`
  ${Fonts.regular[300]};
  color: ${Colors.solids.raisinBlack};
  margin-top: ${Spacing.xxSmall}px;
  margin-left: ${Spacing.xSmall}px;
`;

const Resume: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Andrew Gnott: Projects</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <DisclaimerContainer>
        <DisclaimerTitle>Disclaimer</DisclaimerTitle>
        <DisclaimerText>
          I have yet to truly finish a personal project, so this is just a list of things I&apos;ve
          spent time on and have made significant progress &ndash; newest to oldest. I get a little
          bit closer every time. If one of them interests you, feel free to reach out and we can
          chat!
        </DisclaimerText>
      </DisclaimerContainer>
      <ProjectContainer>
        <ProjectName>Achiever</ProjectName>
        <ProjectDescription>
          An app where users can create missions and accomplish them while sharing their experience
          with a community of users working toward the same goals. Leverages GraphQL + Apollo for a
          next-level user experience.
        </ProjectDescription>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectName>Moody</ProjectName>
        <ProjectDescription>
          An app where users&apos; emotions are the social currency. Turn the negative vibes
          positive via various in-app exercises. Leverages AWS Comprehend for sentiment and subject
          analysis.
        </ProjectDescription>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectName>Copynator</ProjectName>
        <ProjectDescription>
          An app to empower non-engineers to handle copy and translations for their apps. Leverages
          AWS S3 + Cloudfront + API Gateway to deliver the proper content to the end-user and a UI
          for configuration.
        </ProjectDescription>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectName>Angle</ProjectName>
        <ProjectDescription>
          A community-driven, sports-writing app. Allows writers to create interactive stories via
          markdown with various widgets. Allows users to support writers via microdonations powered
          by Stripe and in-app currency.
        </ProjectDescription>
      </ProjectContainer>
    </React.Fragment>
  );
};

export default Resume;