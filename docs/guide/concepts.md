# Key Concepts

## Projects
On the Framely platform, projects are the basic unit of the work, it is very much like the repo on the github. One can decide whether it is public or private, what permission that each user can have on it, etc. There are three kind of project on the platfrom.

### Services
Services are projects or modules that defines a set of interfaces that describe how business functionalities can be invoked, 
this includes the data structure needed by the API function for input and output parameter, and function signature or how these input parameter can be used to triggered to get result.

### Providers
Each service can have one or more provider that provide the implementation of these functionalities. Providers are also deployable, so the same provider can be used by different chatbot from the same organization. 

### Components
Conversational components are the builder defined, sharable modules for solving some particular problem at conversational level. They typically encapsulate some service underneath, and define conversational interface on how user can specify what functionalities they want, and how they want it. It is possible that there are more than one component defined for each given service or the same set of services, but comparing to graphical user interface, this is less common.

### Chatbots
A Framely chatbot is an application with conversational user interface, that connects end-users with your services through conversations. In particular, using the dialog understanding module, it converts user utterances into frame event, which can then be processed by dialog management and invoke the backend service; using a natural language generation module, it renders the returned structured data from backend service in natural language form so it is easy for user to understand. 

You can declaratively confzigure this conversational user interface to connect to service APIs and achieve your business goal on Framely platform, in following aspects:

Chatbot settings for language options, connections, integrations, and supports. 
Intents to categorize services that end-user can access from this chatbot.
Frames, the reusable CUI component that is shared between intents, which is also served as conversation pivoting context.
Entities to identify and extract slot value from end-user expressions. 
Service to hold APIs that one wants to expose through intents defined in the chatbot.

## Conversational Types

Framely are mainly focused on delivering service through conversational user interface. So we mostly interested in task or goal oriented conversations. These conversations are about connecting the utterances from user to the APIs implemented by business. In Framely, that connection are manifested as conversational types, that includes entity, frame and intents.

### Entity
Each frame slot has a type, either frame, or entity, which dictates exactly how we extract value for the slot from an end-user utterance.

Framely provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, email addresses, and so on. You can also create your own custom entities for matching your needs. For example, you could define a cell phone entity that can match the types of cell phones available for purchase in a electronic store.

The term entity is used to describe the general concept of types. When discussing entity details, it's important to understand these specific aspects:

Type: Defines the type of information you want to extract from user input. For example, cell phone model could be the name of an entity type.
Subtype: Entity type can have subtypes. For example, cell phone models could be partitioned into feature phone and smartphone, and smartphone can be further partitioned to iPhone and android phones. These partition of entity type allow for detailed control of how slot be filled.
Entry: For each entity type, there are many entity entries. Each entity entry provides a set of words or phrases that are considered equivalent. For example, if cell phone is an entity type, you could define these entity entries: iphone 12, huawei mate pro, etc.
Label and expression: Some entity entries have multiple words or phrases that are considered equivalent, for example,  big apple, nyc and new york city generally mean the same thing. For these entity entries, you provide one canonical language independent label.

### Frame
Frame is a reusable dialog module that defines how chatbot can collect information to fill a data structure or frame through conversational interaction with user. The core of the frame is its schema, which defined a set of semantically related slots and their types. Then there are dialog annotation and expression attached to the schema, where dialog annotation define how these slots should be collected collectively, and example expressions exemplify how user utterance can be converted into frame event. 

To model complex real world business, and more importantly promote reuse, frames support both composition and inheritance. So smaller frames can be composed to different larger frames, with dialog annotations and expressions only defined once and reused by different larger frames. Also with inheritance, we can easily support "what symptoms do you have?" type of conversation, where each symptom has a separate frame, but can be used to fill the parent frame typed slot.

Frame also naturally serves as context to pivot conversation back and forth between intents. This make it easy to support side question. For example when chatbot ask user "which day you want to fly to Shanghai?", user can ask "how is the weather like there?"

#### Schema

First and foremost, frame is schema, or collection of slots needed by some services. Each slot has a type, which dictates exactly how we can extract value from user utterance. Slot has annotations that defines how the slot should be filled if user does not mention it proactively. Another important aspect of schema is functions, which defines transformations on the frame.

#### Example Utterance

So how do Framely convert user utterance into frame? Let's assume we want to provide a conversational interface for your movie theater ticket booth. Most likely, we will end up with a frame for ticket selling, with three slots: number of tickets, movie title, and time. Then we add an example expressions to the frame to guide out machine learning model.

Example expressions are what users might say to trigger this frame, for example: "get $number$ tickets for $title$ for $time$", with $slot$ present the blanks need to be filled by phrase of given type. When an end-user input an utterance, like "buy two tickets for Star Wars for 7:00pm", Framely finds an example expression matches the end-user utterance the best, assumes user prefers corresponding frame (the one that owns the best matching expression). It then extracts values for each slots to produce the fully filled frame event, i.e. buy-movie-ticket(number=2, title="star war", time=7:00pm).

You don't have to include every possible user expression into training phrases, because Framely's built-in language understanding module does fuzzy, smart matching using state of art models.

#### Dialog annotations

But sometimes, users do not give all the information needed in one utterance. Then we need to define the conversation plan to collect missing info. In Framely, this is done by adding various dialog annotations. For example, we specify what question we use to get user's preference on a given slot.

Dialog annotations can be defined both on slot and frame level. Slot level annotations defines how individual slot can be filled. This includes whether the slot can take multiple values, whether it need confirmation. For frame slot, whether the polymorphism is allowed.  Frame level annotations are related to multi-slot filling where values for slots need to collectively make business sense. This includes annotations like value recommendations and value check. Value recommendation provide user with candidate list so that they can pick one from that instead of input something that is invalid. Value check make sure agent catch user input error as early as possible so that conversation can be efficient. 

### Intents
To cover a range of user needs,  each chatbot typically offers conversational interface to a collection of the services via intent. An intent is a skeleton that contains all the information needed to connect user utterance to some service. Intents thus have two aspects to configure: user intention collecting, response rendering. The user intention collecting part is done through frame, a reusable conversational component that is embedded in the intent, as an intent is a frame. And response rendering can be defined in the response section, which oftentime rely on functions to interact with application logic.

#### Response

In real world scenarios, the same services often have different variations for various reasons. For example, VIP members are served in an entire different room/line. To support this, a Framely response is defined by a set of condition and action pairs. If condition is met, the corresponding action will fire. Action can be text replies, or it can be system action or another intent. Response can be defined differently for different channels, so that you can tailor the ux for different groups of users.

These conditions are defined as conjunction of the predicates on the frame slots, and these predicates include whether these filled value meet some criteria, equals, great than, less than, etc to some predefined values. Action defines how chatbot should respond to a user's request. There are two different scenarios: you can define the text reply directly in here, this can be done for the simpler user cases like FAQ. Or you can first invoke the backend service in form of function, and define the result rendering here. For example, you can let users know there are five movies on show today, and their title and start time, if the end user request this information.

## Operational Software
After we build the conversational service, we can deploy them for different channels. Then we need to operate the services. This include both backoffice that manages the request from the end users, and support software that human agent can step in when end user requires additional attentions. 