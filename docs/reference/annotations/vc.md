# Value Check

[[toc]]

## Overview

Capturing the correct value from users is essential to keep the conversation effective, so when users input incorrect value, we want to catch it as early as possible and offer users the chance to correct it. With Value Check, you can configure bot for this situation easily.

For example, when a user wants to book a table, usually the bot asks for information about date, time and table size. With value check, when a user mentions an unavailable date, the bot can just inform the user and save time in asking for additional information. 

::: story

User: *I want to book a table this Friday.*

Bot: *Sorry, we are not open on Friday. Please choose another date.*

:::


## Features

- Check the validity of user input value
- When Value Check fails
    - Bot informs users the input value is invalid
    - You can choose which slot to be cleared and asked again

## How to use
Value Check is an optional annotation. When a user inputs value into a slot and slots before this slot has been checked, [DM (Dialog Management)](https://www.framely.ai/guide/architecture.html#dialog-understanding-du) will check conditions in Value Check.
- If all conditions are true, Value Check passes and the slot will be marked as checked.
- If one of the conditions is false, Value Check fails.
  When Value Check fails, bot uses Value Check prompts to inform users that the value is invalid and clear the target slot.

![value-check](/images/annotation/valuecheck/value-check.png)

::: tip Try it with templates
1. Clone [ValueCheck](https://framely.naturali.io/org/622c8ff683536204fe062b55/agent/6297f6d04cfdb2515448d812/intent?page=0&imported=false&search=) to your own organization.
2. Switch to language agent, see examples in Test Cases.
3. Click **Commit** > **Try it now**, you can test by yourself.
:::

### Conditions

You can set conditions to check the validity of user input value. If all conditions are true, Value Check passes. If one of the conditions is false, Value Check fails.

Conditions are defined in [code expression](https://www.framely.ai/guide/glossary.html#code-expression-input), which should produce a Boolean value when evaluated, like `slot != null` , `function() == true` . You can joint the statements using `&&` or `||` , like `slot != null && slot < 3` .

### Prompts
When Value Check fails, bot uses prompts to inform users that the value is invalid, like bot's utterance shown in [Overview](../annotations/vc.html#overview). You should add at least one prompt. 

### Recovering 
In Recovering field, you can decide which slot to be cleared, so that slot will be asked again. For example, when all the slot are filled but somehow user wants to change one of them. If above behavior causes the slot's Value Check fails, you can choose to clear current slot's value or you can keep this current slot's value and clear other slot's value.

- Case 1 Keep the input value of current slot
::: story
User: *Can I change the date to this Friday?*

Bot: *Sorry, small table at 5 pm on Friday is not available. Please choose another **time**.*
:::


- Case 2 Clear the input value of current slot
::: story
User: *Can I change the date to this Friday?*

Bot: *Sorry, small table at 5 pm on Friday is not available. Please choose another **date**.*
:::
