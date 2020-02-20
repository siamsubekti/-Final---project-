import API from '../api';

export function doAuth(userName, password) {
  return API.post('/auth', {username: userName, password: password});
}

export function getUser() {
  return API.get('/users');
}

export function doCreateUserApi(userName, password, email) {
  return API.post('/users', {
    userName: userName,
    password: password,
    email: email,
    roles: [
      {
        id: 5,
      },
    ],
  });
}

// export function doUpdateUserApi(id, userName, password, email ) {
//     return API.post('/users/',
//         {
//             id: id,
//             username: userName,
//             password: password,
//             email:email,
//         }
//     );
// }
