let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;

// console.table(user);
const keys = Object.keys(user);
// console.log(keys); // ["age", "hobby", "name", "premium", "mood", "full time"]
// console.log(Object.values(user)); //[20, "skydiving", "Mango", false, "happy", true]
// Write code under this line
for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
