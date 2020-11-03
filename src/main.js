const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = () => rl.question("What is your query?", function(query) {
    let result = fs.readFileSync(process.cwd() + "\\notes.json").toString();
    let json = JSON.parse(result)
    json = json.filter((e)=>{
        return e.script.indexOf(query) > -1;
    })
    json.map((e)=>{
        console.log(e.name) 
        console.log(e.script)
    })
    question()
});
question()