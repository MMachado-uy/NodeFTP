const ftp = require("basic-ftp");
const fs = require("fs");

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

        await client.upload(fs.createReadStream("test/to_upload.txt"), "uploaded.txt");
        await client.download(fs.createWriteStream("test/downloaded.txt"), "README.txt", 0);
        console.log(await client.list())
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}