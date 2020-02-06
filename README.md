# File Uploader

## What is it?
A web application using Node.js and Express that allows the user to upload a valid file using a website to AWS S3 buckets. The views are written in Handlebars. The front and back end both check to see if the file uploaded is valid.

## How do I use it?
### Prerequsites
- Node.js
- NPM

In the terminal type:
```shell
> npm i
```
This will install all the Node packages that the project uses.

### Config JSON File
For all user-specific details such as the S3 bucket details, port number, and an array of accepted MIME Types, I use a `config.json` file in the root directory.
Format:
```js
{
    "accessKey": "", // S3 Bucket Access Key
    "secretAccessKey": "", // S3 Bucket Secret Access Key
    "bucketName": "", // S3 Bucket Access Key
    "port": 3100, // Local Host Port to Use
    "acceptedMIMETypes": [ // Array of exepted MIME Types
        "",
        ""
    ]
}

```

## Possible New Features
- Uploading to Google Drive, Dropbox, OneDrive, box, etc.
