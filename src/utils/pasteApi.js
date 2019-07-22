const url = "http://localhost:8080/";

function handleJsonResponse(response) {
  if (response.status !== 200) {
    throw new Error(`Invalid request ${response.status}`);
  }
  return response.json();
}

export function getPaste(id) {
  return fetch(`${url}${id}`).then(handleJsonResponse);
}

export function postPaste(paste) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paste)
  }).then(handleJsonResponse);
}
