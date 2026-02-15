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