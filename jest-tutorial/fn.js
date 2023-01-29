const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({name, age, gender: undefined}), // 이름과 나이 입력받아서 User 객체를 return 한다.
  throwError: () => {
    throw new Error('xxx');
  },
  getName: (callback) => {
    const name = 'seungha';
    setTimeout
    (() => {
      callback(name);
      // throw new Error('sever error');
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    })
  }
};

module.exports = fn;