const config: { [index: string]: { message: any } } = {};
export default config;

function load(configPath: string) {
  return fetch(configPath)
    .then(result => result.json())
    .then((newconfig) => {
      for (const prop in config) {
        delete config[prop]
      }
      for (const prop in newconfig) {
        config[prop] = newconfig[prop]
      }
      return config;
    });
}
export { load }