---
date: 2022-07-13
category:
  - History
tag:
  - Geo
image:
    - blog/test2.png
description:
    - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
---

# Lorem Ipsum is simply dummy 

## Heading 2

Here is the content.

### Heading 3

Here is the content.

```flow
st=>start: Start|past:>http://www.framely.io[blank]
e=>end: End|future:>http://www.framely.io
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```