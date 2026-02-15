# Setup Custom Triggers

> **Note:** This guide assumes you have a simple understanding of how Streamer.Bot works.

You can setup custom triggers, which allows the bot to respond to many events. In this guide, I will be setting up a trigger for a shoutout command, but with a simple understanding of how Streamer.Bot works, you can easily setup any trigger you want.

## Create a new trigger

1. In **Actions**, navigate to the **Events** action.
2. In the **Triggers** section, add a trigger by doing a right click and go in **Add** > **Core** > **Commands** > **Command Triggered**.
3. If you already have a command, select it in the select field and skip to step 4. Otherwise, click **Create Command**.
4. Setup the command configuration as you wish, and click **Ok**, then **Ok** again. Here is an example of a command:

![Command Config](/guide/custom-triggers/4-command.png)

## Setup a new event handler

1. In the **Sub-Actions** section, locate **{} switch ("%triggerName%")**, right click on it and select **Add Case**.
2. In the field, enter the type of trigger that you just added, in this case, it is **Command Triggered**, click **Add**, then **Ok**.
3. Now locate any switch case that already exists, like **case (Reward Redemption)**, right click on it and select **Copy Sub-Actions Contents**.
4. In the newly created case, right click on it and select **Paste Into Sub-Action**.

## Customize the event handler

1. Double click on the action called **Twitch Add Target Info**, and change the value to `%input0%`. 

> The variable `%input0%` corresponds to the first argument of the command. If the trigger is something else than a command, I suggest you to look at the Streamer.Bot documentation for that specific trigger to find the correct variable.

2. If you want the bot to only send the message in chat, double click on the action called **Set argument %silent%** and set it to `True`. 
3. Double click on the action called **Set argument %aiPrompt%** and change the value to what you want the bot to do. In this case, I will set it to `Give a shoutout to %input0%`.
4. Since this is a shoutout command, I will also add a new action that triggers a **Twitch Shoutout**, in the case, right click and select **Add** > **Twitch** > **Moderation** > **Send Shoutout**, then set the value to `%input0%`.

With this configuration, you should be able to use the `!so @username` command to send a shoutout to a user, and the bot will give a response with all the information it gets.