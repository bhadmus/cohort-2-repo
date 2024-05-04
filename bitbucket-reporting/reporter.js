const report = require("multiple-cucumber-html-reporter");


report.generate({
    jsonDir:"./results/json/",
    reportPath: "./results/html/",
})