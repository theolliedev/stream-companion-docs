# Streamer.Bot Configuration

We will now dive into the configuration of Streamer.Bot. This is a tool that allows Streamers to easily make interactions on their Streams.

In our case, it will allow Stream Companion to receive and send messages to the stream. Here are a few examples of what you can do:

- **Talk to the AI**: Allows your viewers to talk to the bot.
- **Shoutout**: Gives a shoutout to a user in chat that is customized for the target according to their description, game and stream title.
- **Follow, Sub, Gifted Subs**: Gives a customized messages to the users that follow, subscribe, gifted subs, and more.

I will only be covering the setup of the Stream Companion integration, you only need to connect your Twitch account to the bot for the integration to work. I suggest looking at the [Streamer.Bot documentation](https://docs.streamer.bot/get-started/introduction) for more information.

## Importing the Configuration

1. Click on **Import** at the top of the Streamer.Bot dashboard.

![Import button](/guide/streamerbot-configuration/1-import.png)

2. Enter the following string in the **Import String** field:

```
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
```

3. After entering the string, the window will change and show you what will be imported. We can now click on **Import**.

![Import actions](/guide/streamerbot-configuration/3-import-actions.png)

## Prepare the Websocket

1. Now that all the actions and websocket were imported, in the sidebar, scroll down and open **Servers/Clients**, then click on **Custom&nbsp;Websocket&nbsp;Clients**.

![Sidebar Websocket Clients actions](/guide/streamerbot-configuration/4-sidebar-websockets.png)

2. You will see an existing websocket client named **Stream Companion**, double click on it, and enable **Auto Connect on Startup**, then click **Ok**. Finally, right click on the client and click **Connect**.

![Websocket Client Configuration](/guide/streamerbot-configuration/5-websocket-config.png)

## Setup the Redeem Reward

1. In the sidebar, open **Actions&nbsp;&&nbsp;Queues**, then click on **Actions**.

![Actions Tab](/guide/streamerbot-configuration/6-actions.png)

2. You will see 2 actions in the group **Stream Companion**, select **Events**.

![Events Action](/guide/streamerbot-configuration/7-events.png)

3. On the right, you will see a **Triggers** section, there should be a trigger named **Reward Redemption**, double click on it, a window will open and click on **Create Reward**.

![Action Triggers](/guide/streamerbot-configuration/8-triggers.png)

4. Setup the name, description, cost, and cooldown of the reward. Then make sure to enable **User Input Required** and click **Create**, then click **Ok** to save.

![Create Redeem](/guide/streamerbot-configuration/9-redeem.png)

That should be it! The redeem reward should now be available in the chat and will interact with Stream Companion.

## Optional: Speaker.Bot Configuration

If you want your AI bot to talk through **Speaker.Bot**, go in the **Chat & TTS**, double click on **Set argument %voiceAlias% to...**, enter the **Speaker.Bot** voice alias in the **Value** field and click **Ok** to save.

![Create Redeem](/guide/streamerbot-configuration/10-speakerbot.png)