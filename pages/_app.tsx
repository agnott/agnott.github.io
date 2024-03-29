import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NavBar } from '../components/NavBar';
import { Colors, Fonts, Shadows, Spacing } from '../design-system';
import { Page } from '../design-system/components/Layout';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0px;
    margin: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${Colors.solids.raisinBlack};

    font-family: 'Raleway', sans-serif;
  }

  *, * > * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    margin: 0px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.1em;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();

  const isRaw = Boolean(route.query?.printable);
  const isResume = route.pathname === '/resume';

  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/face-icon.svg" />
      </Head>
      {isRaw || isResume ? (
        <Component {...pageProps} />
      ) : (
        <Page>
          <ContentContainer>
            <LeftContentContainer>
              <LeftContent>
                <LogoImageContainer>
                  <AvatarImage />
                  <LogoImage
                    width={1.2 * Spacing.xxxLarge}
                    height="100%"
                    viewBox="0 0 216 106"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                  >
                    <g transform="matrix(1,0,0,1,-5.67667,-80.8844)">
                      <g transform="matrix(0.774409,0,0,0.693286,9.80879,48.6128)">
                        <path d="M189.333,49.672C188.823,50.4 188.313,51.128 187.82,51.867C187.047,53.026 186.279,54.188 185.54,55.368C185.054,56.146 184.573,56.927 184.1,57.712C182.87,59.353 181.622,60.982 180.396,62.626C170.224,76.271 162.422,91.725 150.718,104.221C149.632,105.381 148.523,106.524 147.348,107.593C146.497,108.367 143.733,111.039 140.941,112.621C141.072,112.067 141.184,111.606 141.233,111.418C142.805,105.405 144.941,99.501 147.021,93.649C147.231,93.057 149.778,87.102 150.004,84.373C150.27,81.161 148.769,79.375 147.228,78.652C146.383,78.256 145.255,78.077 143.958,78.414C142.395,78.821 139.998,80.519 139.352,80.895C136.214,82.722 133.122,84.654 129.879,86.293C128.977,86.749 128.07,87.194 127.141,87.591C126.683,87.788 124.539,88.632 122.399,89.102C122.028,89.183 121.557,89.245 121.137,89.289C120.49,88.849 119.94,88.485 119.699,88.342C118.391,87.563 117.426,87.765 117.292,87.78C115.791,87.949 114.943,88.818 114.415,89.642C113.883,90.473 113.559,91.493 113.687,92.768C113.757,93.466 113.911,94.115 114.146,94.707C113.316,94.612 112.309,94.756 111.236,95.381C110.819,95.624 110.332,96.012 109.843,96.451C110.298,95.174 111.582,91.412 111.491,89.455C111.374,86.939 110.187,85.403 108.638,84.666C107.805,84.269 106.74,84.098 105.538,84.394C104.092,84.751 101.966,86.303 101.466,86.66C99.938,87.748 98.453,88.914 97.014,90.134C97.022,88.685 96.611,87.43 95.943,86.486C95.199,85.433 93.961,84.538 92.163,84.678C91.029,84.766 88.876,85.899 88.713,85.997C86.213,87.504 83.87,89.27 81.604,91.105C74.529,96.833 67.733,103.021 60.96,109.168C61.558,107.645 62.15,106.114 62.735,104.576C64.973,98.699 67.054,92.742 68.904,86.731C69.289,85.48 70.086,83.541 70.43,81.792C70.689,80.473 70.729,79.209 70.548,78.125C70.189,75.967 69.04,75.183 68.349,74.791C67.187,74.131 65.83,73.97 64.364,74.967C64.033,75.192 63.628,75.537 63.24,76.078C62.911,76.537 62.3,78.041 62.003,78.682C61.509,79.748 61.038,80.824 60.554,81.894L59.995,83.118C55.231,78.524 49.234,79.526 43.526,82.32C35.027,86.479 27.513,94.784 23.832,103.493C22.74,106.079 21.334,110.848 21.551,114.868C21.76,118.748 23.277,122.008 26.559,123.704C29.156,125.045 31.939,125.094 34.659,124.301C37.845,123.373 40.941,121.214 43.2,119.447C45.931,117.309 48.461,114.934 50.81,112.388C49.447,115.68 48.04,118.937 46.579,122.159C30.786,136.592 15.153,152.137 3.417,169.852C0.455,174.324 -2.31,179.118 -4.096,184.203C-4.381,185.015 -5.272,187.717 -5.332,189.807C-5.391,191.882 -4.759,193.596 -3.763,194.717C-2.836,195.76 -1.197,196.633 1.022,195.942C2.935,195.347 6.514,192.527 6.656,192.417C14.258,186.539 20.698,179.23 26.64,171.723C37.473,158.039 45.865,143.394 52.991,127.945C55.213,125.925 57.435,123.927 59.647,121.947C67.059,115.312 74.399,108.434 82.016,101.99C79.667,106.073 77.282,110.135 74.894,114.195C71.034,119.471 67.673,124.994 65.302,130.553C63.541,134.683 67.016,136.606 67.319,136.751C67.875,137.016 70.005,137.966 71.909,135.625C72.056,135.444 72.895,134.036 73.223,133.493C73.556,132.943 73.903,132.402 74.233,131.85C76.057,128.793 77.797,125.685 79.6,122.615L81.571,119.262C86.631,112.439 92.607,106.08 98.187,100.683C98.879,100.013 99.586,99.351 100.307,98.705C98.801,102.696 97.195,106.649 95.557,110.589C94.724,112.594 93.863,114.59 93.042,116.6C92.893,116.886 92.29,118.062 92.144,118.569C91.843,119.617 91.88,120.561 92.05,121.313C92.415,122.929 93.282,124.39 95.454,124.827C96.469,125.031 98.039,124.856 99.572,123.429C100.202,122.843 100.967,121.83 101.663,120.824C101.421,122.092 101.25,123.373 101.166,124.67C101.066,126.207 100.996,129.752 101.917,131.993C102.548,133.528 103.531,134.675 104.802,135.349C105.961,135.965 107.451,136.269 109.379,135.635C112.225,134.699 114.808,131.43 116.429,129.225C121.611,122.177 125.801,113.333 127.121,104.622C127.503,102.099 127.698,99.462 127.211,97.015C128.604,96.573 129.681,96.159 130.031,96.009C131.107,95.548 132.161,95.035 133.206,94.507C135.253,93.472 137.243,92.329 139.221,91.165C137.145,97.003 135.053,102.898 133.486,108.891C133.243,109.822 132.241,113.013 132.16,115.31C132.07,117.86 132.953,119.799 134.181,120.882C136.172,122.638 138.945,123.009 141.993,121.892C146.163,120.365 151.137,115.773 152.446,114.582C153.787,113.361 155.055,112.061 156.294,110.738C161.163,105.541 165.377,99.85 169.367,93.987C168.387,98.122 167.666,102.281 167.287,106.396C167.076,108.69 166.677,112.418 167.129,115.674C167.566,118.82 168.775,121.55 170.867,123.273C173.705,125.608 177.397,125.591 181.072,123.85C184.988,121.995 188.878,118.193 190.56,116.215C191.871,114.674 193.112,113.08 194.295,111.441C194.352,111.724 194.413,112.006 194.478,112.286C197.576,125.717 206.071,133.789 216.831,137.965C226.878,141.864 238.957,142.272 249.996,140.599C252.203,140.265 253.751,137.992 253.452,135.527C253.152,133.062 251.117,131.332 248.911,131.666C239.117,133.151 228.393,132.908 219.479,129.449C211.278,126.266 204.655,120.274 202.293,110.037C201.534,106.746 201.422,103.258 201.536,99.834C205.782,92.1 209.404,83.955 213.306,76.175C216.115,70.577 219.116,65.057 221.556,59.283C221.657,59.044 222.699,56.957 223.21,55.207C223.687,53.572 223.714,52.04 223.484,51.034C223.184,49.72 222.536,48.741 221.649,48.054C220.915,47.486 219.948,47.053 218.63,47.145C216.979,47.259 215.09,48.207 213.324,49.88C210.812,52.259 208.348,56.264 207.296,57.653C199.037,68.56 194.544,82.217 193.66,95.796C193.631,96.238 193.604,96.681 193.581,97.126C190.975,101.674 188.091,106.029 184.708,110.007C183.499,111.429 180.737,114.217 177.922,115.55C177.385,115.804 176.852,116.005 176.333,116.077C176.091,116.11 175.848,116.174 175.655,116.015C175.412,115.815 175.351,115.462 175.263,115.121C175.113,114.537 175.043,113.902 175.008,113.258C174.89,111.074 175.179,108.808 175.316,107.317C176.371,95.842 180.408,84.031 185.059,73.547C186.662,69.935 188.555,66.472 190.589,63.091C192.139,61.019 193.66,58.926 195.085,56.763C195.083,56.767 194.994,56.896 194.994,56.896C194.994,56.896 197.163,53.585 197.418,52.591C197.778,51.186 197.527,50.074 197.23,49.33C196.604,47.766 195.629,47.137 194.792,46.811C193.95,46.484 193.044,46.44 192.087,46.809C191.549,47.016 190.848,47.427 190.215,48.234C189.976,48.538 189.472,49.424 189.333,49.672ZM34.359,145.719C25.336,154.91 16.899,164.656 9.905,175.214C8.508,177.322 7.15,179.504 5.957,181.767C11.361,176.957 16.12,171.404 20.594,165.752C25.707,159.293 30.25,152.608 34.359,145.719ZM117.982,98.089C118.231,98.885 118.311,99.789 118.138,100.788C118.028,101.425 117.779,102.183 117.387,102.954C117.094,103.531 116.623,104.162 116.421,104.633C115.906,105.836 115.378,107.033 114.857,108.233C112.55,113.546 109.778,118.933 109.257,124.782C109.601,124.326 109.913,123.883 110.192,123.503C114.497,117.649 118.067,110.353 119.163,103.118C119.314,102.124 119.479,101.088 119.485,100.078C119.488,99.518 119.486,98.94 119.166,98.479L118.872,98.282C118.562,98.234 118.265,98.169 117.982,98.089ZM56.072,90.882C55.615,90.691 55.182,90.403 54.798,90.017C53.672,88.885 52.334,88.791 50.976,89.04C49.581,89.296 48.161,89.894 46.765,90.577C40.027,93.875 34.049,100.436 31.131,107.341C30.548,108.72 29.776,111.053 29.621,113.282C29.586,113.781 29.583,114.273 29.644,114.736C29.684,115.041 29.679,115.383 29.947,115.521C31.11,116.122 32.372,115.741 33.567,115.239C35.453,114.449 37.207,113.129 38.569,112.063C45.402,106.717 50.773,99.666 55.245,92.29C55.527,91.823 55.803,91.354 56.072,90.882Z" />
                      </g>
                      <g transform="matrix(0.774409,0,0,0.693286,9.80879,48.6128)">
                        <path d="M139.435,76.641C191.731,86.821 212.836,84.114 265.896,85.932C268.122,86.008 269.985,84.051 270.053,81.565C270.122,79.078 268.37,76.997 266.144,76.921C213.562,75.119 192.645,77.848 140.821,67.759C138.627,67.332 136.535,68.975 136.153,71.426C135.77,73.877 137.241,76.213 139.435,76.641Z" />
                      </g>
                    </g>
                  </LogoImage>
                </LogoImageContainer>
                <Separator />
                <BioContainer>
                  {"hello! i'm "}
                  <BioHighlight>andrew gnott</BioHighlight>
                  {' — a software engineer, problem solver, and '}
                  <BioUnderline>leader</BioUnderline>
                  {'. i enjoy making apps better by '}
                  <BioUnderline>shipping</BioUnderline>
                  {" impactful code. whether it's familiar technology or not, i believe "}
                  <BioUnderline>collaboration</BioUnderline>
                  {' will fill in the gaps.'}
                </BioContainer>
                <Separator />
                <FooterContainer>
                  <a href="https://www.github.com/agnott" target="_blank" rel="noreferrer">
                    <LinkIcon icon={faGithubSquare} />
                  </a>
                  <a href="https://www.instagram.com/awgnott" target="_blank" rel="noreferrer">
                    <LinkIcon icon={faInstagramSquare} />
                  </a>
                  <a href="mailto:gnottandrew@gmail.com" target="_blank" rel="noreferrer">
                    <LinkIcon icon={faEnvelope} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andrew-gnott-b8899a9b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://www.facebook.com/andrew.gnott.3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkIcon icon={faFacebookSquare} />
                  </a>
                </FooterContainer>
              </LeftContent>
            </LeftContentContainer>
            <RightContentContainer>
              <NavBar />
              <Component {...pageProps} />
            </RightContentContainer>
          </ContentContainer>
        </Page>
      )}
    </React.Fragment>
  );
}

export default MyApp;

const LeftContentContainer = styled.div`
  position: relative;
  flex: 1;
  padding: ${Spacing.large}px;
  background-color: ${Colors.solids.raisinBlack};
  min-width: 800px;
  z-index: 3;

  @media only screen and (max-width: 800px) {
    min-width: 100%;
  }
`;

const RightContentContainer = styled.div`
  position: relative;
  flex: 2;
  background-color: ${Colors.solids.oldLace};
  min-width: 800px;

  @media only screen and (max-width: 800px) {
    min-width: 100%;
  }
`;

const LeftContent = styled.div`
  position: sticky;
  top: ${Spacing.large}px;
`;

const LogoImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const AvatarImage = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: ${Spacing.xxSmall}px;
  border-radius: 64px;
  background-color: ${Colors.solids.mediumLiver};
  background: url('/profile-new.png');
  background-size: cover;
  box-shadow: inset 0px 0px 12px 4px ${Colors.solids.black};
`;

const LogoImage = styled.svg`
  fill: ${Colors.solids.oldLace};
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 2;

  transition: fill 0.25s ease-in-out;
  &:hover {
    fill: ${Colors.solids.polishedPine};
  }
`;
const Separator = styled.div`
  text-align: center;
  padding: ${Spacing.xSmall}px;

  &::after {
    content: '';
    display: inline-block;
    height: ${Spacing.xxSmall}px;
    width: ${Spacing.xxSmall}px;
    border-radius: ${Spacing.xxSmall}px;
    background-color: ${Colors.solids.oldLace};
  }
`;

const BioContainer = styled.div`
  ${Fonts.bold[900]}
  font-weight: 800;
  color: ${Colors.solids.oldLace};
  text-align: justify;

  @media only screen and (max-width: 800px) {
    text-align: left;
    font-size: 24px;
    line-height: ${32}px;
  }
`;

const BioHighlight = styled.span`
  color: ${Colors.solids.polishedPine};
`;

const BioUnderline = styled.span`
  text-decoration: underline;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  max-height: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Spacing.xSmall}px;
`;

const LinkIcon = styled(FontAwesomeIcon)`
  font-size: ${Spacing.small}px;
  color: ${Colors.solids.oldLace};

  transition: color 0.5s ease-in-out;

  &:hover,
  &:active {
    color: ${Colors.solids.polishedPine};
  }
`;
