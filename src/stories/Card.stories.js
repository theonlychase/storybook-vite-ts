import Card from '@/components/Card/Card.vue';
export default {
  title: "Example/Card",
  component: Card,
  argTypes: {

  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: `
    <Card v-bind="args">
      <template v-for="arg in args.slots" #[arg]>
        {{ args[arg] }}
      </template>
    </Card>
  `,
});

export const Default = Template.bind({});
Default.args = {
  borderless: false,
  contentClass: null,
  default: null,
  header: null,
  footer: null,
  slots: ['default', 'header', 'media', 'footer'],
};
