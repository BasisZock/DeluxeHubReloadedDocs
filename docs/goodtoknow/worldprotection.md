---
sidebar_position: 2
---

# The new world protection system

In the latest version of DeluxeHubReloaded, we have introduced a new world protection system that makes world protection
easier. We disabled world modification in any way when you are not in build mode (/buildmode)

| **command** | **permission**                     | **command**                        |
|-------------|------------------------------------|------------------------------------|
| /buildmode  | deluxehub.command.buildmode        | switch in build mode               |
| /buildmode  | deluxehub.command.buildmode.others | switch other players in build mode |

if you want to use the old world protection system you can do it in the config.yml:

```yml
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
# | LEGACY SYSTEMS                           |
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#

legacySystems:
  # Should we use the new lobby permission system?
  # If this is disabled build, destroy, interact, pvp, pickup and drop will be only possible in the build mode instead all the time as a admin
  # If this is enabled, the old system will be used (permission based https://strafbefehl.github.io/DeluxeHubReloadedDocs/goodtoknow/worldprotection)
  permissionsEnabled: false # Set this to true to use the old system
```

# How is the world protection handled? (Legacy)

you can use `deluxehub.item.* | deluxehub.player.* | deluxehub.block.*` To obtain the authority of all world event
management categories.

| **description**    | **permission**           |
|--------------------|--------------------------|
| Discarded items    | deluxehub.item.drop      |
| Pick up items      | deluxehub.item.pickup    |
| PVP                | deluxehub.player.pvp     |
| Destroy the block  | deluxehub.block.break    |
| Place box          | deluxehub.block.break    |
| Square interaction | deluxehub.block.interact |

btw this is the reason why operators can drop and move everything they have the permission for it.

if you want to change it just set the permissions in luckperms to false

`/lp user <user> permission set deluxehub.item.drop false`
