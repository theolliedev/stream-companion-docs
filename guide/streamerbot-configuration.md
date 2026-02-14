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

4. Set up the name, description, cost, and cooldown of the reward. Then make sure to enable **User Input Required** and click **Create**, then click **Ok** to save.

![Create Redeem](/guide/streamerbot-configuration/9-redeem.png)

That should be it! The redeem reward should now be available in the chat and will interact with Stream Companion.

## Optional: Speaker.Bot Configuration

If you want your AI bot to talk through **Speaker.Bot**, go in the **Chat & TTS**, double click on **Set argument %voiceAlias% to...**, enter the **Speaker.Bot** voice alias in the **Value** field and click **Ok** to save.

![Create Redeem](/guide/streamerbot-configuration/10-speakerbot.png)