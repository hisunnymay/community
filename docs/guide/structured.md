# Basic Considerations
The goal of the Framely is to build cost-effective conversational user interface for your services. So we focus on enabling cooperative conversations, and seeking the balance between user and builder experience: by maximizing the user choices and minimizing builder cost.

## Cooperative Principle
In goal oriented conversations, participants are assumed to have a common goal, in business world, completing service transaction, or business deliver service user wants. Under this condition, the cooperative principle says that parties involved normally attempt to be informative, truthful, relevant, and clear. The concept was introduced by philosopher H. Paul Grice in his 1975 article "Logic and Conversation" in which he argued that "talk exchanges" were not merely a "succession of disconnected remarks," and would not be rational if they were. Grice suggested instead that meaningful dialogue is characterized by cooperation. "Each participant recognizes in them, to some extent, a common purpose or set of purposes, or at least a mutually accepted direction."

Grice expanded his cooperative principle with the four following conversational maxims, which he believed anyone wishing to engage in meaningful, cogent conversation must follow.

### Maxim of Quantity
Say no less than the conversation requires. Say no more than the conversation requires. The maxim of quantity means that we provide as much information as needed to achieve a goal, no more and no less. Think of the difference between having a conversation with someone who replies in just Yes or No statements and another one with someone who goes on a long monologue with unnecessary detail. This is a critical principle that chatbots must follow in order to continue the conversation with a user and keep them engaged. 

### Maxim of Quality
Don't say what you believe to be false. Don't say things for which you lack evidence. The maxim of quality refers to provide information that is true. Being truthful in a conversation means avoiding falsehoods and saying things without adequate evidence. 

### Maxim of Manner
Don't be obscure. Don't be ambiguous. Be brief. Be orderly. When designing conversations, it is also important to follow the maxim of manner. This means being clear, brief and orderly while avoiding obscurity or ambiguity.  

### Maxim of Relevance
Be relevant. The maxim of relevance suggests that we engage in conversations that are relevant to others. For chatbots, this would mean replying to queries with information that help the user with their goal. A response that is not relevant to the user can break the natural flow of conversation and turn the user away.  


## Max Min principle
One of the key assumption that Framely takes is so 

By designing bot to help the cooperative user only, one will already avoid the unnecessary over design, thus greatly reduce the complexity and cost of building the effective chatbots. We take one step further by explicitly seek simultaneously maximizing user experience and minimizing building cost. 

Framely , this means that user should be able to say whatever they want to say, but the bot should behave as simple as possible as long as it is still effective in helping user.

Even assuming user are cooperative, we can not control what user want to say and when they say it. But, since the goal is to deliver any services in a cost-effective fashion, we can design bot to follow a simple yet effective strategy, so it is easy for builder to design and debug.

In particularly, we make bot follow a very simple strategy: at any given time, bot will only engage in single conversation sequence with one goal, and it will try to bring the active conversation sequence to closure before it move onto a different one. When user digress in the middle of conversation, say they have an information request, bot will react to that and then bring conversation back on track. Or we make bot to engage in structured conversations.

Structured conversations are simply composite conversation sequences, in both sequential and nested sense. Each sequence has concrete goal, and have a clear start and finish. Finish can come in different flavors: including abort by user or early exit per business logic. Furthermore, each sequence has a clear owner. Owner start the sequence, and set the goal and communicate to other party, and  other party is cooperating in help to achieve the goal for the owner. 

Current conversation owner can yield ownership to other party: for example, the bot can say "what can I do for you", this can potentially start a nested conversation sequence that is owned by user. And after the sequence concludes, then the ownership automatically get back to bot. Of course, in this case, user can choose not to take the ownership by simply reply "nothing, thanks" , which will bring closure to bots' owned sequence, bot is expected to simply close the sequence in the next turn. 


