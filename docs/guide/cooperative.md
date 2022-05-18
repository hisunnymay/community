# Cooperative Principle

To build conversational user interface (CUI) for your service, we focus on goal oriented conversations where participants are assumed to have a common goal. In business world, this typically mean both sides want to complete service transaction, or businesses deliver service user wants. The cooperative principle says that parties involved normally attempt to be informative, truthful, relevant, and clear. The concept was introduced by philosopher H. Paul Grice in his 1975 article "Logic and Conversation" in which he argued that "talk exchanges" were not merely a "succession of disconnected remarks," and would not be rational if they were. Grice suggested instead that meaningful dialogue is characterized by cooperation. "Each participant recognizes in them, to some extent, a common purpose or set of purposes, or at least a mutually accepted direction."

## Four Pillars 
Grice expanded his cooperative principle with the four following conversational maxims, which he believed anyone wishing to engage in meaningful, cogent conversation must follow.

### Maxim of Quantity
Say no less than the conversation requires. Say no more than the conversation requires. The maxim of quantity means that we provide as much information as needed to achieve a goal, no more and no less. Think of the difference between having a conversation with someone who replies in just Yes or No statements and another one with someone who goes on a long monologue with unnecessary detail. This is a critical principle that chatbots must follow in order to continue the conversation with a user and keep them engaged. 

### Maxim of Quality
Don't say what you believe to be false. Don't say things for which you lack evidence. The maxim of quality refers to provide information that is true. Being truthful in a conversation means avoiding falsehoods and saying things without adequate evidence. 

### Maxim of Manner
Don't be obscure. Don't be ambiguous. Be brief. Be orderly. When designing conversations, it is also important to follow the maxim of manner. This means being clear, brief and orderly while avoiding obscurity or ambiguity.  

### Maxim of Relevance
Be relevant. The maxim of relevance suggests that we engage in conversations that are relevant to others. For chatbots, this would mean replying to query with information that help the user with their goal. A response that is not relevant to the user can break the natural flow of conversation and turn the user away.  


## Implications
By designing bot to help only the cooperative users, we can already avoid the unnecessary over design, thus greatly reduce the complexity and cost of building the effective chatbots. Within the boundary set by the cooperative principle, we can explicitly seek simultaneously maximizing user experience and minimizing building cost. This means that user should be able to say whatever they want to say, but the bot should behave as simple as possible, so it is easy to build, as long as it is still effective in helping user.

 Good conversational user interface design should anticipate any things relevant to business. However, this does not mean the bot need to serve any request user might have. Building such an omnipotent bot does not make business sense. Since the goal is to deliver any services in a cost-effective fashion, we can design bot to follow a simple yet effective strategy, so it is easy for builder to design and debug. In particular, at any given time, bot will only engage in single conversation sequence with one goal, and it will try to bring the active conversation sequence to closure before it move onto a different one. When user digress in the middle of transaction service, bot will react to that and then bring conversation back on track. We say that bot engages in structured conversations.