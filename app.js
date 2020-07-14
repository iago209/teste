const express = require("express");
const app = express();

const rotaUsuario = require("./routes/usuario");
const rotaOrdem_servico = require("./routes/ordem_servico");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header(
		"Access-Control-Allow-Origin",
		"http://157.230.237.196/teste/system/"
	);
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Header",
		"Origin, X-Requested-With, Content-Type, Authorization"
	);

	if (req.method == "OPTIONS") {
		res.header("Access-Controlo-Allow-Methods", " PUT, POST");
		return res.status(200).send({});
	}

	next();
});

app.use("/ordem_servico", rotaOrdem_servico);
app.use("/usuario", rotaUsuario);

app.use((req, rest, next) => {
	const error = new Error("Não Encontrado");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	return res
		.status(error.status || 500)
		.send({ erro: { mensagem: error.message } });
});

module.exports = app;
