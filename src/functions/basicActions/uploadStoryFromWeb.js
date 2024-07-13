const { get } = require("request-promise");
const InstagramService = require("../../services/igServices");
const igService = new InstagramService();

const { ig } = igService;

const uploadStoryFromWeb = async (link) => {
  try {
    await igService.login();
    const imageBuffer = await get({
      url: link,
      encoding: null, // only this way a Buffer is returned
    });

    const publishResult = await ig.publish.photo({
      file: imageBuffer,
    });
    return publishResult;
  } catch (err) {
    return err;
  }
};

module.exports = uploadStoryFromWeb;
