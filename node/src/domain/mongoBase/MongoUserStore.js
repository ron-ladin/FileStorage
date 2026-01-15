const mongoose = require("mongoose");
const User = require("../../models/user");

class MongoUserStore {
  //Converts a raw MongoDB document into a clean JS object.
  docToObj(doc) {
    //if the user not exist
    if (!doc) return null;
    const obj = doc.toObject();
    // handle that The app expects "id", but MongoDB gives "_id"
    obj.id = obj._id;
    return obj;
  }
  // Creates a new user in the database with a manually generated ID.
  async create(user) {
    // Generate the ID manually to handle it before saving
    const id = new mongoose.Types.ObjectId().toString();

    const newUser = new User({
      _id: id, // Set our manual ID as the MongoDB primary key
      username: user.username,
      email: user.email,
      // Support different input formats (password or passwordHash)
      passwordHash: user.password || user.passwordHash,
      image: user.image || user.profilePictureURL || "",
      displayName: user.displayName || user.username,
    });
    //save is a build in func that come with all mongo model that check:
    //if the data fit to the schame ,try to insert to the data base and check that the date save.
    await newUser.save();
    return this.docToObj(newUser);
  }

  async findById(id) {
    const user = await User.findById(id);
    return this.docToObj(user);
  }

  async findByLogin(login) {
    const user = await User.findOne({
      $or: [{ username: login }, { email: login }], // check if the are user with this email or with this user name
    });
    return this.docToObj(user);
  }
}

module.exports = MongoUserStore;
