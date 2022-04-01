const ENDPOINT = 'https://hook.us1.make.com/aghmbe2jweo56wazf3vlbg6ns81c3xrk';

export default function addLead(data = {}) {
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
