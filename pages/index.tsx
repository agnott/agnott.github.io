import Head from 'next/head';
import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled, { keyframes } from 'styled-components';
import { Colors, Fonts, Shadows, Spacing } from '../design-system';
import { Page } from '../design-system/components/Layout';

const RightContent = styled.div`
  padding: ${Spacing.large}px;
`;

const AccentImage = styled.svg`
  position: absolute;
  bottom: ${Spacing.xxSmall}px;
  right: ${Spacing.xxSmall}px;
  fill: ${Colors.solids.raisinBlack};
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 2;
`;

type Pages = 'resume' | 'other';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Andrew Gnott</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightContent>

      </RightContent>
      <AccentImage
        width={Spacing.medium}
        height={Spacing.medium}
        viewBox="0 0 209 188"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
      >
        <g transform="matrix(1,0,0,1,-18.5508,-35.8845)">
          <path d="M62.881,68.895C51.023,67.043 42.839,74.841 36.776,84.442C32.846,90.666 29.932,98.315 31.565,105.814C32.973,112.275 36.906,117.21 42.109,120.677C49.35,125.504 59.114,127.394 67.131,126.702C82.77,125.351 95.611,109.897 92.741,94.128C91.548,87.569 86.955,81.695 82.007,77.518C80.991,76.661 79.919,75.869 78.83,75.107C76.136,73.222 69.81,69.434 64.682,68.946C64.067,68.888 63.466,68.87 62.881,68.895ZM62.62,77.323C62.57,77.348 62.525,77.381 62.485,77.424C60.901,79.092 58.261,79.16 56.594,77.576C56.523,77.509 56.456,77.44 56.392,77.368C50.985,78.769 47.101,83.699 43.823,88.891C41.018,93.333 38.542,98.689 39.708,104.04C40.882,109.43 44.861,113.088 49.635,115.393C54.884,117.926 61.132,118.856 66.414,118.4C77.402,117.45 86.559,106.699 84.543,95.62C83.689,90.926 80.172,86.875 76.631,83.886C75.808,83.19 74.936,82.553 74.052,81.935C72.323,80.724 68.648,78.352 65.209,77.481L64.727,77.37C64.123,77.512 63.477,77.521 62.832,77.37L62.62,77.323Z" />
          <path d="M167.432,57.529C163.995,56.176 160.889,55.24 157.064,55.564C142.248,56.82 131.742,73.553 134.386,87.59C136.367,98.112 146.748,106.129 156.464,108.848C161.566,110.276 167.658,110.872 172.902,109.895C192.115,106.318 195.303,82.544 186.078,68.484C181.606,61.669 174.848,58.012 167.432,57.529ZM155.584,64.237C151.581,65.255 148.233,68.048 145.896,71.544C143.047,75.807 141.656,81.168 142.575,86.048C143.99,93.559 151.775,98.882 158.71,100.824C162.643,101.924 167.334,102.456 171.377,101.703C177.615,100.541 181.067,96 182.274,90.671C183.596,84.831 182.393,78.058 179.11,73.055C176.173,68.578 171.731,66.22 166.858,65.877C166.604,65.889 166.347,65.877 166.09,65.839C164.246,65.786 162.348,66.017 160.454,66.526C158.461,67.062 156.414,66.055 155.584,64.237Z" />
          <path d="M110.715,150.074C92.213,152.772 70.099,151.703 52.121,158.799C32.887,166.391 29.433,190.352 45.439,203.146C69.915,222.711 103.356,229.955 134.054,225.855C166.187,221.564 193.796,209.447 216.438,186.011C222.076,180.175 227.226,171.347 228.669,162.819C230.277,153.321 227.6,144.186 217.178,138.928C211.57,136.099 204.472,135.355 197.146,135.762C187.145,136.316 176.709,138.965 169.827,140.164C140.207,145.326 140.452,145.737 110.715,150.074L110.715,150.074ZM111.918,158.32C141.769,153.967 141.523,153.556 171.258,148.374C177.897,147.217 187.959,144.617 197.607,144.082C203.381,143.762 209.005,144.139 213.425,146.369C219.958,149.664 221.46,155.475 220.453,161.429C219.281,168.353 215.023,175.482 210.445,180.221C189.158,202.254 163.161,213.56 132.951,217.595C104.449,221.402 73.368,214.802 50.643,196.637C39.783,187.957 42.131,171.701 55.181,166.55C72.579,159.683 94.011,160.931 111.918,158.32L111.918,158.32Z" />
          <path d="M52.707,161.888C52.707,167.513 52.092,170.948 54.867,176.547C56.031,178.895 57.878,181.071 59.806,182.815C64.13,186.724 68.586,188.061 72.763,187.784C76.854,187.513 80.761,185.628 84.099,182.647C90.165,177.228 94.276,168.131 94.276,160.434C94.276,158.134 92.409,156.267 90.109,156.267C87.81,156.267 85.943,158.134 85.943,160.434C85.943,165.986 82.923,172.523 78.547,176.432C76.663,178.115 74.522,179.316 72.213,179.469C69.99,179.616 67.696,178.714 65.395,176.633C64.218,175.569 63.044,174.279 62.333,172.846C60.267,168.677 61.04,166.077 61.04,161.888C61.04,159.588 59.173,157.721 56.874,157.721C54.574,157.721 52.707,159.588 52.707,161.888Z" />
          <path d="M125.78,159.327C125.727,159.969 125.626,161.227 125.601,161.693C125.397,165.465 123.465,171.515 120.328,173.824C119.885,174.15 119.27,174.108 118.671,174.122C117.334,174.154 115.958,173.966 114.812,173.875C107.727,173.312 103.387,171.507 100.41,164.6C100.011,163.674 100.321,162.692 100.372,161.763C100.462,160.131 100.369,158.562 99.818,157.11C99.002,154.959 96.594,153.876 94.444,154.691C92.294,155.507 91.21,157.915 92.026,160.065C92.36,160.945 91.994,161.942 91.958,162.953C91.899,164.612 92.059,166.278 92.757,167.898C94.557,172.074 96.718,175.012 99.284,177.135C103.074,180.27 107.825,181.679 114.152,182.182C115.893,182.321 118.056,182.575 120.049,182.385C121.993,182.199 123.799,181.617 125.268,180.535C130.089,176.987 133.609,167.94 133.922,162.143C133.98,161.069 134.276,158.955 134.017,157.49C133.69,155.633 132.72,154.299 131.456,153.536C129.487,152.347 126.924,152.98 125.735,154.949C124.893,156.343 124.965,158.036 125.78,159.327Z" />
          <path d="M163.296,149.838C163.634,152.057 163.549,155.324 163.549,156.134C163.549,161.171 159.948,163.533 155.26,164.284C149.486,165.21 142.598,165.357 138.426,160.868C136.909,159.236 135.771,157.469 135.771,155.225L135.771,154.668C136.569,153.909 137.065,152.838 137.065,151.652C137.065,149.353 135.198,147.486 132.898,147.486C130.706,147.486 129.309,148.489 128.386,149.989C127.595,151.275 127.438,153.607 127.438,155.225C127.438,159.659 129.324,163.316 132.322,166.541C138.389,173.07 148.181,173.859 156.579,172.513C165.619,171.064 171.883,165.847 171.883,156.134C171.883,155.207 171.911,151.688 171.575,148.992C171.363,147.294 170.948,145.845 170.486,144.987C169.63,143.397 168.382,142.672 167.228,142.41C166.173,142.171 164.991,142.237 163.731,142.992C161.759,144.175 161.119,146.737 162.302,148.709C162.57,149.156 162.909,149.534 163.296,149.838ZM133.059,155.815L132.898,155.819C132.953,155.819 133.006,155.818 133.059,155.815ZM167.82,150.249L167.782,150.269L167.814,150.253L167.82,150.249Z" />
          <path d="M206.037,144.766L205.81,147.222C205.39,151.888 202.885,156.106 199.495,159.319C196.673,161.994 192.96,162.791 189.191,162.61C184.888,162.404 180.488,160.929 176.848,159.017C173.651,157.338 173.092,153.615 173.092,150.32C173.092,149.986 173.059,148.003 173.046,147.2C173.513,146.278 173.639,145.181 173.316,144.114C172.648,141.913 170.32,140.668 168.119,141.336C166.982,141.68 165.506,142.654 164.952,144.844C164.583,146.302 164.759,149.644 164.759,150.32C164.759,156.598 166.881,163.195 172.972,166.394C182.729,171.519 196.588,173.557 205.229,165.366C210.08,160.767 213.508,154.649 214.11,147.968C214.227,146.668 214.557,144.412 214.266,142.851C213.923,141.006 212.959,139.664 211.642,138.874C209.671,137.691 207.109,138.331 205.926,140.303C205.069,141.731 205.168,143.467 206.037,144.766ZM170.793,149.222L170.754,149.238L170.762,149.235L170.793,149.222ZM170.99,149.143L170.98,149.148L170.99,149.143Z" />
          <path d="M63.79,87.644C63.253,87.531 62.685,87.525 62.113,87.641C59.278,88.219 57.269,89.547 55.913,91.154C53.758,93.709 53.18,97.101 54.045,100.24C55.38,105.079 60.118,109.374 67.131,108.02C71.738,107.13 74.796,102.45 74.951,97.573C75.116,92.385 72.223,87.666 66.662,87.236C65.734,87.165 64.757,87.301 63.79,87.644Z" />
          <g transform="matrix(1,0,0,1,1.87225,-3.81094)">
            <path d="M159.125,81.629C157.138,81.585 155.397,82.275 154.127,83.392C152.306,84.993 151.122,87.666 152.059,91.261C152.742,93.878 155.431,96.915 158.614,98.371C161.085,99.501 163.731,99.667 165.863,98.782C167.313,98.179 168.488,97.088 169.272,95.619C170.688,93.978 171.381,91.551 171.04,88.966C170.7,86.396 169.331,84.088 167.561,82.747C165.626,80.613 162.934,79.895 160.059,81.155C159.73,81.3 159.418,81.457 159.125,81.629Z" />
          </g>
          <path d="M25.09,78.798C31.477,74.374 37.202,69.094 44.014,65.253C53.55,59.877 65.009,56.532 75.797,54.515C78.057,54.092 79.55,51.914 79.127,49.654C78.704,47.393 76.526,45.901 74.266,46.324C62.601,48.504 50.232,52.181 39.921,57.994C32.884,61.962 26.943,67.377 20.345,71.947C18.454,73.257 17.983,75.855 19.292,77.745C20.602,79.635 23.2,80.107 25.09,78.798Z" />
          <g transform="matrix(1,0,0,1,1.19236,-1.19236)">
            <path d="M192.898,69.643C192.873,69.864 192.866,70.09 192.878,70.319C192.998,72.616 194.959,74.383 197.256,74.264C199.828,74.13 200.956,72.835 201.544,71.782C202.101,70.787 202.332,69.576 201.962,68.19C201.759,67.434 201.273,66.473 200.525,65.544C199.68,64.494 198.414,63.369 198.025,62.972C193.96,58.837 189.049,55.625 184.51,52.052C171.946,42.16 159.375,37.077 143.286,37.077C140.987,37.077 139.12,38.944 139.12,41.243C139.12,43.543 140.987,45.41 143.286,45.41C157.374,45.41 168.354,49.938 179.355,58.599C183.618,61.956 188.264,64.93 192.082,68.814L192.898,69.643Z" />
          </g>
        </g>
      </AccentImage>
    </React.Fragment>
  );
};

export default Home;
