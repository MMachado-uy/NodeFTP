const ftp = require("basic-ftp");
require("dotenv").config();

example()
 
async function example() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            port: process.env.DEFAULT_PORT
        })
        await client.cd(process.env.DEFAULT_FOLDER);

        console.log(await client.list())
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}