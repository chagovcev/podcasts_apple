import { useEffect } from 'react';
import type { Decorator, Preview, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { withRouter } from 'storybook-addon-react-router-v6';

import '../src/assets/themes.scss';

const withThemeDecorator: Decorator = (Story, context) => {
  useEffect(() => {
    const { theme } = context.globals;

    // @ts-ignore
    document.documentElement.dataset.theme = theme;
  }, [context]);

  return <Story />;
};

export const withStore = (StoryFn: StoryFn) => {
  return (
    <Provider store={store}>
      <StoryFn />
    </Provider>
  );
};

export const decorators = [withThemeDecorator, withStore, withRouter];

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

const preview: Preview = {};
export default preview;
