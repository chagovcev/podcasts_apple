import { useEffect } from 'react';
import type { Decorator, Preview } from '@storybook/react';

import '../src/assets/themes.scss';

const withThemeDecorator: Decorator = (Story, context) => {
  useEffect(() => {
    const { theme } = context.globals;

    document.documentElement.dataset.theme = theme;
  }, [context]);

  return <Story />;
};

export const decorators = [withThemeDecorator];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  layout: 'centered',
};

const preview: Preview = {};
export default preview;
