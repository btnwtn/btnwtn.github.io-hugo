+++
date = "2016-11-02T14:55:36-07:00"
draft = false
title = "Math: the React.js Way"
image = "math-js-header.jpg"
+++

Have you found yourself doing intense math problems using weird symbols like `+`,
`−`, `÷`, and `×`? Do you enjoy the speed and developer experience of React.js? Thanks
to *react-real-math* you can now harness the power of the React.js Virtual DOM to
make your Math blazing🔥 fast!<!--more-->

*react-real-math* provides an incredibly easy to understand API out of the box,
for free. What a deal! Let’s take a look at an example of *react-real-math* in
action. Consider this old-school almost obfuscated math problem:

```
1+1×2=?
```

Incredibly hard to parse. But with *react-real-math* this is a breeze to understand:

```
import { computeValue, Multiple, One, Two } from 'react-real-math'
console.log(computeValue(
  <Multiply by={<Two/>}>
    <One/>
  </Multiply>
))
```

Now that’s what I call 💯💯💯 family. Blazing fast, amazing DX, and great DSL. Not
only is this incredibly easy to read, new developers can easily understand
what’s going on here. If you would like to contribute to *react-real-math* please
check out the project’s Github:

https://github.com/btnwtn/react-real-math
