module.exports = {
    experiments: {
        source: 'skypack'
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        ["@snowpack/plugin-run-script", {
            cmd: "dotnet fable ./App.fsproj",
            watch: "dotnet fable watch ./App.fsproj",
            output: "stream"
        }]
    ],
    devOptions: {
        output: "stream"
    },
}
