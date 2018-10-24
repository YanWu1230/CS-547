const result = require("./result");


const constructorMethod = app => {
    app.use("/result", result);
    app.get("/", async (req, res) => {
        res.render("palindrome/index", {
            title: "The Best Palindrome Checker in the World!"
        })
    })
}

module.exports = constructorMethod;