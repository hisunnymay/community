# Fill Strategy

[[toc]]

## Overview

Information is contained in slots, and for each of them, a couple of decisions will always need to be made:

- Whether or not to collect / fill it
- From whom the information / slot value is offered
- Through what kind of interactions it will be collected / filled

Fill Strategy offers control for these decisions.



## Features

- Slot eventually can be filled or skipped (stays not filled). 
- Slot value can be provided by user or business, with minor differences:
  - User can provide slot value:
    - under no extra condition / always
    - under certain conditions
    - after confirming he/she wants to answer the slot
    - when he/she proactively mentions it first
  - Business can provide slot value by:
    - service function
    - external event 
- Different strategies could lead to interaction change (skipping slot-level annotations)

## How to use

Fill Strategy is always required. Framely will automatically add it for you once the slot is created, and sets the default to [Never Ask](#never-ask) (which behaves sort of like skipping the slot quietly). 

There are six different strategies. A brief comparison of them is listed here for some big picture, and the detailed explanations will be given in the latter sections.

| Strategy name       | Who provides slot value   | How does slot value asked from user                          |    How does slot value initiated by business                 |
| :------------------ | :------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Always Ask          | User                      | always                                                       | /                                                            |
| Conditional         | User                      | under certain conditions that business specifies             | /                                                            |
| Boolean Gate        | User                      | when user explicitly expresses the willingness to answer a bunch of questions about a specific topic <br/> *(which belongs to a composite slot)* | /                                                            |
| User Mentioned      | User                      | when user proactively mentions the slot first                | /                                                            |
| Never Ask           | Business                  | /                                                            | if SlotInit in [Transition](https://framely.github.io/404.html) is set <br/> *which eventually can be a constant, a synchronous service function etc.* |
| External Event      | Business                  | /                                                            | always  <br/> *through external events caused by asynchronous client action* |


### Always Ask

Always Ask suits all the CUXs which collect information from users without any special requirements. It is one of the most frequently used strategies. 

Like the name implied, it tells the bot to ask users for slot value without any additional condition. And once the bot asks, it will not proceed with the conversation until getting an answer. Always Ask doesn't alter or skip any of the standard [Slot Filling](https://framely.github.io/404.html) phases. In other words, slot-level annotations are all welcome to be used.



**[Usage Instruction]**

<Badge type="warning" text="Required" vertical="top" />

- Create a slot
- Set its Fill Strategy to Always Ask
- [Prompts](https://framely.github.io/404.html): at least one question is needed to request slot value from user.

<Badge type="tip" text="Preferred" vertical="top" />

- All annotations relate to [Slot Filling](https://framely.github.io/404.html), including: [Value Recommendation](https://www.framely.ai/reference/annotations/vr.html), [Value Check](https://framely.github.io/404.html) and [Confirmation](https://www.framely.ai/reference/annotations/confirmation.html). You are suggested to use them based on requirements.



**[Example]**

The flower shop wants to collect what kind of colour the user likes for flowers.

To support this, they need to:

- create a slot named colour
- set its Fill Strategy to Always Ask
- add a prompt of "What kind of colour do you like for flowers?"

And the following conversation can be expected:

::: story

**Use case 1**

Bot: *What kind of colour do you like for flowers?*

User: *Red, please.*

:::

::: story

**Usecase 2: Stuck unless getting an answer**

Bot: *What kind of colour do you like for flowers?* 

User: *What do you have for roses? (Digression)*

Bot: *Red and white. (Answer digression)<br/>&emsp;&emsp;What kind of colour do you like for flowers?*

User: *Red, please.*

:::


### Conditional

Conditional is designed for businesses who need to ask and collect information dependently. 

When certain conditions are met, the bot behaves exactly like Always Ask; and if they're not met, slots hosting them will be skipped (neither be asked nor be filled). Notice these conditions can depend on both business logic or users former choice.



**[Usage Instruction]**

<Badge type="warning" text="Required" vertical="top" />

- Create a slot
- Set its Fill Strategy to Conditional, and for the detailed configuration:
  - Ask Condition should be configured like [Condition in Confirmation](https://www.framely.ai/reference/annotations/confirmation.html#condition)
- [Prompts](https://framely.github.io/404.html)

<Badge type="tip" text="Preferred" vertical="top" />

- All annotations relate to [Slot Filling](https://framely.github.io/404.html), including: [Value Recommendation](https://www.framely.ai/reference/annotations/vr.html), [Value Check](https://framely.github.io/404.html) and [Confirmation](https://www.framely.ai/reference/annotations/confirmation.html). You are suggested to use them based on requirements.



**[Example]**

The flower shop wants to collect what kind of colour the user likes for **roses** instead of all flowers (they might just have yellow sunflowers).

To support this, they need to:

- create a slot named flowerType
  - set its Fill Strategy to Always Ask
  - add a prompt of "What kind of flower do you like?"
- create another slot named colour
  - set its Fill Strategy to Conditional with the Ask Conditon set to `flowerrType Equal rose`
  - add a prompt of "What kind of colour would you like for roses?"

And the following conversation can be expected:

::: story

**Use case 1: met condition**

Bot: *What kind of flower do you like?*

User: *Rose*

Bot: *What kind of colour would you like for roses?*

User: *Red, please.*

Bot: *Ok, then your order is done.*

:::

::: story

**Use case 2: not met condition**

Bot: *What kind of flower do you like?*

User: *Sunflower.*

Bot: *Ok, then your order is done.*

:::


### Boolean Gate

Boolean Gate offers control to let users decide whether they're going to answer a thread of questions about a specific topic. This sounds quite similar to [Conditional](#conditional), with the difference that Boolean Gate gathers condition from users DIRECTLY whereas Conditional's conditions are set by businesses (which can indirectly relate to users former answer).

Unlike all the other strategies, Boolean Gate only supports composite slots currently. The HAS-A relationship naturally captures the scenario's intrinsic character. So, if you want the same experience for an entity slot, you should compose it into a frame first.

Boolean Gate will ask users the YES-or-NO question once and once only, then waits for three kinds of answers:

- YES: If the answer is YES, Framely will then follow the depth first rule, and the topological order if slots are under the same frame to interact with users. Everything else works the same.
- Slot value: If the answer is slot value , Framely will take it as a YES for the YES-or-NO question, and then try to find a slot (contianer) for the slot value inside composite slot.
- NO: If the answer is NO, the composite slot will simply be skipped (neither be asked nor be filled).



**[Usage Instruction]**

<Badge type="warning" text="Required" vertical="top" />

- Create a **composite slot**
- Set its Fill Strategy to Boolean Gate, and for the detailed configuration:
  - Boolean Gate: prompts that ask user whether he/she wants to or is able to provide slot values should be set here
  - Affirmatives and Negatives: see [Affirmatives and Negatives in Confirmation](https://www.framely.ai/reference/annotations/confirmation.html#affirmatives-and-negatives)

![boolean-gate](/images/annotation/fillstrategy/booleangate.png)


<Badge type="tip" text="Preferred" vertical="top" />

- All annotations relate to [Slot Filling](https://framely.github.io/404.html), including: [Prompts](https://framely.github.io/404.html), [Value Recommendation](https://www.framely.ai/reference/annotations/vr.html), [Value Check](https://framely.github.io/404.html) and [Confirmation](https://www.framely.ai/reference/annotations/confirmation.html). You are suggested to use them based on requirements.



**[Example]**

Suppose message card requires the user to answer of bunch of questions, which inlcudes: card type, to whom, from whom, message content, font size, font colour, card size, card colour. And the flower shop doesn't want to start the interaction unless users do need to answer them. 

To support this, they need to:

- create a frame named MessageCard, with slots: cardType, toWhom, fromWhom, messageContent, fontColour, fontSize, messageCardColour, messageCardSize. Each of them is set with a prompt.
- create a slot named messageCard, type MessageCard
- set messageCard Fill Strategy to Boolean Gate, with Boolean Gate prompt as "Do you want a message card? (You need to answer up to 8 questions.)"

And the following conversation can be expected:

::: story

**Use case 1: YES**

Bot: *Do you want a message card?*

User: *Yes*

Bot: *What kind of card do you want? We have: 1. birthday card. 2. thanks card ...*

:::

::: story

**Use case 2: Slot value**

Bot: *Do you want a message card?*

User: *Can I have a birthday card?*

Bot: *To whom do you want to send to? ...*

:::

::: story

**Use case 3: NO**

Bot: *Do you want a message card?*

User: *NO*

Bot: *Ok, then your order is done.*

:::


### User Mentioned

User Mentioned means bot will only ask user when he/she proactively mentions it first. 

It is commonly used to support CUXs (or services, to be more accurate) that: 

- Businesses have a default behaviour / choice that could satisfy most users, so they decide to sacrifice minority for majority.
- Businesses have a behaviour / choice they don't want to promote, but still need to handle if it's required.



There are three possible behaviours under User Mentioned:

- When user mentions slot value 
  - under a Single-Valued slot: bot collects the value and moves forward
  - under a Multi-Valued slot: bot collects this value as an entry, and proactively requests for the next entry until the Multi-Valued slot achieves maximum limitation or user doesn't want more.
- When user mentions nothing
  - slots will be skipped (neither be asked nor be filled), regardless of Single-Valued or Multi-Valued



**[Usage Instruction]**

<Badge type="warning" text="Required" vertical="top" />

- Create a slot
- Set its Fill Strategy to User Mentioned
- [Prompts](https://framely.github.io/404.html): Prompts are still required as the slot value user mentioned may not be qualified. For example, users might say something bots cannot understand, or offer some slot value that fails the Value Check. In these cases, re-prompt is needed to request the slot value from user again.

<Badge type="tip" text="Preferred" vertical="top" />

- All annotations relate to [Slot Filling](https://framely.github.io/404.html), including: [Value Recommendation](https://www.framely.ai/reference/annotations/vr.html), [Value Check](https://framely.github.io/404.html) and [Confirmation](https://www.framely.ai/reference/annotations/confirmation.html). You are suggested to use them based on requirements.



**[Example]**

Suppose most people don't want a message card when they buy flowers, so the flower shop decides to make a message card as a "hidden surprise". 

To support this, they need to:

- create a slot named messageCard
- set its Fill Strategy to User Mentioned
- add a prompt of "What message do you want to leave?"

And the following conversation can be expected: 

::: story

**Use case 1: user mentions**

Bot: *What kind of flower do you like?*

User: *Rose<br/>&emsp;&emsp;Oh, can you leave a message of "How many loved your moments of glad grace..."*

Bot: *Just leave the note for you.<br/>&emsp;&emsp;Your order is done.*

:::

::: story

**Use case2: user doesn't mention**

Bot: *What kind of flower do you like?*

User: *Rose*

Bot: *Ok, then your order is done.*

:::


### Never Ask

There are chances businesses want to specify slot value by themselves instead of users. Never ask offers the ability to do that.

Never Ask by itself only means never ask. If nothing else is done, the slot will be skipped (neither be asked nor be filled). This is why Framely uses it as the default choice for Fill Strategy. However, if businesses use Never Ask with SlotInit in Transition, they can then provide slot values with Code Expression, which could be a constant, a synchronous service function etc.

Never Ask alters the standard [Slot Filling](https://framely.github.io/404.html) phases by ignoring Ask/Prompt and Confirmation. This basically is another way of saying Never Ask doesn't interact with users.



**[Usage Instruction]**

<Badge type="warning" text="Required" vertical="top" />

- Create a slot
- Set its Fill Strategy to Never Ask
- No annotations that required to interact with users should be defined, including: [Prompts](https://framely.github.io/404.html), [Value Recommendation](https://www.framely.ai/reference/annotations/vr.html) and [Confirmation](https://www.framely.ai/reference/annotations/confirmation.html). Like the name implied, bot NEVER ASKs. Notice that if these annotations were added out of careless, bot will simply ignore them.

<Badge type="tip" text="Preferred" vertical="top" />

- [Transition](https://framely.github.io/404.html): use SlotInit in Transition to initialize a slot value. Detailed configuration goes as follow:
  - set Trigger Method to State
    - set State's Target Slot to the hosting slot of Never Ask
    - set State's State to SlotInit
  - set Update Action to Fill Slot
    - set Fill Slot's Target Slot to the hosting slot of Never Ask
    - set Fill Slot's Code Expression to the slot value needs to be provided

![never-ask](/images/annotation/fillstrategy/neverask3.png)

**[Example]**

Suppose Valentine's day is coming, the flower shop wants to sell their roses for 10 pieces in a bunch so that they can prepare ahead. 

To support this, they need to:

- create a slot named quantity
- set its Fill Strategy to Never Ask
- set the Transiton to State trigger, and SlotInit it to 10

And the following conversation can be expected: 

::: story

Bot: *Happy Valentine's day! We only sell roses for tens a bunch today.<br/>&emsp;&emsp;What kind of flower do you like?*

User: *Rose*

Bot: *Ok, then your order is done for 10 roses.*

:::


### External Event

Like Never Ask, External Event also gathers slot value from businesses, but targets a different scenario: businesses send an asynchronous client action, then BLOCKs until the the third-party resumes and updates conversation.

External Event by itself only means blocking (of course some [Inform](https://framely.github.io/404.html) is allowed before blocking). It is the external event's responsibility to provide slot value and unblocking the conversation. External events have many forms, callback function is one of the kind. 

Apart from that, if businesses want to interact differently depending on how well the client action has done (e.g. is it succeed, failed, or timed out), it needs to do some conditional branching with the hosting slot's value, just like all the other slots did. One typical place to do this is [Response](https://framely.github.io/404.html).



**[Usage Instruction]**

<Badge type="warning" text="Required" vertical="top" />

- Create a slot
- Set its Fill Strategy to External Event

<Badge type="tip" text="Preferred" vertical="top" />

- [Inform](https://framely.github.io/404.html): inform users there's an asynchronous client action happening, and they have to wait until bot gets feedback.



**[Example]**

To complete the flower booking, users must pay for their order first. 

To support this, the flower shop needs to:

- create a slot named isPaid
- set its Fill Strategy to External Event
- set Inform in isPaid to "You need to complete payment to secure the order."
- set Response condition to `isPaid Equal true`, simple reply under that condition to "Payment completed."

And the following conversation can be expected: 

::: story

Bot: *Your order contains 10 roses.<br/>&emsp;&emsp;[Payment Link]<br/>&emsp;&emsp;You need to complete payment to secure the order.*

*... BOT WAITING...*

User: *(Pay for the order)*

Bot: *Payment completed.<br/>&emsp;&emsp;Your order is done.*

:::

