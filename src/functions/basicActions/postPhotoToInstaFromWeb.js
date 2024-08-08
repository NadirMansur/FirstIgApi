const { get } = require("request-promise");
const InstagramService = require("../../services/igServices");
const igService = new InstagramService();

// post photo
const postPhotoToInstaFromWeb = async (link, caption) => {
  console.log("postPhotoToInstaFromWeb");

  try {
    await igService.login();
    const imageBuffer = await get({
      url: link,
      encoding: null, // only this way a Buffer is returned
    });

    const publishResult = await igService.ig.publish.photo({
      file: imageBuffer,
      caption: caption,
    });
    return publishResult;
  } catch (err) {
    console.log("error al publicar reel", err);

    return err;
  }
};

module.exports = postPhotoToInstaFromWeb;
