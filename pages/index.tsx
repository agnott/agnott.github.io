import React from 'react';
import Head from 'next/head';
import { orderBy } from 'lodash';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { Colors, Fonts, Spacing } from '../design-system';

const SKILLS = orderBy(
  [
    { name: 'React', rating: 9 },
    { name: 'React Native', rating: 9 },
    { name: 'MongoDB', rating: 9 },
    { name: 'Redis', rating: 8 },
    { name: 'Typescript', rating: 9 },
    { name: 'Node.js', rating: 9 },
    { name: 'CSS', rating: 9 },
    { name: 'AWS', rating: 8 },
    { name: 'AngularJS', rating: 7 },
    { name: 'GraphQL', rating: 7 },
    { name: 'Postgres', rating: 6 },
    { name: 'Terraform', rating: 3 },
    { name: 'Docker', rating: 7 },
    { name: 'Kafka', rating: 3 },
    { name: 'Elasticsearch', rating: 7 },
    { name: 'Datadog', rating: 8 },
    { name: 'Objective-C', rating: 2 },
    { name: 'Java', rating: 2 },
    { name: 'Python', rating: 7 },
    { name: 'Ruby on Rails', rating: 5 },
  ],
  ['rating'],
  ['desc']
);

const Resume: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Andrew Gnott: Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EntryContainer>
        <SectionName>Overview</SectionName>
        <Overview>
          Hard-working, problem-solving software engineer with multiple years of web client, app
          client, and server experience. A bias for action and eagerness to learn lead to
          promptly-delivered features that make a difference for users. Thrives in fast-paced
          environments with abstract requirements. A natural leader always looking to collaborate
          and build the best products possible.
        </Overview>
        <Separator />
      </EntryContainer>

      <EntryContainer>
        <SectionName>Skills</SectionName>
        <SkillsContainer>
          {SKILLS.map(({ name, rating }) => (
            <SkillContainer key={name}>
              <SkillName>{name}</SkillName>
              <SkillBar rating={rating} />
            </SkillContainer>
          ))}
          {Array((SKILLS.length % 6) + 1)
            .fill(0)
            .map((v, i) => (
              <SkillContainer key={i} />
            ))}
        </SkillsContainer>
        <Separator />
      </EntryContainer>
      <EntryContainer>
        <CompanyName>Cameo</CompanyName>
        <PositionContainer>
          <PositionName>Technical Lead</PositionName>
          <PositionDates>Apr 2021 - Present</PositionDates>
        </PositionContainer>
        <PositionDetails>
          <PositionDetail>
            Managed the Fan Clubs team consisting of up to seven engineers with two squads and
            multiple concurrent workstreams. Worked with product, design, data, and engineers to
            identify requirements, plan, and execute. Led career conversations and promoted several
            engineers.
          </PositionDetail>
          <PositionDetail>
            Aided and supervised multiple large projects including: an event-driven push
            notification refactor and vendor migration leveraging Kafka, a major overhaul for the
            React Native Fan Clubs UI, and a zero-downtime migration of millions of records to new
            MongoDB and Redis clusters for core stability and performance.
          </PositionDetail>
          <PositionDetail>
            Collaborated with members of the Mobile team and Apple to implement Cameo&apos;s
            SharePlay integration, which appeared in an Apple Event and{' '}
            <a href="https://www.apple.com/newsroom/2021/11/shareplay-powers-new-ways-to-stay-connected-and-share-experiences-in-facetime/">
              official publication
            </a>
            .
          </PositionDetail>
          <PositionDetail>
            Worked with other technical leads to identify areas of improvement and general strategic
            direction.
          </PositionDetail>
          <PositionDetail>
            Interviewed to hire engineers for our Mobile and DevOps teams.
          </PositionDetail>
        </PositionDetails>
        <PositionContainer>
          <PositionName>Software Engineer II</PositionName>
          <PositionDates>Nov 2018 - Apr 2021</PositionDates>
        </PositionContainer>
        <PositionDetails>
          <PositionDetail>
            Served as the initial lead for the Messaging team. Collaborated and supervised a team of
            up to four engineers. Architected and implemented the initial messaging feature, which
            has evolved to support Fan Clubs &ndash; controlled, feature-rich group chats of 50,000+
            users.
          </PositionDetail>
          <PositionDetail>
            Served as the initial lead for the Growth team. Collaborated and supervised a team of up
            to three engineers. Architected and implemented multiple high-impact experiments,
            third-party modules for deeplinking and experimentation, and a promotion framework
            allowing the marketing team to provide discounts across arbitrary talent audiences.
          </PositionDetail>
          <PositionDetail>
            Founding member of the App Platform Guild &ndash; a small group of engineers focused on
            iOS and Android app stability and performance. Implemented an app logging and monitoring
            service and migrated from Expo&apos;s ExpoKit to Expo&apos;s Bare Workflow. Increased
            crash-free session percentage to 99.9%. Decreased median app startup time by 30%.
          </PositionDetail>
          <PositionDetail>
            Founding member of the App Platform Guild &ndash; a small group of engineers focused on
            the stability and performance of the React Native app on iOS and Android. Implemented an
            app logging and monitoring service and migrated from Expo&apos;s ExpoKit to Expo&apos;s
            Bare Workflow. Increased crash-free session percentage beyond 99.9%, and decreased
            median app startup time by 30%.
          </PositionDetail>
          <PositionDetail>
            Led and implemented several large projects across the engineering team including: a
            refactor of our Node API endpoints to follow ExpressJS routing best practices, a
            refactor of our Cameo Calls API to follow a largely-event driven architecture on SQS
            with built-in business metric monitoring, and updated talent onboarding, recording, and
            banking experiences.
          </PositionDetail>
          <PositionDetail>
            Served as an on-call engineer. Identified, triaged, and addressed issues as they arose.
          </PositionDetail>
          <PositionDetail>
            Created Andrew-mojis for all the Slack expressions you&apos;ll ever need!
          </PositionDetail>
        </PositionDetails>
      </EntryContainer>
      <EntryContainer>
        <CompanyName>Civis Analytics</CompanyName>
        <PositionContainer>
          <PositionName>Software Engineer II</PositionName>
          <PositionDates>Oct 2018 - Nov 2018</PositionDates>
        </PositionContainer>
        <PositionDetails>
          <PositionDetail>
            Main implementing engineer for the migration of the core Platform from AngularJS to
            React + Redux.
          </PositionDetail>
        </PositionDetails>
        <PositionContainer>
          <PositionName>Software Engineer I</PositionName>
          <PositionDates>Jul 2017 - Nov 2018</PositionDates>
        </PositionContainer>
        <PositionDetails>
          <PositionDetail>
            Main implementing engineer for the migration of the core Platform from AngularJS to
            React + Redux. Collaborated with the design team to bring a design system to the new UI.
            Implemented features to improve user experience such as: bundle splitting, lazy-loading
            pages, white-labeling, front-end services for interacting with various resources.
          </PositionDetail>
          <PositionDetail>
            Presented to the company and engineers of project progress, technical news, and
            architectural decisions and impact.
          </PositionDetail>
          <PositionDetail>
            Worked on several apps and features across sections of the stack including: a React
            Native app powered by a Python Flask and DynamoDB microservice and a git versioning
            system for resources on the Civis Platform.
          </PositionDetail>
          <PositionDetail>
            Served on the SRE rotation. Identified, triaged, and address issues as they arose.
          </PositionDetail>
          <PositionDetail>
            Interviewed potential candidates and served as a mentor for new hires.
          </PositionDetail>
        </PositionDetails>
        <PositionContainer>
          <PositionName>Software Engineer Intern</PositionName>
          <PositionDates>Jun 2016 - Aug 2016</PositionDates>
        </PositionContainer>
        <PositionDetails>
          <PositionDetail>
            Built and shipped multiple features within the core AngularJS and Ruby-on-Rails
            application.
          </PositionDetail>
          <PositionDetail>
            Presented projects and findings to others at the company and within the engineering
            team.
          </PositionDetail>
        </PositionDetails>
      </EntryContainer>
      <EntryContainer>
        <CompanyName>Moody&apos;s Analytics</CompanyName>
        <PositionContainer>
          <PositionName>Software Engineer Intern</PositionName>
          <PositionDates>Jun 2015 - Aug 2015</PositionDates>
        </PositionContainer>
        <PositionDetails>
          <PositionDetail>Migrated components of the legacy UI to AngularJS.</PositionDetail>
          <PositionDetail>
            Presented projects and findings to others at the company and within the engineering
            team.
          </PositionDetail>
        </PositionDetails>
      </EntryContainer>
      {/* <EntryContainer>
        <Separator />
        <SectionName>Interests</SectionName>
        <ListContainer>
          <ListItem>Music</ListItem>
          <ListItem>Digital art</ListItem>
          <ListItem>Sports</ListItem>
          <ListItem>Web3</ListItem>
          <ListItem>Programming</ListItem>
          <ListItem>Crosswords</ListItem>
        </ListContainer>
      </EntryContainer> */}
    </React.Fragment>
  );
};

export default Resume;

const Separator = styled.div`
  width: 20%;
  height: ${Spacing.xxxSmall}px;
  background-color: ${Colors.solids.raisinBlack};
  margin-bottom: ${Spacing.xSmall}px;
`;

const Overview = styled.div`
  ${Fonts.regular[300]}
  margin: ${Spacing.xxSmall}px 0px ${Spacing.small}px 0px;
`;

const ListContainer = styled.div`
  ${Fonts.regular[200]};
  margin: ${Spacing.xxSmall}px 0px ${Spacing.medium}px 0px;
  padding: ${Spacing.xSmall}px;
  border: ${Spacing.xxxSmall}px solid ${Colors.solids.raisinBlack};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: ${Spacing.xxxSmall}px ${Spacing.xxLarge}px;

  @media only screen and (max-width: 600px) {
    padding: ${Spacing.xxSmall}px;
  }
`;

const ListItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 100px;
  gap: ${Spacing.xxxxSmall}px;
`;

const SkillsContainer = ListContainer;

const SkillContainer = styled(ListItem)`
  min-width: 275px !important;
`;

const SkillName = styled.div`
  flex: 1;
`;

const SkillBar = styled.div<{ rating: number }>`
  position: relative;
  flex: 1;
  height: ${Spacing.xxSmall}px;
  border: 2px solid ${Colors.solids.raisinBlack};
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ rating }) => rating * 10}%;
    background-color: ${Colors.solids.raisinBlack};
  }
`;

const EntryContainer = styled.div`
  margin: ${Spacing.medium}px;
  color: ${Colors.solids.raisinBlack};

  & a {
    color: ${Colors.solids.raisinBlack};
  }

  @media only screen and (max-width: 600px) {
    margin: ${Spacing.xSmall}px;
  }
`;

const CompanyName = styled.h2`
  ${Fonts.bold[700]}
`;

const SectionName = CompanyName;

const PositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PositionName = styled.h3`
  ${Fonts.bold[400]}
  margin-left: ${Spacing.small}px;

  @media only screen and (max-width: 600px) {
    margin-left: ${Spacing.xSmall}px;
  }
`;
const PositionDates = styled.h3`
  ${Fonts.bold[300]}
  margin-left: ${Spacing.small}px;

  @media only screen and (max-width: 600px) {
    margin-left: ${Spacing.xSmall}px;
  }
`;
const PositionDetails = styled.ul`
  ${Fonts.regular[300]};
  margin: ${Spacing.xSmall}px ${Spacing.small}px;

  @media only screen and (max-width: 600px) {
    margin: ${Spacing.xxSmall}px ${Spacing.xSmall}px;
  }
`;
const PositionDetail = styled.li`
  margin: ${Spacing.xxSmall}px 0px;

  @media only screen and (max-width: 600px) {
    margin: ${Spacing.xxxSmall}px 0px;
  }
`;
