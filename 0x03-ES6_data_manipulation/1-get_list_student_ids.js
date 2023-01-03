export default function getListStudentIds(obj) {
  if (!Array.isArray(obj)) {
    const response = [];
    return response;
  }
  const response = obj.map((student) => student.id);
  return response;
}
