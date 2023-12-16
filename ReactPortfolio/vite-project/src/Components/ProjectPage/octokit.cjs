const { Octokit, App } = require("octokit");

const octokit = new Octokit({
    auth: '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'
});
async function run(){

    try {
        const response = await octokit.request("GET /users/{owner}/repos", {
            owner: "Habeebah157",
            per_page:1000,
        });
    
        for(let i = 0; i<response.data.length; i++){
            console.log(response.data[i].language); // You can handle the response data here
        }
       
    } catch (error) {
        console.log("THERE IS AN ERROR")
        console.error(error); // Handle any errors that may occur during the request
    }

}
run()
console.log("HELLO")
