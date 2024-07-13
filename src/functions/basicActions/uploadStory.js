/* tslint:disable:no-console */
const InstagramService = require("../../services/igServices");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile)
const igService = new InstagramService();

const { ig } = igService;

const uploadStory = async (pathImg) => {
  try {
    await igService.login();
    const file = await readFileAsync(pathImg);
    const response = await ig.publish.story({ file });
    return response;
  } catch (err) {
    return err;
  }
};

module.exports = uploadStory;
