import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser(firstName, lastName);
    const photo = await uploadPhoto(fileName);
    return [user, photo];
  } catch (error) {
    return [null, null, error];
  }
}
