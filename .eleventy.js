module.exports = function (config) {
  config.addPassthroughCopy('src/assets/');
  config.addPassthroughCopy('src/robots.txt');

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
