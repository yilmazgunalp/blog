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
