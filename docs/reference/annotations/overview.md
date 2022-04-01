# Overview

The service oriented conversation is about building the common understanding of what service user wants, and how he/she wants it between users and chatbot. To invoke a service, we need to fill slots of its input frame through conversation. This process is thus called frame filling.  For example, user's intent to buy a movie ticket is not complete before the user also let the agent know the movie he wants to watch, the time he likes to start and also the number of tickets he needs. This information need to be collected as a whole before agent can provide desired service. Furthermore, this information needs to collectively make sense: for example, Star Wars only shows on 8:00pm, user input an 6:00pm Star Wars tickets is not going to work. 


Even for a relatively simple use case like above, there can still be infinite number of possible ways of conversations can take place. Instead of trying to enable all these possibilities, we focus on a class of practical conversations that can be composed by intertwining a small set of dialog patterns. Each of these dialog patterns is used to address some aspect of frame filling, and we also provide well designed implementations to support these dialog patterns so that you do not have to code them up. With these dialog patterns, you can not only speed up the analysis and converge to a practical CUI design faster, with predefined dialog components, you can also get good implementation simply by declaratively configure them.


The goal for effective service chatbot design should be low user effort, so chatbot can identify users' needs, understand their preferences efficiently. So it is not surprising that we should offer suggestions when they are stuck, and provide value recommendations so that they can zero in on their choice quickly. 

Framely provides a composable way of build conversational user interface for your services quickly. And at heart of this approach, there are some build in CUI components that builder can use to declaratively define the desired conversational experiences. Each component is documented in three parts: overview introduce the use case where one might consider this component, related components need to be factored during the CUI building, and finally all the controls that builder can to use to control behavior, each with why, and how.

::: tip Overview
 - 帮助你的用户了解业务范围与边界，快速锁定心仪内容；  
 - Preferred, but not required。
:::

There are two kinds of related components.
::: tip Related Component <Badge text="Required" />
 虽然我并不依赖于他们，但如果可以，我还是很愿意和他们在一起的。就像你们人类，虽有一日三餐，但总还是要吃些水果滴。
:::

::: tip Related Component <Badge text="Optional" />
 我是一个依赖性很强的家伙，总是需要一些支持，才能够很好地工作。就像你们人类，虽有一日三餐，但总不能不喝水不是。
:::
