export default function getStudentsByLocation(obj, city) {
  return obj.filter((obj) => obj.location === city);
}
