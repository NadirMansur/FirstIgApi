/* tslint:disable:no-console */
const InstagramService = require("../../services/igServices");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile)
const igService = new InstagramService();

const { ig } = igService;

const postVideo = async (videoPath, coverPathJPG, caption) => {
  try {
    await login();

    const publishResult = await ig.publish.video({
      // read the file into a Buffer
      video: await readFileAsync(videoPath),
      coverImage: await readFileAsync(coverPathJPG),
      camption: caption,
      /*
        this does also support:
        caption (string),  ----+
        usertags,          ----+----> See upload-photo.example.ts
        location,          ----+
       */
    });

    return publishResult;
  } catch (err) {
    return err;
  }
};

module.exports = postVideo;
