// addTestUser.js
// Script to add a test user to the agrisens MongoDB database

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/agrisens', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const UserSchema = new mongoose.Schema({ email: String, password: String }, { collection: 'users' });
    const User = mongoose.model('User', UserSchema);

    const email = 'testuser@example.com';
    const plainPassword = 'Password123!';

    const existing = await User.findOne({ email });
    if (existing) {
      console.log('User already exists:', existing.email);
      await mongoose.disconnect();
      return;
    }

    const hashed = await bcrypt.hash(plainPassword, 10);
    const created = await User.create({ email, password: hashed });
    console.log('Created user:', { _id: created._id, email: created.email });

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error adding test user:', err.message || err);
    process.exitCode = 1;
  }
}

main();
