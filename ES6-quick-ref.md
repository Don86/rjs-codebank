# Basic Functions (ES6)

https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be

### Contents

1. `Let` and `Const`
2. Arrow Functions
3. Default parameters
4. `for of` loop
5. `Spread` attributes
6. `Map`
7. Sets
8. Static methods
9. Getters & Setters
10. Conditional Rendering - ternary operators

## 1. `Let` and `Const`

`Let` is similar to `var`, but is only accessible in the block level in which it's defined.

```
if (true) {
    let a = 50;
    console.log(a); //40
}

console.log(a) //undef
```

You can also do "isolated overriding", isolated to that block level:

```
let a = 50
let b = 100
if (true) {
    let a = 60;
    var c = 10;
    console.log(a/c) // 6
    console.log(b/c) // 10
}
console.log(c) // 10
console.log(a) // 50
```

`Const` is easy: you can't change its value.

## 2. Arrow function

* Seems to be used for throwaway functions that you're only going to use once.
* Reddit says: `onClick={()=>handleClick()}` is discouraged because you're going to init and call a new function on every `render` call.
* Write a `handleClick()` as a private function within that particular `class`, and bind the function in the class constructor instead.

## 10. Conditional Rendering - Ternary Operators

Shortcut for an if-else block. Syntax:
```
condition? expr_if_true : expr_if_false
```

e.g. these two do the same thing. As an if-else block:
```
var age = 15;
if (age >= 18) {
    console.log("You are an adult");
} else{
    console.log("You are a kid")
}
```
As a ternary operator:
```
console.log((age>= 18) ? "you are an adult": "you are a kid")
```
