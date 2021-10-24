---
path: ownership
date: 2021-10-24T10:59:58.759Z
title: Rust ownership
---

---

** Disclaimer: This blog post is WIP **

---

Rust has a unique feature called **ownership** which causes a lot of confusion when learning Rust. Here are some concepts along with examples demonstrating those concepts in practise:

### Copy and Clone types

Rust types, within the context of ownership, fall into these two categories

**Copy:** bool, char, i8 - i128, u8 - u128, isize, usize, f32, f64, Array, Tuple, Slice, str, Function.

**Clone:** All types that implement _std:clone:Clone_ trait.

Being a _Copy type_ basically mean you dont need to worry about ownership. For all other cases keep on reading!

### Move semantics

Certain operations in the Rust language are said to have _move semantics_ which means those operations cause a _movement of ownership_.

#### The One Operation which have move semantics

**Assignment operation** as in

```rust
let hello = "world";
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

Why was copy-type not dropped? It is because non-copy type lives on the **heap** and the copy-type lives on the **stack**. Difference between stack and heap would complicate this simple discussion of ownership but more importantly is beyond my understanding. So I recommend reading [The Book](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap) if you want to dive deeper.
