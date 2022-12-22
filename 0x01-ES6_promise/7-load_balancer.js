export default function loadBalancer(chinaDownload, USDownload) {
  Promise.any([chinaDownload, USDownload])
    .then(
      (values) => {
        const data = values;
        return data;
      },
    );
}
