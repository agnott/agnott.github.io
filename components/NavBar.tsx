import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { Colors, Fonts, Spacing } from '../design-system';

const AnimateSlideIn = keyframes`
  from {
    opacity: 0.5;
    transform: translate(-100%);
  }
  to {
    opacity: 1;
    transform: translate(0%);
  }
`;

const HeaderContainer = styled.header`
  background-color: ${Colors.solids.raisinBlack};
  padding: ${Spacing.medium}px;
  margin: ${Spacing.small}px ${Spacing.small}px ${Spacing.small}px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation: 1.5s ease-in-out 0s ${AnimateSlideIn};
  position: sticky;
  top: ${Spacing.small}px;
`;

const HeaderLink = styled.a<{ active: boolean }>`
  ${Fonts.bold[300]}
  line-height: ${Spacing.small}px;
  display: inline-block;
  padding: ${Spacing.xxxSmall}px ${Spacing.xSmall}px ${Spacing.xxSmall}px ${Spacing.xSmall}px;
  color: ${Colors.solids.oldLace};
  margin-left: ${Spacing.xSmall}px;
  transition: all 0.5s ease-in-out;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  cursor: pointer;

  ${({ active }) =>
    active
      ? `
    background-color: ${Colors.solids.oldLace};
    color: ${Colors.solids.raisinBlack};
  `
      : ''}

  &:active,
  &:hover {
    color: ${Colors.solids.polishedPine};
  }
`;

export const NavBar: React.FC = () => {
  const route = useRouter();

  return (
    <HeaderContainer>
      <Link href="/other" passHref>
        <HeaderLink active={route.pathname === '/other'}>other</HeaderLink>
      </Link>

      <Link href="/" passHref>
        <HeaderLink href="/" active={route.pathname === '/'}>
          resume
        </HeaderLink>
      </Link>
    </HeaderContainer>
  );
};
