export default () => {
  const config = useRuntimeConfig();
  return {
    BASE_URL: config.BASE_URL || "https://my-json-server.typicode.com/fikrimarzuki/ev-test"
  };
};