module.exports = {
  stories: [
    '../docs/**/*.stories.[tj]s'
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-design-assets/register',
    '@storybook/addon-notes/register'
  ]
}
