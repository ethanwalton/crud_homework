const express = require("express"), app = express(),
router = express.Router(),
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
subscribersController = require("./controllers/subscribersController"),
methodOverride = require("method-override"),
layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/confetti_cuisine",
    {useNewUrlParser: true});
mongoose.set("useCreateIndex", true);


app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
router.use(layouts);

router.get("/", (req, res) => {
    res.render("index");
});


   
router.use(express.static("public"))
app.use(
    express.urlencoded({
        extended: false
    })
);

router.use(express.json());
router.use(methodOverride("_method", {methods: ["POST", "GET"]}));




router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port: ${app.get("port")}`)
});

