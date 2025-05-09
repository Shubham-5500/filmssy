import admin from '../config/firebase.js';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) return res.status(401).json({ message: 'No token' });
  const token = header.split(' ')[1];
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    let user = await User.findOne({ firebaseUid: decoded.uid });
    if (!user) {
      const firebaseUser = await admin.auth().getUser(decoded.uid);
      user = await User.create({
        firebaseUid: decoded.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
      });
    }
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Auth failed' });
  }
};
export const admin_only = (req, res, next) => {
  if (req.user.role === 'admin') next();
  else res.status(403).json({ message: 'Admins only' });
};
