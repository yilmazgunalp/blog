---
path: computation
date: 2020-07-30T10:59:58.759Z
title: What is computation?
---

Here is a piece of code:

```4 + 5;```

This piece of code computes the sum of 4 and 5. The symbol `+` is the representation of this computation and ‘sum’ is its name which quite frankly sums it up really well!

Now here is the same computation in human readable format:

4+5

Yes, that semicolon at the end was not dictated by some punctuation rule. Honestly does anyone really know where a semicolon goes??

I could carve this computation on a tree trunk in a park and anyone who sees it would be burdened by carrying it out for me and telling themselves that the result is 9.Trust me this burden would be nothing compared to the misery they would be exposed to if instead I were to draw a heart with my name on one side and the name of my platonic darling on the other side. How could anyone know what that heart,stuck in between two names, should do? You see,  `+`  is a much merrier symbol of union than a heart. Can you imagine seeing 4+5 carved on a tree and finding yourself wondering if 4 is really into 5 or whether 5 should really just move on with its life.No my friend you would just sum them up and move on!

But let us take it slow and think through how you would do this calculation.Unfortunately unless you were five years old there is no slow way of doing this computation.Sun rises from the east, Donald Trump was elected as president and 5+4 my friend whether you like it or not equals nine.You just don’t think about it!In a flash of light you produce nine from your memory a technique which in computer programming is called memoization.

But assume you were five years old and were just learning how to add numbers. You would first translate 4 to your four fingers in one hand and 5 to all fingers on the other hand, in computer speak, you would be compiling the numbers to finger code (computers use bytecode) and lastly you would be counting all the fingers you picked one by one, which in programming, called an algorithm and woila! Yes you got it sweetheart!

But some computations are not so straight forward.Their inputs might be more complex than numbers. Here is another piece of code:

```“high” + “five”;```

This computation sums two words together.Now how do you even sum words together?The confusion you might encounter dear reader is the abyss that seperates human brain from computers. There is no corresponding computation that takes place in the human brain. Human brain fires some neurons and performs black magic called pattern matching and figures out a meaning.Actually when to come to think of it in this manner; we could say that human brain computes meaning while computers compute data (In programming we would say that computers compute ‘values’ but outside programming word ‘value’ is as vague as the word ‘meaning’ so better to stay away from it for now).

So by merely glancing at the code above your brain would throw away the semicolon(ah there it is again!) and the + sign and those quotations mark what a nuisance they are standing in between us and the true meaning and go wild and picture two hands joining together with a jolly loud sound. If you listen closely you might actually even hear a faint clap by merely looking at this computation. There you go here is your computed meaning.

But what about the dull and dark land that lies beyond the abyss.Let me warn you stranger,you shall find no jolly sounds there but an eerie humming of machinery churning 0s and 1s and just that. The humdrum details of this machinery work might put you to sleep and steer you away from the useful fruits of its labour so allow me to jump ahead.

When computed the result of the above code would be this:

“highfive”

You see, computers have no imagination nor common sense.You ask them to sum two words and they give you this gibberish.One way to define programming would be that it is instructing computers to do computations that produce data humans can understand. So in order to produce a human readable result we would have to change our computation to:

```“high” + “ “ + “five”;```

We told the computer to add a space in between words. Programming can be more elagant however.We can formalize this little computation, dress it in a suit and place some business cards in its pocket and release it to the world to mingle with other programs to wheel and deal.

```rust
fn add_two_words(word1,word2) {
       return word1 + “ “ + word2;
}
```

Now our program has a name and body and it is in business!Its business card says that it is a function which goes by the name “add_two_words”.

Though it is a small town kind of business person.We might have to dress him up a bit more if we want him to look like a big corporate gun who does serious business.Here is a bit more corporate form:
```rust
 fn add_two_words(word1: String , word2: String) → String {
       return word1 + “ “ + word2;
}
```
The Small town guy will literally take your word for it-what a pun!The Corporate guy is much more serious. He will ask you to sign his terms and conditions(static typing in programming)  and if you fail to observe them you will be crushed out of business by the compiler (lawyer in business speak).

A computer program is made up of hundreds and hundreds of these little computations. Programming is all about combining, chaining and composing these computations.  

So there you have it my friend!












