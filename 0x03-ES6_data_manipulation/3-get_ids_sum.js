export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const sumValue = students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialValue,
  );

  return sumValue;
}
