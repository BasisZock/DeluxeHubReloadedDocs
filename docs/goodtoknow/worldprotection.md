---
sidebar_position: 2
---

# How is the world protection handled?

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
