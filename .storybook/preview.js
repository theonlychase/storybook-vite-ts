import '@unocss/reset/tailwind.css';
import 'uno.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story, { name, viewMode }) => ({
    components: { story },
    template: `
      <div id="app" class="${
        viewMode === 'story' ? 'flex flex-col min-h-screen' : ''
      }">
        <story />
      </div>
    `,
  }),
];
