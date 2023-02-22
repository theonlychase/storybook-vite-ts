import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Vue3 UI Library',
  brandTarget: '_self',
});

addons.setConfig({
  theme
});
