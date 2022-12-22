import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const arr = [];

  return Promise.all([user, photo])
    .then(
      (values) => arr.push(`status: ${values[0].status}`),
    );
}
