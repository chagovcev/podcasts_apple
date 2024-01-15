import { createElement, type FC, type PropsWithChildren } from 'react';
import cx from 'classnames';

import { type fontWeightType } from '@constants/typography';

import s from './Body.module.scss';

type sizeType = 'm' | 's' | 'xs' | 'xxs';
type bodyType = 'span' | 'p' | 'label';

interface IBody {
  size?: sizeType;
  fontWeight?: fontWeightType;
  type?: bodyType;
}

const Body: FC<PropsWithChildren<IBody>> = ({
  size = 'm',
  fontWeight = '400',
  type = 'p',
  children,
}) => {
  return createElement(
    type,
    { className: cx(s.body, s[size]), style: { fontWeight } },
    children,
  );
};

export default Body;
