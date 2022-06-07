# Slot Filling

[[toc]]

## What is Slot Filling？

What is Slot Filling? To answer this, we must go back to a fundamental question: what is slot? 

For any task-oriented conversation, business has to collect a bunch of user preferences to accomplish the goal. And *slots* are the containers holding this information. An analogy to these is mathematical function: the functionality of it is pre-defined, the outputs dynamically changed by inputs, and the variables are used to keep the inputs. We know that variables accept values with different shapes, e.g. scalar, row vector, column vector and matrix. Slots, as the target of analog (variable), can be filled with different types as well, namely Single-Valued and Multi-Valued, entity slot and frame slot.

However, unlike the perfect math world, value of slots is gathered through an arduous process, which we call "*filling*". The source of it comes from two groups: users and builders, but primarily users. Filling with both involves various interactions, including: asking users what's the value, offering them some candidates, checking the legitimacy and validity after they gave the value, double checking with users to ensure nothing goes wrong etc. Notice not all of them are always required, business should tailor them by slot type, source of value, the actual scenario and requirement. For example, there's no candidates for open questions by definition. 

Now, we are ready to answer the question. **Slot FIlling is a process which is customized**  **by business,** **primarily implemented with interactions, and aims to collect a piece of user preference which is essential to fulfill the business task.** It's the simplest component and used to layer [Frame Filling](https://www.framely.ai/reference/framefilling.html).



## Five Phases

There are five phases in Slot Filling with each requiring some interaction or control. Framely freezes them into annotations.

![five-phases](/images/annotation/fivephases.png)

1. Fill Strategy gives the overall description for Slot Filling. It decides whether a user preference should be collected, and if so, collects from whom. It also influences what kind of interactions are suggested during Slot Filling like an undertone.
2. Init collects user preference from businesses, directly. 
3. Ask / Value Recommendation collects user preference from users. The two phases, Init and Ask, share the same goal of getting the user preference, then turning it into slot value. As a result, they're recommended to pick one out of two. If by any chance both of them are defined, Framely tends to trust the business-provided value and skip asking users. The getting value goal also explains why Value Recommendation is just an assistant to Ask. Offering candidates is the means instead of ends.
4. Value Check examines the legitimacy and validity of a slot value based on business defined rules. If the result is passed, Slot Filling will proceed to the next phase. If not, the default behaviour is to acquire the slot value again.
5. Confirmation is usually used to emphasize values that users DON'T know (e.g. collected though Init), have side-effects, or simply value too much or trust too little by business. Confirmation supports a clear agreement by explicit confirming. If user confirms with a No, Framely will ask what's next since that bot has no clue about what's going wrong. Otherwise, (regardless user confirms with a Yes, or there's only implicit confirmation), Slot Filling will proceed to the next phase.

In conclusion, Slot Filling arranges the overall strategy about value collecting, follows it to figure out user's initial preference, and double check it with first business then user. And Voilà, the value is filled into the slot!



## Variations

The Five Phases sets the baseline for Slot Filling. But in the real world, business has their own requirements, thus almost never follows the baseline conversation. So, Framely offers a series of controls to let them alter the experience, primarily in three main levels: Slot Type, slot level annotations, and the frame level annotation, Transition.



1. Slot Type

To start Slot Filling, there must be a slot. And to create a slot, one must define its type first. 

Imagine painting a picture, defining a slot type is like choosing a motif. Once selected, a list of rules will emerge and dominate how the Slot Filling process should perform.

- The Five Phases are the Slot Filling process corresponding to Single-Valued entity slot

- When the Single-Valued changes to Multi-Valued

  Multi-Valued means collecting multiple values in one Slot Filling process. Framely offers a fine-grained design to acquire them one by one. This augmentation involves all the phases that interacts with users directly. For example, Ask / Value Recommendation will ask users one value at a time, and repeat it until all collected. Confirmation supports the same thing.

- When the entity type changes to frame

  Frame HAS multiple slots, which means users can provide values in order, or as a whole. This might sound similar, but differs from Multi-Valued as it contains multiple Slot Filling processes instead of one with fine-grained design. Despite Framely supports both collecting granularity, a slot needs ONLY ONE value. So, if both frame and slot level Ask / Value Recommendation are declared, Framely will always prefer the first and skips individual Ask / Value Recommendation.

Learn more about this on [Frame Filling](https://www.framely.ai/reference/framefilling.html).



2. Slot level annotations 

Among all the slot level annotations, one uses the followings to tailor their own Slot Filling process. Fill Strategy is the most special one as it connects the [schema level](https://www.framely.ai/guide/components.html#schema) and [interaction level](https://www.framely.ai/guide/components.html#interaction-logic) requirements: slot types can restrict Fill Strategy options, and Fill Strategy options suggest the usage of slot level annotations like an undertone. 

If we carry on with that picture, the actual colours used on canvas should not only suit the motif but harmonize with the undertone.

| Phase                    | Slot Level Annotations                             |
| :----------------------- | :------------------------------------------------- |
| Fill Strategy            | [Fill Strategy](https://www.framely.ai/reference/annotations/fillstrategy.html)                                      |
| Init                     | [Initialization]((https://www.framely.ai/reference/annotations/init.html))                                     |
| Ask<br/> Value Recommendation | [Prompts](https://www.framely.ai/reference/annotations/prompts.html), [Multi-Valued Prompts]((https://www.framely.ai/reference/annotations/mvprompts.html))<br/>[Value Recommendation](https://www.framely.ai/reference/annotations/vr.html) |
| Value Check              | [Value Check](https://www.framely.ai/reference/annotations/vc.html)                                        |
| Confirmation             | [Confirmation, Multi-Valued Confirmation](https://www.framely.ai/reference/annotations/confirmation.html)            |



3. Transition

Slot level annotations force the manipulation of Slot Filling into a high level space. It's convenient, but not flexible enough. Transition, on the other hand, allows one to cope Slot Filling in a rather low level fashion. Low level here means two things:

- Slot level annotations frame the phases of a Slot Filling process with default behaviours. Transition allows customizing arbitrary behaviours.
- Beyond slot level annotations, Transition can directly manage the Five Phases by actions.

Learn more about this on [Transition](https://www.framely.ai/reference/annotations/transition.html).



