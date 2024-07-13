const InstagramService = require("../../services/igServices");
const igService = new InstagramService();
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
// post photo
const postPhotoToInsta = async (path, caption) => {
  try {
    await igService.login();
    const publishResult = await igService.ig.publish.photo({
      file: await readFileAsync(path),
      caption: caption,
    });
    return publishResult;
  } catch (err) {
    return err;
  }
};

module.exports = postPhotoToInsta;

// const postPhotoToInsta = (async (path) => {

// //   // location
// //   const { latitude, longitude, searchQuery } = {
// //     latitude: 0.0,
// //     longitude: 0.0,
// //     // not required
// //     searchQuery: 'place',
// //   };

// //   /**
// //    * Get the place
// //    * If searchQuery is undefined, you'll get the nearest places to your location
// //    * this is the same as in the upload (-configure) dialog in the app
// //    */
// //   const locations = await ig.search.location(latitude, longitude, searchQuery);
// //   /**
// //    * Get the first venue
// //    * In the real world you would check the returned locations
// //    */
// //   const mediaLocation = locations[0];
// //   console.log(mediaLocation);
// // // location

//   const publishResult = await ig.publish.photo({
//     // read the file into a Buffer
//     file: await readFileAsync(path),
//     // optional, default ''
//     caption: 'my caption',
//     // optional
//     //location: mediaLocation,
//     // optional
//     // usertags: {
//     //   in: [
//     //     // tag the user 'instagram' @ (0.5 | 0.5)
//     //     await generateUsertagFromName('instagram', 0.5, 0.5),
//     //   ],
//     // },
//   });

//   console.log(publishResult);
// })
