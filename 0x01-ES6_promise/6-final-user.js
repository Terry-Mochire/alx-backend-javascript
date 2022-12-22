import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const arr = [];
  const arrObject = {};

  return Promise.all([photo, user])
    .then(
      (values) => {
        arrObject.status = values[0].status;
      },
    ).catch(
      () => {
        arrObject.status = 'rejected';
      },
    ).finally(
      () => {
        arr.push(arrObject);
        return arr;
      },
    );
}
