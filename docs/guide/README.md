# Introduction

If you want to provide all your services at where your users are: imessage, messenger, etc, but worried that building and operating such chatbot is unnecessarily hard and expensive, then you come to the right place. At Framely, we understand your goal is to provide service and chatbot is just a user facing application with conversational user interface, by making user of all the principles and best practices we learned over many years in building GUI application, we can help you to build capable conversation experience in cost-effective fashion.

## Why We Build Framely
Man kind has fantasized about talking robot for so long. In deed, chatbot is attractive broad interest across many industries because it can provide their user direct access to service without need users to jump though hoops. However, why are these magical conversational experience not ubiquitous as we see in the StarWars? Based on first principle thinking, here are the principles that we feel it is important but have been overlooked.

### Conversation is a means to service
Historically, chatbot are designed to start on informational tasks as simple question and answer is relatively easy to do and many our sourced customer services representative really only have clearance to handle these type of customer request. But as business start to compete in user experience and personalized services, they start to look at conversations to deliver transactional service as well. 

Framely is designed to make building effective conversational user interface (CUI) easy. We think conversation is not the goal, but a means. The goal is to deliver not only informational but also transactional service through conversation. The emphasis on transactional conversational service can finally make chatbot a viable one-stop solution for personalized service.

### Business Experience First
While chatbot is commonly associated with appealing end user experience, it is important to not forget that business invests in chatbot for a reason. Since we do not know what business want, and can not keep up ever-changing business conditions, so it is important that we focus on giving business the control they to define and tweak conversational experience they see fit. This is not to say end user experience it not important, but we think it is builder's job to trade off between cost and user experience, and Framely just need to provide tools so builder can build user experience they want. Of course, we always provide the best possible default user experience when builder want to be lazy.

### Serve Cooperative Users
Human language can be infinitely complex, without placing an expectation on the type of user we serve can put a great burden on building usable chatbot. Framely mainly focuses on serving cooperative users, whose goal of engaging in conversation with chatbot is to get served with the least effort on their part. In addition to provide guideline on what control we should provide to chatbot builder and how builder should design the conversational user experience, this principle also suggests that allows us to get away with mainly  means we should on understanding the common instead of obscure user utterances, and adopt dialog policy that try to bring the conversation toward serving as quickly as possible.

### Cost, both Build and Operate
Third, we want not only to help business to build enjoyable conversational services, but also to greatly reduce the cost of building and operating such thing. In particular, we want to make it possible for the same engineering team that build out service have the ability to build the conversational user interface for it, without going through a steep learning curve. 

## What's Framely

We try to achieve these goals toward Framely by simply take advantage of the lessons we learned, and principles such as [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) and best practices like [version control using git for collaboration](https://en.wikipedia.org/wiki/Git) we accumulated from the past 40+ years of building user facing application, particularly from building graphical user interface applications.

### Service, Interaction and Language
Following the separation of concerns, we assume that conversational services are always built in 3 layers: service, interaction and language (both understanding and text generation). In most cases, services already exist, we just need to build interaction for it, so that we can trigger service based on what user wants. It should be clear that interaction logic is generally only depending on underlying service and interaction design, and independent of which language user is speaking. By decoupling the interaction from language, we can save cost by having different people working different aspects, at the same time make supporting multiple language very easy.

### Declarative
Imperative programming emphasizes direct instruction on how the program executes functions. The code consists of a step-by-step sequence of command imperatives that dictate how the program implements desired functionality. Examples of imperative programming languages include C, C++, Java and Fortran.
Declarative programming places much of its focus on the overall goal and intended outcome of a program's operations. Developers don't necessarily have to mind how that desired outcome is accomplished, nor hardcode the program's control flow. SQL, HTML and CSS are some good examples of languages that take this approach.

Choosing support declarative approach can reduce the burden on builder's shoulder so that they can mainly focus on describe what user experience they want, instead of how to implement such experience.

### Component Based
Building everything from scratch is slow and expensive way of building everything, building chatbot is no exception. By packaging the solution for well-defined use cases, such as recommending a list of items and asking user which one they like, into a reusable module or component, we can then compose them into bigger and bigger components until we have desired conversational user experience. This way of building chatbot can save both time and cost, and user can enjoy higher quality experience because of the components can be built and maintained by specialized professionals.


## What's not Framely?
There are many other directions that has been tried in the industry and academia, while we are learning as much as possible from this large body of prior work, these are some trendy things we try to stay clear from. 

### End to End
Be able to create a well-functioned chatbot by just looking at past conversations when customers are served well is such an appealing idea that there is so much effort around this, from both academia and industry, but it is not a good idea from the production point of view. First it does not offer direct control, so it is difficult for builder to react ever-changing business conditions. 


### Flow Based Approach
Business logic are typically described as processes, so it is no wonder that flow is typically used to describe the desired interaction as well. Under graphical user interface, builder have full control what user can do at each step of interaction, so flow based definition works well. For conversational interaction, user might say anything they like at any point, and in any order, as long as what they said is relevant, chatobt need to respond in a reasonable fashion, using flow based approach to define user interaction thus become prohibitively costly, and the possible paths that builder need to cover can grow exponentially. It is clear that humans do not follow fixed script during conversation, so in theory it is possible that conversational behavior of the chatbot can be defined in a factorized fashion where builder specify how bot should behave under necessary and sufficient conditions, and chatbot can try to figure out what to do no matter how conversation reached here.   

### Low Level Tooling
Conversational experience can also be built at the code level, where builder need to understand all the details like intent classification and slot filling. While this provides the most flexibility, building chatbot at this level is hard to escape from the implementation details, it will force builder to switch back and forth between what they want and how things should be implemented. This will slow the building process down, and cost more for business to get what they want.


## Yes, You can do it too.
Capable chatbot has been reserved for players with deep pocket, think Erica by Bank of America, but Framely is here to change that. By providing a declarative and component based approach to define conversational user experience, Framely make it possible for regular develop team to build and operate the capable conversational user interface for any service. We hope the resulted cost reduction can full democratize conversational experience for masses, so what are you waiting for?