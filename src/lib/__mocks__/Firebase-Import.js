export const initializeApp = () => Promise.resolve({});
// Autenticación
export const getAuth = () => ({});
// { currentUser: { displayName: '' } };
// eslint-disable-next-line max-len
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => { console.log('h'); return Promise.resolve({ user: { email, password } }); });
export const updateProfile = jest.fn((fullName) => ({ displayName: fullName }));
export const GoogleAuthProvider = () => ({});
export const sendEmailVerification = () => Promise.resolve({});
export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));

// eslint-disable-next-line max-len
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));
export const signOut = jest.fn(() => Promise.resolve({}));
export const onAuthStateChanged = () => Promise.resolve({});

// getCurrentUser
export const getCurrentUser = jest.fn(() => ({ displayName: 'Lady Gaga' }));

// Firestore
export const getFirestore = () => Promise.resolve({});
export const addDoc = (collection, { user, uid, photo }) => Promise.resolve({ user, uid, photo });
export const collection = (db, publicaciones) => { return {}};
export const onSnapshot = (query, callback) => Promise.resolve({});
export const Timestamp = () => Promise.resolve({});
export const query = () => Promise.resolve({});
export const orderBy = (dateTime, desc) => { return {}};
export const deleteDoc = () => Promise.resolve({});
export const doc = (db, publicaciones, id) => {return {}};
export const getDoc = () => Promise.resolve({});
export const updateDoc = () => Promise.resolve({});
export const arrayUnion = () => Promise.resolve({});
export const arrayRemove = () => Promise.resolve({});
