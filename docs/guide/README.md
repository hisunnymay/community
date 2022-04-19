# Introduction

If you want to provide great conversational user experiences but worried about the cost associated with building and operating chatbot, then you come to the right place. Framely's goal is to reduce the cost of build and operate great conversational user interface for any of your service. After all, chatbot is just an app with conversational user interface, there is no reason building bot should cost significantly more than to building app that expose the same set of services.

## Who is building chatbot today?
Man kind has fantasized about talking robot for a long time. In deed, chatbots attract broad interest because of its potential of bring great user experiences. However, why are these magical conversational experience in the movies not yet ubiquitous, particularly considering the availability of the app with same functionalities? What is the difference between building bot and building app? 

The difference is simply who is building it. No matter what you build, your team need to understand your business logic. With declarative framework and component library like reactjs and antd, any people with reasonable amount programming training can build great app. But to build bot, you need to have Ph.Ds on 
your team, and you need to teach them the ever-changing business logic for them to be effective.

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