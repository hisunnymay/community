# Value Check

[[toc]]

## Overview

The goal of CUI is to reach common understanding between user and bot on the service that users want and business can serve. Not all user requests can be served per business logic. For example, user's initial preference about date when booking a table might not be valid as business can be closed on that date. In such cause, the bot should just inform the user the closure and save user's time by not asking for party size and time. 

::: story

User: *I want to book a table this Friday.*

Bot: *Sorry, we are not open on Friday. Please choose another date.*

::: 
Capturing the invalid user input per business logic is essential to make the conversation effective, With Value Check, builder can define what is considered to be invalid input based on service, and have bot to offer users the chance to give alternative choice.

## Features

- Check the validity of user input value
- When Value Check fails
    - Bot informs users the input value is invalid
    - choose which slot to be cleared so bot can ask again

## How to use
Value Check is an optional slot annotation. When a user inputs value into a slot and slots before this slot has been checked, [DM (Dialog Management)](https://www.framely.ai/guide/architecture.html#dialog-understanding-du) will check conditions in Value Check.
- If all conditions are true, Value Check passes and the slot will be marked as checked.
- If one of the conditions is false, Value Check fails.
  When Value Check fails, bot uses Value Check prompts to inform users that the value is invalid, clear the predefined target slot first and start to conversation again from that slot.

![value-check](/images/annotation/valuecheck/value-check.png)

::: tip Try it with templates  (Do we allow them to just try it now on the original bot? I think it is less work and it can be done?)
1. Clone [ValueCheck](https://framely.naturali.io/org/622c8ff683536204fe062b55/agent/6297f6d04cfdb2515448d812/intent?page=0&imported=false&search=) to your own organization.
2. Switch to language agent, see examples in Test Cases.
3. Click **Commit** > **Try it now**, you can test by yourself.
:::

### Conditions

You can set conditions to check the validity of user input value. If all conditions are true, Value Check passes. If one of the conditions is false, Value Check fails.

Conditions are defined in [code expression](https://www.framely.ai/guide/glossary.html#code-expression-input), which should produce a Boolean value when evaluated, like `slot != null` , `function() == true` . You can joint the statements using `&&` or `||` , like `slot != null && slot < 3` .

### Inform
When Value Check fails, bot informs users that the value is invalid, like bot's utterance shown in [Overview](../annotations/vc.html#overview). You should add at least one inform. 

### Recovering 
In Recovering field, you can decide which slot to be cleared, so that bot will start from that slot and try to get user choice for every slot after that one by one again. For example, when all the slots party size, data and time are filled but user's choice causes the slot's Value Check fails, you can choose to clear current slot's value only (which is default) or you can clear one of earlier slot, and start conversation from the slot being cleared again.

- Case 1 Keep the input value of current slot
::: story
User: *Can I book a table for 2 this Friday?*

Bot: what time?

User: 5:00pm.

Bot: *Sorry, small table at 5 pm on Friday is not available. Please choose another **time**.*
:::


- Case 2 Clear the input value of current slot
::: story
User: *Can I reserve a table for two this Friday?*

Bot: what time?

User: 5:00pm.

Bot: *Sorry, small table at 5 pm on Friday is not available. Please choose another **date**.*
:::
