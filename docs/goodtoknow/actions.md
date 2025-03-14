---
sidebar_position: 3
---

# What are actions?
Actions which are used throughout the plugin

These are used in the configuration files that allow you to run different types of actions.

### Action Types

Click on these actions to find out more information and examples on how to use them!

* [MESSAGE] - [Player Chat Message](link to sub topic)


* [BROADCAST] - [Server Broadcast Message](link to sub topic)


* [TITLE] - [Player Title Message](link to sub topic)


* [ACTIONBAR] - [Player ActionBar Message](link to sub topic)


* [SOUND] - [Player Sound](link to sub topic)


* [GAMEMODE] - [Player Gamemode](link to sub topic)


* [EFFECT] - [Player Potion Effect](link to sub topic)


* [MENU] - [Player Inventory Open](link to sub topic)


* [CLOSE] - [Player Inventory Close](link to sub topic)


* [BUNGEE] - [Player BungeeCord Send](link to sub topic)


* [PROXY] - [Player Velocity Send](link to sub topic)


* [COMMAND] - [Player Command Execute](link to sub topic)


* [CONSOLE] - [Console Command Execute](link to sub topic)



#### Player Chat Message

Sends a message to the player

**Syntax:** `[MESSAGE] <message>`
**Example:** `[MESSAGE] Hello %player%! Welcome to this server!`

#### Server Broadcast Message

Broadcast a message to all online players

**Syntax:** `[BROADCAST] <message>`
**Example:** `[BROADCAST] &eHello all players!`

#### Player Title Message

Display a title message to the player

**Syntax:** `[TITLE] <title;subtitle;fadein;stay;fadeout>`
**Example:** `[TITLE] &6Welcome &9%player%;&eto ExampleMC!;3;5;3`

#### Player ActionBar Message

Display an actionbar message to the player

**Syntax:** `[ACTIONBAR] <message>`
**Example:** `[ACTIONBAR] &eWelcome to the server %player%!`

#### Player Sound

Play a sound to the player
Sound list: [https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html)

**Syntax:** `[SOUND] <sound>`
**Example:** `[SOUND] ENTITY_PLAYER_LEVELUP`

#### Player Gamemode

Set the gamemode for the player

**Syntax:** `[GAMEMODE] <gamemode>`
**Example:** `[GAMEMODE] CREATIVE`

#### Player Potion Effect

Give the player a potion effect

**Syntax:** `[EFFECT] <effect;level>`
**Example:** `[EFFECT] SPEED;3`

#### Player Inventory Open

Open a custom GUI

**Syntax:** `[MENU] <menu id>`
**Example:** `[MENU] serverselector`

#### Player Inventory Close

Closes an open inventory the player has open. There is no arguments for this action unlike the rest.

**Syntax:** `[CLOSE]`
**Example:** `[CLOSE]`

#### Player BungeeCord Send

Send the player to a specficied BungeeCord server on your network

**Syntax:** `[BUNGEE] <server>`
**Example:** `[BUNGEE] factions`

#### Player Velocity Send

Send the player to a specficied BungeeCord server on your network

**Syntax:** `[PROXY] <server>`
**Example:** `[PROXY] factions`


#### Player Command Execute

Execute a command from the player

**Syntax:** `[COMMAND] <command>`
**Example:** `[COMMAND] warp spawn`

#### Console Command Execute

Execute a command from console

**Syntax:** `[CONSOLE] <command>`
**Example:** `[CONSOLE] give %player% diamond_shovel 1`

If you want to teleport a player to another world for multi-world servers using Multiverse-Core use `[CONSOLE] mvtp %player% survival`
