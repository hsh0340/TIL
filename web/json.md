# JSON
JSON(JavaScript Object Notation)은 경량 데잉터 교환 형식으로, JavaScript 객체 표기법을 기반으로 한다. JSON은 key-value 쌍으로 이루어진 데이터 객체를 표현하며, 다양한 프로그래밍 언어에서 지원도니다. 예를 들어, 다음과 같이 JSON 형식으로 데이터를 표현할 수 있다.

```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": ["value3_1", "value3_2"],
  "key4": {
    "subKey1": "subValue1",
    "subKey2": "subValue2"
  }
}
```

value는 숫자, 문자열, 배열, 객체 등 다양한 형태를 갖는다. 배열은 대괄호로, 객체는 중괄호로 묶여있다.

```json
{
  "name": {
    "firstName": "Seungha",
    "lastName": "Han"
  },
  "age": 25, 
  "city": "Seoul",
  "friends": ["Yessul", "Yajin"]
}
```

JSON은 가벼우며, 텍스트 형식으로 이루어져 있어서 사람과 기계 모두가 쉽게 읽고 쓸 수 있다. 또한, 다양한 언어에서 JSON 데이터를 처리할 수 있으며, RESTful API 등에서 자주 사용된다.