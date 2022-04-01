# Overview

The service oriented conversation is about building the common understanding of what service user wants, and how he/she wants it between users and chatbot. To invoke a service, we need to fill slots of its input frame through conversation. This process is thus called frame filling.  For example, user's intent to buy a movie ticket is not complete before the user also let the agent know the movie he wants to watch, the time he likes to start and also the number of tickets he needs. This information need to be collected as a whole before agent can provide desired service. Furthermore, this information needs to collectively make sense: for example, Star Wars only shows on 8:00pm, user input an 6:00pm Star Wars tickets is not going to work. 


Even for a relatively simple use case like above, there can still be infinite number of possible ways of conversations can take place. Instead of trying to enable all these possibilities, we focus on a class of practical conversations that can be composed by intertwining a small set of dialog patterns. Each of these dialog patterns is used to address some aspect of frame filling, and we also provide well designed implementations to support these dialog patterns so that you do not have to code them up. With these dialog patterns, you can not only speed up the analysis and converge to a practical CUI design faster, with predefined dialog components, you can also get good implementation simply by declaratively configure them.


The goal for effective service chatbot design should be low user effort, so chatbot can identify users' needs, understand their preferences efficiently. So it is not surprising that we should offer suggestions when they are stuck, and provide value recommendations so that they can zero in on their choice quickly. 

Framely provides a composable way of build conversational user interface for your services quickly. And at heart of this approach, there are some build in CUI components that builder can use to declaratively define the desired conversational experiences. Each component is documented in three parts: overview introduce the use case where one might consider this component, related components need to be factored during the CUI building, and finally all the controls that builder can to use to control behavior, each with why, and how.

::: tip Overview
 - Help your end-user to understand the business boundaries.
 - Help your end-user focus on what they really want.   
 - Preferred, but not required. 
:::

There are two kinds of related components.
::: tip Related Component <Badge text="Preferred" />
 There is no strong dependence. Like music, one of the ways we make sense of our lives, while one can live a life without it.
:::

::: tip Related Component <Badge type="warning" text="Required" />
 There always need some support to work well. Just like the importance of water to we human beings.
:::
