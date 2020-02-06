const checkMimeType = (mimeType) => {
    const config = require('./config.json');
    return config.AcceptedMIMETypes.includes(mimeType);
};
const uploadFile = (s3, file, cb) => {
    const config = require('./config.json');
    const params = {
        Bucket: config.bucketName,
        Key: file.name,
        Body: Buffer.from(file.data, 'binary')
    };
    s3.upload(params, cb);
};

module.exports = {
    checkMimeType,
    uploadFile
};
