/**
 * 1. 绑定父类原型链
 * 2. 构造方法回指自己
 * 3. 初始化时绑定自己的 this 调用父类构造方法，即 class 默认执行 super()
 *
 * @param SubClass
 * @param SuperClass
 */
export const myExtends = (SubClass: Function, SuperClass: Function) => {
  // 1. 对象属性值搬运
  for (var p in SuperClass)  {
    if (Object.prototype.hasOwnProperty.call(SuperClass, p))  {
      // @ts-ignore
      SubClass[p] = SuperClass[p];
    }
  }

  // 原型链继承
  // 2 继承父级原型链
  SubClass.prototype = Object.create(SuperClass.prototype)
  // 3. 恢复构造函数为自身
  SubClass.constructor = SubClass
};

var MyPerson = function Person(name: string) {
  // @ts-ignore
  this.name = name;
}
MyPerson.prototype.printName = function () {
    console.log('This is printName');
};
// @ts-ignore
MyPerson.hello = function () {
    console.log('static');
};


const MyStudent = function Student (name: string, score: number) {
  const Super = MyPerson
  // 构造函数继承
  // 1. 调用父类的构造方法
  // @ts-ignore
  const _this = Super.call(this, name) || this
  _this.score = score
  return _this
}

myExtends(MyStudent, MyPerson)

MyStudent.prototype.printScore = function () {
  console.log('This is printScore');
};

// @Test

// @ts-ignore
const st = new MyStudent('flcwl', 90)
// @ts-ignore
st.printScore(), st.printName(), MyStudent.hello()
console.log(st);

