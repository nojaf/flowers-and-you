/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    ["@snowpack/plugin-run-script", {
      cmd: "dotnet fable ../fsharp/App.fsproj --outDir ./src/bin",
      watch: "dotnet fable watch ../fsharp/App.fsproj --outDir ./src/bin",
      output: "stream"
    }]],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    output: "stream"
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};