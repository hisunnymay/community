# Schema Grounded CUI
Chatbots, the application with conversational user interface, are developed to deliver services with conversational experiences. However, good user experience alone may not be the enough motivation for business to develop one. Take a look at this conversation between your barista bot and your customer:

::: story
User: *I like some iced coffee.*

Barista: *Sorry, we ran out, but the Starbucks next door has some excellent choices.*
:::

It is good user experience alright, but as a coffee shop owner, you might not want to spend money on this chatbot. To invest your precious resource to build conversation experiences, you need to make sure you can program your service chatbot based on your business logic so that it helps you achieve your business goal in ever-changing business conditions. 

Aside from the effective control, the cost is also an important concern. In fact the high cost associated with building usable conversational application is core reason why it is so far reserved for the company with deep pocket like Bank of America. 

It is Framely's goal to democratize chatbot development. we developed an engineering sound approach to develop chatbot, by declaratively build schema grounded conversational user interface for your service APIs. By schema grounded conversational user interface, we mean we always first convert user utterances into data structures (known as semantic frames) first, we then consult the builder predefined interaction logic and application logic to figure out what information we need to communicate back to user in form of semantics, and finally convert such semantic frame into natural text in given language.


Schema grounded CUI only focus on building conversational interface for the services/functionalities that there are the service APIs for. So what happens if your customer asks your barista bot for a haircut? It can simply say "I am only trained to help you with your coffee needs. What do you want to drink today?" Nobody will fault your service bot here. So, instead of modeling all possible conversations, by focusing only on the limited services we offer, the conversational UI can be a lot easy to build, as it is very easy to decide whether some use case need attention or not.

Aside from reduce the scope of the work, by grounding the conversation on the API schema, we can naturally separate the different concerns, so different people can work on the different aspects: the actual service can be implemented by backend team, and conversational user interface builder can take care of interaction logic, and CUI designer can provide script for better user experience.