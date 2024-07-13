// igServices.js
const { IgApiClient } = require("instagram-private-api");

class InstagramService {
  constructor() {
    this.ig = new IgApiClient();
    this.ig.state.generateDevice(process.env.IG_USERNAME);
  }

  async login() {
    await this.ig.account.login(
      process.env.IG_USERNAME,
      process.env.IG_PASSWORD
    );
  }
}

module.exports = InstagramService;
