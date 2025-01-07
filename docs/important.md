---
sidebar_position: 2
---

# ⚠️ IMPORTANT READ ME ⚠️
<h3 class="subtitle-gray">This is important news to DeluxeHubReloaded!</h3>
if you need help join our [discord](https://discord.gg/uQkg8ZeHzK)

### send player to other servers
if you are using DeluxeHubReloaded `v3.6.11` or later and running a server network please change your action from `[BUNGEE]` to `[PROXY]` we are removing `[BUNGEE]` in future versions!

old
```yml title="/DeluxeHubReloaded/menus/serverselector.yml"
  survival:
    material: GRASS_BLOCK
    slot: 15
    amount: 1
    glow: false
    display_name: '&aSurvival'
    lore:
      - '&7Join now!'
      - '&aMulti lore support too!'
    actions:
      - '[CLOSE]'
      - '[MESSAGE] &7Sending you to: &eSurvival'
      // highlight-next-line
      - '[BUNGEE] survival'
```


new
```yml title="/DeluxeHubReloaded/menus/serverselector.yml"
  survival:
    material: GRASS_BLOCK
    slot: 15
    amount: 1
    glow: false
    display_name: '&aSurvival'
    lore:
      - '&7Join now!'
      - '&aMulti lore support too!'
    actions:
      - '[CLOSE]'
      - '[MESSAGE] &7Sending you to: &eSurvival'
      // highlight-next-line
      - '[PROXY] survival'
```