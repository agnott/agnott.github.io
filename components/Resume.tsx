import React from 'react';
import Head from 'next/head';
import { orderBy } from 'lodash';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaLink } from 'react-icons/fa';
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
    { name: 'Postgres', rating: 5 },
    { name: 'Terraform', rating: 3 },
    { name: 'Docker', rating: 7 },
    { name: 'Kafka', rating: 3 },
    { name: 'Elasticsearch', rating: 7 },
    { name: 'Datadog', rating: 8 },
    { name: 'Objective-C', rating: 2 },
    { name: 'Java', rating: 2 },
    { name: 'Python', rating: 7 },
    { name: 'Ruby', rating: 6 },
  ],
  ['rating'],
  ['desc']
).filter(({ rating }) => rating > 5);

const PLACEHOLDER_SKILLS = Array((SKILLS.length % 6) + 1)
  .fill(0)
  .map((v, i) => i);

const Resume: React.FC<{ hideHeader?: boolean }> = ({ hideHeader = false }) => {
  return (
    <React.Fragment>
      <Container>
        {!hideHeader && (
          <Header>
            <div>
              <Name>Andrew Gnott</Name>
              <Description>software engineer</Description>
            </div>
            <DetailsContainer>
              <DetailItem>
                <FaPhone />
                &nbsp;&nbsp;<a href="tel:574-215-6899">(574) 215-6899</a>
              </DetailItem>
              <DetailItem>
                <FaEnvelope />
                &nbsp;&nbsp;<a href="mailto:gnottandrew@gmail.com">gnottandrew@gmail.com</a>
              </DetailItem>
              <DetailItem>
                <FaLink />
                &nbsp;&nbsp;<a href="https://agnott.github.io">agnott.github.io</a>
              </DetailItem>
            </DetailsContainer>
          </Header>
        )}
        <EntryContainer>
          <SectionName>Summary</SectionName>
          <Overview>
            Results-oriented software engineer with multiple years of web client, app client, and
            server experience. Has helped build and scale a small startup into a billion-dollar
            business. A bias for action and eagerness to learn lead to promptly-delivered and
            well-designed features that make a difference for users. Thrives in fast-paced
            environments with abstract requirements. A natural leader always looking to
            collaboratively build the best products possible.
          </Overview>
          <Separator />
        </EntryContainer>
        <EntryContainer>
          <CompanyDetailsContainer>
            <CompanyName>Cameo</CompanyName>
            <Location>(Chicago, IL + Remote)</Location>
          </CompanyDetailsContainer>
          <PositionContainer>
            <PositionName>Technical Lead</PositionName>
            <PositionDates>Apr 2021 - Present</PositionDates>
          </PositionContainer>
          <PositionDetails>
            <PositionDetail>
              Managed the Fan Clubs team consisting of up to seven engineers with two squads and
              multiple concurrent workstreams. Worked with product, design, data, and engineers to
              identify requirements, plan, and execute. Led career conversations and promoted
              several engineers.
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
              Worked with other technical leads to identify areas of improvement and general
              strategic direction.
            </PositionDetail>
            <PositionDetail>
              Interviewed to hire engineers for our Mobile and DevOps teams.
            </PositionDetail>
          </PositionDetails>
          <PositionContainer>
            <PositionName>Software Engineer/Software Engineer II</PositionName>
            <PositionDates>Nov 2018 - Apr 2021</PositionDates>
          </PositionContainer>
          <PositionDetails>
            <PositionDetail>
              Served as the initial lead for the Messaging team. Collaborated and supervised a team
              of up to four engineers. Designed and implemented the initial messaging feature, which
              has evolved to support Fan Clubs &ndash; controlled, feature-rich group chats of
              50,000+ users.
            </PositionDetail>
            <PositionDetail>
              Served as the initial lead for the Growth team. Collaborated and supervised a team of
              up to three engineers. Designed and implemented multiple high-impact experiments,
              third-party modules for deep linking and experimentation, and a promotion framework
              allowing the marketing team to provide discounts across arbitrary talent audiences.
            </PositionDetail>
            <PositionDetail>
              Founding member of the App Platform Guild &ndash; a small group of engineers focused
              on iOS and Android app stability and performance. Implemented an app logging and
              monitoring service and migrated from Expo&apos;s ExpoKit to their Bare Workflow.
              Decreased both crash percentage and median app startup time by 30%.
            </PositionDetail>
            <PositionDetail>
              Led and implemented several large projects across the engineering team including: a
              refactor of our Node API endpoints to follow ExpressJS routing best practices, a
              refactor of our Cameo Calls API to follow a largely-event driven architecture on SQS
              with built-in business metric monitoring, and updated talent onboarding, recording,
              and banking experiences.
            </PositionDetail>
            <PositionDetail>
              Served as an on-call engineer. Identified, triaged, and addressed issues as they
              arose.
            </PositionDetail>
            <PositionDetail>
              Created Andrew-mojis for all the Slack expressions you&apos;ll ever need!
            </PositionDetail>
          </PositionDetails>
        </EntryContainer>
        <EntryContainer>
          <CompanyDetailsContainer>
            <CompanyName>Civis Analytics</CompanyName>
            <Location>(Chicago, IL)</Location>
          </CompanyDetailsContainer>
          <PositionContainer>
            <PositionName>Software Engineer I/Software Engineer II</PositionName>
            <PositionDates>Jul 2017 - Nov 2018</PositionDates>
          </PositionContainer>
          <PositionDetails>
            <PositionDetail>
              Main implementing engineer for the migration of the core Platform from AngularJS to
              React + Redux. Collaborated with the design team to bring a design system to the new
              UI. Implemented features to improve user experience such as: bundle splitting,
              lazy-loading pages, white-labeling, front-end services for interacting with various
              resources.
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
              Served on the SRE rotation. Identified, triaged, and addressed issues as they arose.
            </PositionDetail>
            <PositionDetail>
              Interviewed potential candidates and served as a mentor for new hires. Helped create
              Cameo&apos;s first, standardized engineering interview questions.
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
          <CompanyDetailsContainer>
            <CompanyName>Moody&apos;s Analytics</CompanyName>
            <Location>(San Francisco, CA)</Location>
          </CompanyDetailsContainer>
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
            {PLACEHOLDER_SKILLS.map((v, i) => (
              <SKillContainerPlaceholder key={i} />
            ))}
          </SkillsContainer>
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
        <Footer>
          <FooterIcon
            viewBox="0 0 300 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
          >
            <path d="M71.882,58.007C63.233,60.05 55.084,63.494 48.292,69.359C29.193,85.853 31.54,115.537 41.435,135.867C47.475,148.278 55.553,157.421 70.118,158.744C83.336,159.944 98.195,157.77 108.376,148.331C122.127,135.582 122.754,114.34 121.209,97.115C120.444,88.585 118.774,80.26 114.268,72.84C107.07,60.986 92.957,55.703 80.632,50.993C77.281,49.712 73.521,51.393 72.24,54.744C71.829,55.822 71.723,56.941 71.882,58.007ZM89.012,68.236C87.862,70.545 85.388,72.04 82.662,71.816C81.079,71.686 79.675,70.998 78.628,69.961C77.645,70.11 76.498,70.291 76.052,70.388C69.012,71.923 62.286,74.451 56.789,79.198C42.189,91.807 45.56,114.637 53.124,130.178C57.069,138.283 61.781,144.933 71.293,145.797C80.994,146.678 92.066,145.725 99.538,138.797C104.591,134.113 106.953,127.765 108.05,121.075C109.294,113.495 108.904,105.448 108.261,98.277C107.674,91.731 106.614,85.281 103.156,79.587C99.904,74.233 94.698,70.847 89.012,68.236Z" />
            <path d="M191.661,57.64C188.953,58.983 186.342,60.527 183.836,62.225C177.197,66.725 170.794,71.869 166.253,78.572C162.268,84.454 160.26,91.316 158.996,98.227C155.839,115.472 156.856,135.893 176.091,143.383C187.234,147.722 200.617,145.509 212.194,139.252C223.441,133.174 232.848,123.37 236.811,113.158C244.305,93.85 235.921,67.341 218.357,56.036C212.399,52.2 205.69,50.85 198.768,50.103C195.202,49.718 191.994,52.302 191.609,55.868C191.543,56.473 191.564,57.068 191.661,57.64ZM207.901,65.727C207.396,65.78 206.887,65.837 206.775,65.863C201.147,67.177 195.905,69.75 191.129,72.987C185.846,76.567 180.63,80.529 177.016,85.864C174.048,90.245 172.725,95.42 171.783,100.567C170.842,105.71 170.191,111.287 170.718,116.49C171.358,122.797 173.854,128.561 180.808,131.269C188.609,134.307 197.908,132.196 206.013,127.815C214.448,123.257 221.72,116.113 224.692,108.454C230.134,94.434 224.075,75.176 211.321,66.967C211.077,66.81 210.83,66.659 210.582,66.516L210.453,66.508C209.528,66.425 208.665,66.151 207.901,65.727Z" />
            <path d="M201.147,93.071C200.29,92.607 199.315,92.332 198.276,92.299C193.941,92.163 189.67,95.511 188.191,100.138C186.611,105.08 188.238,110.334 193.002,112.627C196.666,114.39 202.093,113.115 205.572,109.382C209.384,105.29 209.898,99.554 207.002,95.956C205.385,93.947 203.366,93.061 201.147,93.071ZM198.394,105.286L198.214,105.294L198.257,105.295L198.394,105.286ZM198.77,105.257L198.591,105.274L198.665,105.27L198.77,105.257Z" />
            <path d="M78.546,96.663C73.941,96.733 70.583,98.461 67.886,102.962C64.338,108.885 66.07,117.904 73.866,119.96C78.328,121.137 83.762,118.601 86.766,113.979C89.941,109.095 89.788,103 86.297,99.466C84.12,97.263 81.329,96.389 78.546,96.663Z" />
            <path d="M28.196,73.206C34.921,65.888 42.609,59.135 50.644,53.326C55.114,50.095 59.529,46.917 64.98,45.65C67.767,45.003 70.347,45.376 72.946,45.696C75.431,46.001 77.928,46.319 80.531,46.319C84.118,46.319 87.031,43.407 87.031,39.819C87.031,36.232 84.118,33.319 80.531,33.319C74.201,33.319 68.515,31.482 62.038,32.987C54.868,34.653 48.908,38.54 43.028,42.791C34.291,49.106 25.936,56.453 18.624,64.41C16.197,67.051 16.371,71.166 19.012,73.594C21.654,76.021 25.769,75.848 28.196,73.206Z" />
            <path d="M257.981,63.219L257.967,63.175C257.759,62.296 257.59,61.414 257.363,60.54C256.576,57.499 255.241,54.804 253.283,52.331C249.1,47.045 243.573,42.664 238.346,38.458C232.025,33.371 225.924,31.659 218.293,29.495C205.89,25.978 194.207,24.116 181.382,25.659C177.82,26.088 175.276,29.327 175.705,32.889C176.133,36.451 179.373,38.995 182.935,38.566C193.993,37.236 204.053,38.97 214.747,42.002C220.581,43.656 225.363,44.696 230.195,48.585C234.679,52.194 239.501,55.864 243.09,60.398C243.9,61.423 244.452,62.54 244.779,63.8C244.982,64.585 245.13,65.378 245.316,66.167C245.396,66.503 246.095,68.461 246.207,68.662C248.365,72.548 251.848,72.112 252.983,71.92C254.365,71.685 255.691,71.056 256.808,69.767C257.289,69.211 258.396,67.965 258.396,65.505C258.396,64.7 258.249,63.93 257.981,63.219ZM246.859,61.399C246.363,61.979 245.495,63.114 245.406,65.151C245.482,63.732 246.014,62.433 246.859,61.399ZM257.261,61.838C256.09,60.127 254.123,59.005 251.896,59.005C251.693,59.005 251.492,59.014 251.293,59.033C252.658,58.876 255.364,58.919 257.261,61.838ZM247.194,61.021L247.188,61.028L247.202,61.012L247.194,61.021ZM247.41,60.802L247.364,60.849L247.502,60.717L247.41,60.802ZM249.638,59.408C248.898,59.674 248.19,60.084 247.538,60.683C248.145,60.134 248.856,59.698 249.638,59.408ZM249.782,59.357L249.711,59.383L249.829,59.343L249.782,59.357Z" />
            <path d="M60.641,188.647C59.044,188.135 57.251,188.237 55.649,189.075C51.361,191.316 47.431,192.408 44.119,196.457C39.125,202.562 38.891,210.475 39.266,217.882C40.353,239.333 52.473,255.375 72.013,264.117C85.818,270.293 100.673,273.068 115.44,275.908C134.588,279.592 155.991,283.623 175.36,279.413C197.32,274.64 218.165,261.308 236.01,248.29C245.345,241.479 255.337,233.901 262.965,224.917C271.286,215.115 276.847,203.678 276.558,189.928C276.038,165.216 250.493,155.678 230.403,155.678C224.672,155.678 219.374,157.567 213.977,159.286C205.801,161.89 197.742,164.84 189.896,168.308C180.369,172.519 170.124,174.979 160.646,179.275C149.861,184.162 139.715,190.239 128.274,193.604C115.179,197.455 101.595,200.414 88.452,195.807C81.855,193.495 75.099,189.201 68.081,188.471C67.326,188.392 62.899,188.399 60.641,188.647ZM59.971,201.416C59.051,201.839 58.144,202.218 57.259,202.618C56.163,203.113 55.077,203.593 54.181,204.688C51.298,208.213 52.033,212.947 52.249,217.224C53.076,233.533 62.466,245.604 77.322,252.251C90.21,258.017 104.11,260.491 117.896,263.143C135.384,266.507 154.908,270.555 172.599,266.71C192.831,262.312 211.908,249.782 228.348,237.787C236.881,231.562 246.083,224.715 253.055,216.503C259.334,209.108 263.779,200.576 263.561,190.201C263.396,182.391 259.029,177.238 253.228,173.966C246.443,170.139 237.83,168.678 230.403,168.678C226.029,168.678 222.041,170.361 217.922,171.673C210.192,174.135 202.57,176.92 195.151,180.199C185.661,184.393 175.454,186.837 166.013,191.115C154.677,196.253 143.968,202.539 131.942,206.076C116.237,210.695 99.914,213.601 84.151,208.075C78.469,206.083 72.781,202.03 66.735,201.401C66.424,201.368 64.212,201.356 63.29,201.354C62.725,201.516 62.129,201.602 61.513,201.602C60.981,201.602 60.465,201.538 59.971,201.416ZM66.82,198.85L66.818,198.854L66.82,198.85ZM66.923,198.702C67.716,197.56 68.013,196.327 68.013,195.102C68.013,196.433 67.612,197.671 66.923,198.702Z" />
            <path d="M93.895,211.443C93.424,213.582 93.396,215.629 91.757,217.288C87.191,221.909 82.157,221.267 76.146,219.862C74.361,219.445 72.998,218.905 72.044,217.968C70.444,216.398 70.059,214.024 69.713,211.008C69.609,210.096 69.433,209.103 69.32,208.1L69.307,207.922C69.53,207.762 69.743,207.584 69.947,207.391C72.55,204.922 72.659,200.805 70.191,198.202C67.56,195.427 64.769,195.375 62.144,196.485C60.307,197.261 58.057,199.967 57.235,201.916C55.878,205.133 56.417,209.169 56.798,212.488C57.55,219.056 59.453,223.825 62.937,227.245C65.371,229.635 68.633,231.457 73.188,232.521C84.007,235.049 92.787,234.742 101.005,226.424C104.538,222.848 105.57,218.837 106.593,214.224C106.788,213.348 107.296,212.016 107.392,211.034C107.495,209.98 107.393,209.019 107.168,208.191C106.697,206.462 105.718,205.094 104.234,204.107C103.243,203.449 101.919,202.88 100.058,202.88C96.471,202.88 93.558,205.792 93.558,209.38C93.558,210.101 93.676,210.795 93.895,211.443ZM99.56,215.863L99.656,215.866L99.425,215.849L99.56,215.863ZM98.66,215.734C98.805,215.761 98.95,215.787 99.094,215.814L99.069,215.805C98.962,215.786 98.856,215.767 98.749,215.748L98.66,215.734ZM98.255,215.627L98.398,215.664L98.217,215.613L98.255,215.627ZM63.492,208.864C62.483,208.543 61.538,207.969 60.758,207.147C61.651,208.088 62.569,208.627 63.492,208.864Z" />
            <path d="M148.424,202.909C148.752,203.58 149.159,204.335 149.576,204.909C149.586,205.335 149.611,207.009 149.426,208.017C148.97,210.508 148.024,213.027 147.233,214.436C144.929,218.539 138.924,223.904 134.116,224.436C125.322,225.41 118.98,217.5 121.664,208.961C122.74,205.538 120.835,201.886 117.412,200.811C113.99,199.735 110.338,201.64 109.262,205.063C103.636,222.964 117.111,239.398 135.547,237.357C143.812,236.442 154.606,227.855 158.568,220.802C160.423,217.498 162.811,210.562 162.654,205.175C162.55,201.583 161.384,198.541 159.404,196.449C158.13,194.674 155.442,191.471 152.646,191.471C149.059,191.471 146.146,194.383 146.146,197.971C146.146,199.946 147.03,201.717 148.424,202.909ZM152.352,204.463C152.449,204.468 152.547,204.471 152.646,204.471L152.352,204.463ZM152.11,204.447L152.128,204.448L152.105,204.447L152.11,204.447ZM159.41,196.457C159.896,197.131 160.175,197.598 160.175,197.598C160.175,197.598 159.735,196.814 159.41,196.457Z" />
            <path d="M200.16,182.654C200.317,184.359 199.971,186.277 199.971,187.93C199.971,190.559 199.802,193.73 198.909,196.54C198.381,198.203 197.691,199.834 196.097,200.553C195.414,200.86 194.616,200.756 193.838,200.743C192.635,200.723 191.434,200.645 190.304,200.645C184.194,200.645 178.269,199.939 175.777,193.868C175.475,193.134 174.796,189.727 174.622,188.834C175.305,186.031 174.049,183.01 171.393,181.577C168.236,179.872 164.29,181.052 162.586,184.208C161.936,185.412 161.398,187.614 161.67,190.29C161.978,193.308 163.188,197.433 163.751,198.806C168.48,210.325 178.709,213.645 190.304,213.645C193.916,213.645 198.065,213.925 201.44,212.404C205.589,210.533 208.456,207.234 210.273,203.179C212.385,198.466 212.971,192.634 212.971,187.93C212.971,185.174 213.335,181.907 212.771,179.199C212.623,178.488 211.97,176.46 211.338,175.446C210.526,174.144 209.504,173.366 208.684,172.926C207.262,172.164 205.825,171.991 204.434,172.225C202.979,172.469 201.24,173.131 199.882,175.261C198.386,177.606 198.585,180.551 200.16,182.654ZM209.745,183.556L209.681,183.613L209.709,183.59L209.745,183.556ZM209.828,183.479C210.183,183.15 210.526,182.747 210.843,182.251C210.549,182.711 210.208,183.121 209.828,183.479Z" />
            <path d="M218.744,170.023L218.785,170.471C219.156,173.515 218.998,176.51 220.268,179.402C223.353,186.427 229.91,193.069 236.966,196.282C244.483,199.705 252.71,200.517 260.53,197.085C263.925,195.596 265.707,193.105 267.884,190.422C268.356,189.947 269.361,188.915 269.719,188.363C270.304,187.46 270.611,186.57 270.756,185.816C271.074,184.161 270.782,182.688 270.108,181.407C269.488,180.23 268.506,179.087 266.781,178.35C263.524,176.958 259.756,178.436 258.306,181.649C258.156,181.8 258.035,181.927 257.986,181.986C257.463,182.627 256.99,183.273 256.513,183.898C256.157,184.366 255.911,184.916 255.307,185.181C251.003,187.069 246.49,186.334 242.353,184.45C238.054,182.493 234.05,178.454 232.17,174.174C231.427,172.481 231.906,170.678 231.689,168.896C231.637,168.47 231.479,166.749 231.18,165.81C230.717,164.362 229.933,163.351 229.259,162.72C227.898,161.448 226.336,160.915 224.697,160.915C221.11,160.915 218.197,163.827 218.197,167.415C218.197,168.342 218.392,169.225 218.744,170.023ZM258.485,187.369C258.995,188.474 259.875,189.446 261.328,190.144C260.073,189.52 259.1,188.535 258.485,187.369Z" />
          </FooterIcon>
        </Footer>
      </Container>
    </React.Fragment>
  );
};

export default Resume;

const Container = styled.div`
  font-size: 14px;

  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
`;

const Header = styled.div`
  background-color: ${Colors.solids.raisinBlack};
  padding: ${Spacing.em.small} ${Spacing.em.medium} ${Spacing.em.medium} ${Spacing.em.medium};
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const EntryContainer = styled.div`
  margin: ${Spacing.em.medium};
  color: ${Colors.solids.raisinBlack};

  & a {
    color: ${Colors.solids.raisinBlack};
  }

  @media only screen and (max-width: 600px) {
    margin: ${Spacing.em.xSmall};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${Spacing.em.medium};
`;

const FooterIcon = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 2;
  width: ${Spacing.em.large};
  height: ${Spacing.em.large};
`;

const Name = styled.div`
  ${Fonts.bold[900]}
  color: ${Colors.solids.oldLace};
`;

const Description = styled.div`
  ${Fonts.bold[400]}
  color: ${Colors.solids.oldLace};
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  gap: ${Spacing.em.xxSmall} ${Spacing.em.xxLarge};
`;

const DetailItem = styled.div`
  ${Fonts.regular[200]}
  display: flex;
  align-items: center;
  color: ${Colors.solids.oldLace};
`;

const Separator = styled.div`
  width: 20%;
  height: ${Spacing.px.xxxSmall};
  background-color: ${Colors.solids.raisinBlack};
  margin: ${Spacing.em.medium} 0px 0px 0px;
`;

const Overview = styled.div`
  ${Fonts.regular[300]}
  margin: ${Spacing.em.xxSmall} ${Spacing.em.small} 0px ${Spacing.em.small};
`;

const ListContainer = styled.div`
  ${Fonts.regular[200]};
  margin: ${Spacing.em.xxSmall} 0px ${Spacing.em.medium} 0px;
  padding: ${Spacing.em.xSmall};
  border: ${Spacing.em.xxxSmall} solid ${Colors.solids.raisinBlack};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: ${Spacing.em.xxxSmall} ${Spacing.em.xxLarge};

  @media only screen and (max-width: 600px) {
    padding: ${Spacing.em.xxSmall};
  }
`;

const ListItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 100px;
  gap: ${Spacing.em.xxxxSmall};
`;

const SkillsContainer = styled(ListContainer)`
  margin-bottom: 0px;
`;

const SkillContainer = styled(ListItem)`
  min-width: 250px !important;
  flex-basis: 25%;
`;

const SKillContainerPlaceholder = styled(SkillContainer)`
  height: 0px !important;
`;

const SkillName = styled.div`
  flex: 1;
`;

const SkillBar = styled.div<{ rating: number }>`
  position: relative;
  flex: 1;
  height: ${Spacing.em.xxSmall};
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

const CompanyDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CompanyName = styled.h2`
  ${Fonts.bold[700]}
  margin-bottom: ${Spacing.em.xxxSmall};
`;

const Location = styled.span`
  ${Fonts.bold[200]}
  margin-left: ${Spacing.em.xxSmall};
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
  margin-left: ${Spacing.em.small};

  @media only screen and (max-width: 600px) {
    margin-left: ${Spacing.em.xSmall};
  }
`;

const PositionDates = styled.h3`
  ${Fonts.bold[300]}
  margin-left: ${Spacing.em.small};

  @media only screen and (max-width: 600px) {
    margin-left: ${Spacing.em.xSmall};
  }
`;
const PositionDetails = styled.ul`
  ${Fonts.regular[300]};
  margin: ${Spacing.em.xSmall} ${Spacing.em.small};

  @media only screen and (max-width: 600px) {
    margin: ${Spacing.em.xxSmall} ${Spacing.em.xSmall};
  }
`;
const PositionDetail = styled.li`
  margin: ${Spacing.em.xxSmall} 0px;

  @media only screen and (max-width: 600px) {
    margin: ${Spacing.em.xxxSmall} 0px;
  }
`;
