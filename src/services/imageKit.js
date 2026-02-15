const ImageKit = require('@imagekit/nodejs');
require('dotenv').config()
const client = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});
const saveImgToImageKit = async ({ buffer, originalname }) => {
    const base64File = buffer.toString("base64");
    const response = await client.files.upload({
        file: base64File,
        fileName: originalname,
        folder: "/posts"
    });

    return response;
}

module.exports = saveImgToImageKit;