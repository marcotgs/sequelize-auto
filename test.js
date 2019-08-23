var AutoSequilize = require('./index.js');

const auto = new AutoSequilize('AppWorkDB', 'database', "PB<W5%]P9HQKRtAk", {
    host: 'localhost',
    dialect: "mssql",
    directory: "./models",
    camelCase: true,
    dashesForFileName: true,
    additional: {
        timestamps: false
    },
    typescript: true,
    tables: ["acesso_empresas"]
});

auto.run((err) => {
    if (err) throw err;
    else {
        console.log("\x1b[32m", "Sucesso -> Arquivos gerados");
        console.log("\x1b[0m");
    }
});
