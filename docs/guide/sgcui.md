# Schema Grounded CUI
Since the goal of chatbots to deliver services to cooperative users, it is ok for us only handles the conversation limited to these services. This means that we do not have to worry about the conversations irrelevant to the underlying services. Of course, it is possible for user to step outside this scope. For example, customer might ask your barista bot for a haircut? Luckily bot can simply respond with "I am only trained to help you with your coffee needs. What do you want to drink today"? No cooperative users will fault your service bot here. So instead of focusing on conversations, we can ground the CUI to the API schema that implements the services we want to expose. 

Building CUI in this schema grounded fashion means we always first convert user utterances into data structures (known as semantic frames) first, we then consult the builder predefined interaction logic and application logic to figure out what semantic frame we need to communicate back to user, and finally convert such frame into natural text in given language and style. Schema grounded way of building CUI has many advantages over the conversation driven approaches: 
1. API Schema provides natural boundary for both design and implementation. Given the set of APIs, it should be immediately clear whether given conversation is relevant or not. 
2. API schema typically is result of careful deliberation between product owner and software architect, so it is usually normalized to be minimal and orthogonal. This means the similar functionalities are generally serviced by the same APIs, so there is no need to create the equivalency between user intention at language level, as all we have to do it mapping language toward the APIs.
3. We can naturally separate the different concerns, so different people can work on the different aspects: the actual service can be implemented by backend team, and conversational user interface builder can take care of interaction logic, and CUI designer can provide script for better user experience.

Aside from these soft influence, the schema grounded CUI actually have more constructive requirements on how conversational experience should be built differently.

## CUI Type System
In programming languages, a type system is a logical system comprising a set of rules that assigns a property called a type to the various constructs of a computer program, such as variables, expressions, functions or modules. It is  

it’s a logical system consisting of a set of rules that assign properties called types to various structures of a computer program, such as variables, expressions, functions, or modules.
While conversation driven CUI approaches of 


## Stack based Structured Conversations
Structured conversations are simply composite conversation sequences, in both sequential and nested sense. Each sequence has concrete goal, and have a clear start and finish. Finish can come in different flavors: including abort by user or early exit per business logic. Furthermore, each sequence has a clear owner. Owner start the sequence, and set the goal and communicate to other party, and  other party is cooperating in help to achieve the goal for the owner. 

Current conversation owner can yield ownership to other party: for example, the bot can say "what can I do for you", this can potentially start a nested conversation sequence that is owned by user. And after the sequence concludes, then the ownership automatically get back to bot. Of course, in this case, user can choose not to take the ownership by simply reply "nothing, thanks" , which will bring closure to bots' owned sequence, bot is expected to simply close the sequence in the next turn. 

## Implicit Contextual Management
Structured conversations can be carried out using multiple stacks, each for one topic. Stack is a natural tool for nested structure.

