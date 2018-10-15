// подключение express
var express = require("express");
// создаем объект приложения
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


// определяем обработчик для маршрута "/"
app.get("/", function (request, response) {
	// отправляем ответ
	response.render("index", { foo: "bar" });
});
app.get("/index", function (request, response) {
	// отправляем ответ
	response.render("index", { foo: "bar" });
});
app.get("/about", function (request, response) {
	response.render("about", { foo: "bar" });
});
app.get("/post", function (request, response) {
	response.render("post", { foo: "bar" });
});
app.get("/contact", function (request, response) {
	response.render("contact", { foo: "bar" });
});

app.get("/post-data", function (request, response) {
	const post = require("./data/post")
	response.json(post);
})

app.post("/contact", (req, res) => {
	let user = req.body;
	if (user.name && user.email && user.phone && user.message) {
		res.status(200).end();
		//res.end();

	} else {
		res.statusMessage = "404"
		res.send(" Заполните все поля");
	}
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => console.log("listening 3000"));