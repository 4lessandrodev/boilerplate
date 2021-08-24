export const stories = ['../src/components/**/stories.tsx'];
export const addons = ['@storybook/addon-essentials', 'storybook-addon-next-router'];
export async function babel(options) {
  return ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  });
}
export function webpackFinal(config) {
  config.resolve.modules.push(`${process.cwd()}/src`);
  return config;
}
