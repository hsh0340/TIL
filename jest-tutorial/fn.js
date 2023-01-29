const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({ name, age, gender: undefined }), // 이름과 나이 입력받아서 User 객체를 return 한다.
};

module.exports = fn;