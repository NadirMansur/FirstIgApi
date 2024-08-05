const { get } = require("request-promise");
const InstagramService = require("../../services/igServices");
const igService = new InstagramService();

const { ig } = igService;

const uploadStoryFromWeb = async (link) => {
  console.log("uploadStoryFromWeb");
  try {
    if (!link) {
      throw new Error("The provided link is invalid or undefined.");
    }
    await igService.login();
    const imageBuffer = await get({
      uri: link,
      encoding: null, // only this way a Buffer is returned
    });

    const publishResult = await ig.publish.story({
      file: imageBuffer,
    });
    return publishResult;
  } catch (err) {
    console.log("error al publicar historia", err);
    return err;
  }
};

module.exports = uploadStoryFromWeb;
