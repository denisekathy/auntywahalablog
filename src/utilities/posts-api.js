import { getToken } from "./users-service";
const BASE_URL = '/api/posts';



export function getAll() {
    const token = getToken();
    return fetch(BASE_URL, {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => res.json());
  }

export function create(post) {
   const token = getToken();
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' ,
        'Authorization':`Bearer ${token}`,
    },
		body: JSON.stringify(post),
	}).then(res => res.json());
}
export function update(post) {
    const token = getToken();
	return fetch(`${BASE_URL}/${post._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' ,
        'Authorization':`Bearer ${token}`,
    },
		body: JSON.stringify(post),
	}).then(res => res.json());
}

export function deleteOne(id) {
    const token = getToken();
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
        headers: { 'content-type': 'application/json' ,
        'Authorization':`Bearer ${token}`,
    },
	}).then(res => res.json());
}
