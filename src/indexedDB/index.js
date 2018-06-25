import Dexie from 'dexie';

var db = new Dexie("ProfileDatabase");

db.version(1).stores({ users: "_id,name,email,url_img" });

export function addData(user) {
    const data = {
        _id: user[0].userID,
        name: user[0].name,
        email: user[0].email,
        url_img: `http://localhost:3000/api/img/${user[0].userID}`
    }
    db.users.add(data);
    console.log('add ProfileDatabase', data);
}

export function getData(logUser) {
    db.users.toArray(function (users) {
        var data = users;
            logUser(users)
            console.log('get ProfileDatabase', data);
    })
}

export function deleteData (id) {
    db.users.delete(id)
}
