# Chatwoot

When a user demands talking to a human agent, we can forward the conversation to the support system. Currently the open source system Chatwoot is the only support system.

## How It Works
1. When an end-user demands talking to a human agent

![An image](/images/Chatwoot/How_1.png)

2. An agent will get notified when the conversation is assigned to him.

![An image](/images/Chatwoot/How_2.png)

3. The agent can view the history of the conversation and communicate with the end-user in conversation window.

![An image](/images/Chatwoot/How_3.png)

4. The agent can resolve the conversation when he is done with service.

![An image](/images/Chatwoot/How_4.png)

5. After the agent resolves the conversation, next time end-user will start with interacting bot again.

![An image](/images/Chatwoot/How_5.png)

## Before You Begin

1. Make sure all the owners in your organization have verified their emails first otherwise you won't be able to get support of Chatwoot.

::: tip How to Verify Your Email?
1. Click on your avatar in the top right corner and click on your name.
2. Click "!" icon in the **E-mail** box and follow the instructions to verify your email.
   :::


2. Make sure you have configured your channel first. Learn more about channel configuration, see [WeChat Official Account](https://www.framely.ai/reference/channels/wpa.html#before-you-begin).

3. We show here how to integrate your chatbots with Chatwoot in Framely hosted environment. For private deploy, please consult systems in your organization.


## Configuration
Now you can follow these steps to integrate your chatbots with Chatwoot.

### Enable Chatwoot <Badge text="Framely" />

1. From the chatbot page, click **Setting** > **Integrations**. In the **Support** field, enable **Chatwoot**.

![An image](/images/Chatwoot/Configuration_1_1.png)

2. Check your email then log into [Chatwoot](https://chatwoot.naturali.io/) account with the given user name and password.

### Add Agents <Badge text="Chatwoot" />

When you enable Chatwoot, we create a Chatwoot organization and add all the owners in your organization to it. The owners added to Chatwoot organization are called agents which are set as administrators by default.

::: tip How to Manage Owners in Your Organization?
1. Log into Framely account and enter your organization.
2. Click **Settings** > **Internal Members**. Now You can view all the onwers and members in your organization.
3. Click **···** to set the internal member as owner / member, or to remove internal members.
   :::

An agent is a member of your Customer Support team. Agents will be able to view and reply to messages from your users. Once you log into Chatwoot account, you can click **Settings** > **Agents** to manager all the agents in this organization. Follow these steps to add an agent.

1. Click Add Agent and follow the instructions.
2. Agent you add will receive an email with a confirmation link to activate their account, after which they can access Chatwoot and respond to messages.

![An image](/images/Chatwoot/Configuration_2_1.png)


::: warning
BotAgent1 should always be an administadministrator. Otherwise, conversation can't be assign to teams, unless you add BotAgent1 to the inbox.
:::



### Set Up Inbox <Badge text="Chatwoot" />

When you enable Chatwoot in a chatbot, we will create an inbox connected to the chatbot. When you deploy the chatbot to a channel and end-users send messages to the chatbot through that channel, you can get the conversation in the corresponding inbox. Follow these steps to add an agent to the inbox so when it's needed agents can carry on the conversation.

1. Click **Inboxes** > **Settings**

![An image](/images/Chatwoot/Configuration_3_1.png)


2. In **Collaborators** field, add agents to the inbox and click **Update** to save changes.

![An image](/images/Chatwoot/Configuration_3_2.png)

### Add Teams 

When the conversation is assigned to a team, the agents in the team can carry on the conversation. See [Add Teams | Chatwoot](https://www.chatwoot.com/docs/user-guide/add-teams-settings) to learn how to add an agent to the team.



### Set Up Routing Priority 

To make intent based routing work, you need to set up routing priority. When there are unfinished intents in the conversation, we follow routing priority to decide which team we should route the conversation to. If an unfinished intent is one of the associate intents in routing priority, we route the conversation to the corresponding team. Otherwise, we route the conversation to default team. Follow these steps to set up routing priority.

1. Click **Setting** > **Routing Priority** > **Default**, input team id of the default team.
2. Click **add** to add more teams. Input the name of intent in **Associate intent** box.

::: tip How to Get Team Id?
In Conversation field, click a team, and the last number in current url is the id of this team.

![An image](/images/Chatwoot/Configuration_5_1.png)
:::


