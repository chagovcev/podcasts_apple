import type { StorybookConfig } from '@storybook/react-webpack5';

import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-webpack5',
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['..\\public'],
  webpackFinal: async (config) => {
    if (!config?.resolve?.alias) return config;

    config.resolve.alias = {
      ...config?.resolve?.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@features': path.resolve(__dirname, '../src/features'),
      '@providers': path.resolve(__dirname, '../src/providers'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@types': path.resolve(__dirname, '../src/types'),
    };

    return config;
  },
};
export default config;
