import { createElement, type FC, type PropsWithChildren } from 'react';

import { type fontWeightType } from '@constants/typography';

import s from './Heading.module.scss';

type levelType = '1' | '2' | '3' | '4' | '5';

interface IHeading {
  level: levelType;
  fontWeight?: fontWeightType;
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
  children,
  level,
  fontWeight = '400',
}) => {
  return createElement(
    `h${level}`,
    { className: s.heading, style: { fontWeight } },
    children,
  );
};

export default Heading;
