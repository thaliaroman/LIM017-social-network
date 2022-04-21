export const initializeApp = () => Promise.resolve({});
// Autenticación
export const getAuth = () => Promise.resolve({});
// { currentUser: { displayName: '' } };
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));
export const updateProfile = jest.fn((fullName) => ({ displayName: fullName }));
export const GoogleAuthProvider = () => Promise.resolve({});
export const sendEmailVerification = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));
export const signOut = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
// getCurrentUser
export const getCurrentUser = () => Promise.resolve({ Object });
// Firestore
export const getFirestore = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const Timestamp = () => Promise.resolve({});
export const query = () => Promise.resolve({});
export const orderBy = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const doc = () => Promise.resolve({});
export const getDoc = () => Promise.resolve({});
export const updateDoc = () => Promise.resolve({});
export const arrayUnion = () => Promise.resolve({});
export const arrayRemove = () => Promise.resolve({});
