# Schema Grounded Conversational User Interface
Chatbots, the application with conversational user interface, are developed to deliver services with good user experiences. However, good user experience alone may not be the only motivation for business to develop one. Take a look at this conversation between your barista bot and your customer:

::: story
User: *I like some iced coffee.*

Barista: *Sorry, we ran out, but the Starbucks next door has some excellent choices.*
:::

It is good user experience alright, but as a coffee shop owner, you might not want to spend money on this chatbot. To invest your precious resource to build conversation experiences, couple things had to happen. First, you can program your service chatbot according to your business rules so that it helps you achieve your business goal. Second, this programming needs to be efficient so that you can adapt quickly to ever-changing business conditions. 


Aside from the effective control, for business to develop chatbot is of course that the cost does not outweigh the benefit. To democratize the conversational user experience, we developed a engineering sound approach to develop chatbot, by declaratively build schema grounded conversational user interface for your service APIs. 

By schema grounded conversational user interface, we mean one only focus on building conversational interface for the services/functionalities that there are the service APIs for. So what happens if your customer asks your barista bot for a haircut? It can simply say "I am only trained to help you with your coffee needs. What do you want to drink today?" Nobody will fault your service bot here. 

Instead of model all possible conversations, by focusing only on the limited services we offer, the conversational UI can be a lot easy to build as we need to worry about the following things: 
1. Identify customers' intent, understand their preferences (in terms of the slots) efficiently only for supported services. 
2. Offer suggestions when users are stuck, and provide value recommendations so that they can zero in on their choice quickly. 
3. If users move out of scope, remind them of the boundary, bring the conversation back. 

Aside from reduce the scope of the work, by grounding the conversation on the API schema, we can naturally separate the different concerns, so different people can work on the different aspects: the actual service can be implemented by backend team, and conversational user interface builder can take care of interaction logic, and CUI designer can provide script for better user experience.