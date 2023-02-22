import Card from '@/components/Card/Card.vue';

const setArgTypes = (type) => ({
  control: 'boolean',
  defaultValue: type === 'default',
  description: `${type} slot content`,
  table: {
    type: { summary: 'Named Slot' },
  },
});
export default {
  title: 'Components/Card',
  name: 'Default Card',
  component: Card,
  argTypes: {
    borderless: {
      description: 'Removes the border & padding',
    },
    contentClass: {
      description: 'Custom classes for the default slot content wrapper',
    },
    default: setArgTypes('default'),
    header: setArgTypes('header'),
    footer: setArgTypes('footer'),
    media: setArgTypes('media'),
  },
};

export const Default = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" class="max-w-sm">
        <template v-if="args.default" #default>
          Default Slot Content
        </template>
        <template v-if="args.header" #header>
          Header Slot Content
        </template>
        <template v-if="args.media" #media>
          <img src='https://images.unsplash.com/photo-1511225070737-5af5ac9a690d' alt='Mock Image' width='384' height='256' loading='lazy' />
        </template>
        <template v-if="args.footer" #footer>
          Footer Slot Content
        </template>
      </Card>
    `,
  }),
  args: {
    borderless: false,
    contentClass: '',
    default: true,
    header: false,
    footer: false,
    media: false,
  },
};
