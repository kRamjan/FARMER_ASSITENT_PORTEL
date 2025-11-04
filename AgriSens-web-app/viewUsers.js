// viewUsers.js
// Simple script to list users from the 'agrisens' MongoDB used by the app.

const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/agrisens', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB at mongodb://localhost:27017/agrisens');

    const UserSchema = new mongoose.Schema({ email: String, password: String }, { collection: 'users' });
    const User = mongoose.model('User', UserSchema);

    // Fetch users (showing only _id and email by default)
    const users = await User.find({}, { email: 1 }).lean();
    if (!users || users.length === 0) {
      console.log('No users found in the users collection.');
    } else {
      console.log(`Found ${users.length} user(s):`);
      users.forEach(u => console.log(JSON.stringify(u)));
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error connecting to MongoDB or fetching users:', err.message || err);
    process.exitCode = 1;
  }
}

main();
