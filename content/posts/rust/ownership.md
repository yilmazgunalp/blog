---
path: ownership
date: 2021-10-24T10:59:58.759Z
title: Rust ownership
---

Rust has a unique feature called **ownership** which causes a lot of confusion when learning Rust. Here are some concepts along with examples demonstrating those concepts in practise:

### Copy and Move types

Rust types, within the context of ownership, fall into these two categories

**Copy:** bool, char, i8 - i128, u8 - u128, isize, usize, f32, f64, Array, Tuple[^1], Slice, str, Function.

**Move:** All that is not Copy.

Being a _Copy type_ basically mean you dont need to worry about ownership. For all other cases keep on reading!

### Move semantics

Certain operations in the Rust language are said to have _move semantics_ which means those operations cause a _movement of ownership_.

#### Three operations which have move semantics

**1. Assignment operation**

```rust
let hello = "world";
```

**2. Passing a value to a function as paramater**

```rust
let hello = "world";
print_word(hello); // calling a function with a value has move semantics

fn print_word(word) {
    println!("{}", word);
}
```

**3. Returning a value from a function**

```rust
let hello = "world";
print_word(hello);

fn return_word(word) {
    word // returning a value has move semantics
}
```

So I said you don't need to worry about ownership for Copy types. Let's see it in action:

```rust
fn main() {
 let tup = ("hello", 42);
 let one = tup;
 let two = tup;
}
```

I have created a tuple and first assigned the tuple to variable **one** and then assigned it again to variable **two**. This program will compile.

Now try it with a non-Copy type like String:

```rust
fn main() {
 let non_copy_type = String::from("hello");
 let one = non_copy_type;
 let two = non_copy_type;
}
```

This code won't compile and will print a message like this: _error[E0382]: use of moved value: `none_copy_type`_

And the reason for the error is that when you assign a non-Copy value **ownership** (of the value) is moved thus the term _move semantics_.

So `let one = non_copy_type` moves the ownership of `non_copy_type` to variable _one_ and then `let two = non_copy_type` moves the ownership of `non_copy_type` to variable _two_. This would be all good however Rust has this rule that **a value can have only one owner at a time!**

### Scope and drop

Definition of _scope_ from [The Book](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#variable-scope): _A scope is the range within a program for which an item is valid._ Scope is important for ownership because of the third rule of ownership. I already mentioned the first two rules implicitly above as one.Here they are again but split into two:

Rules:

1. Each value in Rust has a variable that’s called its owner.
2. There can only be one owner at a time.

So what is the third rule?

3. When the owner goes out of scope, the value will be dropped.

What does it mean in practise:

```rust
{
 let non_copy_type = String::from("hello");
 let copy_type = 42;
} // non_copy_type drops dead here
```

Above a scope is created by curly braces and then a copy and a non-copy variable created. At the end of the scope non-copy type is dropped. **Being dropped means memory allocated for that value is freed.**

Why was copy-type not dropped? It is because non-copy type lives on the **heap** and the copy-type lives on the **stack**. Difference between stack and heap would complicate this simple discussion of ownership but more importantly is beyond my expertise. So I recommend reading [The Book](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap) if you want to dive deeper.

### References

If you dont want to worry about ownership or move semantics, you can simply use _references_ instead of the values directly. References allow you to acces the values without ownership. Accessing values this way is called **borrowing** in Rust.

Borrowing is done with _&_

```rust
fn main() {
 let non_copy_type = String::from("hello");
 let one = &non_copy_type;
 let two = &non_copy_type;
}
```

Above is the same code that wouldn't compile. But this time if I use references code will compile. Variables _one_ and _two_ no longer fighting over the ownership of the _non_copy_type_'s value. They are just **borrowing** it. It might be confusing as you might think how can two diffrent things borrow the same value at the same time._Borrowing_ is a misnomer. In Rust it means **accesing** the value to read and/or write.

Read and write references are different. Read references are created as you saw with _&_ and write references with _&mut_.

As you might suspect, in order to avoid one reference accessing a value to read while another one trying to write to it, there are some [rules](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#the-rules-of-references) around borrowing.

[^1] Only Tuples of copy types are Copy
