import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Colors, Fonts, Spacing } from '../design-system';

const HeaderContainer = styled.header`
  background-color: ${Colors.solids.raisinBlack};
  padding: ${Spacing.small}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 2;
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
      <Link href="/projects" passHref>
        <HeaderLink active={route.pathname === '/projects'}>projects</HeaderLink>
      </Link>

      <Link href="/" passHref>
        <HeaderLink href="/" active={route.pathname === '/'}>
          resume
        </HeaderLink>
      </Link>
    </HeaderContainer>
  );
};
