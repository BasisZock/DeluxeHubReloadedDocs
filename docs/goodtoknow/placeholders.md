---
sidebar_position: 4
---

# Are there Placeholders?

DeluxeHubReloaded uses placeholders to display dynamic and up-to-date information in various parts of the plugin. This allows you to personalize messages, show server statistics, and much more!

You'll find them useful in:

*   Messages (like welcome messages or command responses)
*   Scoreboards
*   Tablist (header and footer)
*   Custom Menu / GUI items (names and lore)
*   Action strings

There are two main sources for placeholders:

## 1. Built-in Placeholders (DeluxeHubReloaded)

These placeholders are included directly with DeluxeHubReloaded and require no additional plugins or setup.

*   **`%player%`**
    *   **Displays:** The player's name.
    *   **Example:** `[MESSAGE] Hello, %player%!` will show as "Hello, Notch!"

*   **`%online%`**
    *   **Displays:** The current number of players online on your server.
    *   **Example:** In a scoreboard line: `Players Online: %online%`

*   **`%online_max%`**
    *   **Displays:** The maximum number of player slots your server has.
    *   **Example:** In a tablist footer: `Server Capacity: %online%/%online_max%`

*   **`%location%`**
    *   **Displays:** The player's current X, Y, and Z coordinates.
    *   **Example:** `[MESSAGE] Your current coordinates are: %location%`

## 2. PlaceholderAPI Placeholders (External Plugin)

If you have the popular [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) plugin installed on your server, DeluxeHubReloaded will automatically detect and enable support for its vast library of placeholders.

*   **How it works:** You can use any placeholder provided by PlaceholderAPI and its expansions (eClouds) just like you would in other plugins.
*   **Finding Placeholders:**
    *   Check the PlaceholderAPI Spigot page for available expansions.
    *   Use the command `/papi ecloud list all` in-game (if you have permission) to see installed and available expansions.
    *   Run `/papi parse me <placeholder>` to test a placeholder (e.g., `/papi parse me %player_world%`).
*   **Example (using a common PlaceholderAPI placeholder):**
    *   `[MESSAGE] Your current balance is: %vault_eco_balance%`
    *   In a menu item's lore: `- &7World: %player_world%`

## Where Can You Use Placeholders?

You can use *any* of these placeholders (built-in or from PlaceholderAPI) in many parts of DeluxeHubReloaded's configuration files:

#### Messages (`messages.yml` or in Action Strings)

Placeholders are great for personalizing messages.

*   **Example in an Action:**
    ```yaml
    # In config.yml -> join_events
    join_events:
      - "[MESSAGE] &7Welcome back to the server, &b%player%&7!"
      - "[MESSAGE] &7There are currently &e%online% &7players online."
    ```

#### Scoreboard (`config.yml` under `scoreboard` section)

Display dynamic information directly on the player's screen.

*   **Example Title:**
    ```yaml
    scoreboard:
      title: "&bMyServer &7- &f%player%"
    ```
*   **Example Lines:**
    ```yaml
    scoreboard:
      lines:
        - "&7Rank: %luckperms_primary_group_name%" # PlaceholderAPI example
        - "&7Online: &a%online%&7/&a%online_max%"
    ```

#### Tablist (`config.yml` under `tablist` section)

Customize the header and footer of the player list.

*   **Example Header:**
    ```yaml
    tablist:
      header:
        - ""
        - "{#9863E7}Welcome, %player%!{/#545eb6}"
        - "&7Online: &e%online%"
        - ""
    ```
*   **Example Footer:**
    ```yaml
    tablist:
      footer:
        - ""
        - "&ePing: %player_ping%" # PlaceholderAPI example
        - "&7Visit us at: &bwww.example.com"
        - ""
    ```

#### Custom Menus / GUIs (`menus/*.yml` files)

Make your menu items and titles dynamic.

*   **Example Item Name:**
    ```yaml
    # In menus/your_menu.yml
    items:
      my_item:
        display_name: "&aYour Stats (%player%)"
    ```
*   **Example Item Lore:**
    ```yaml
    items:
      server_info:
        material: BOOK
        slot: 0
        display_name: "&bServer Info"
        lore:
          - "&7Welcome, &f%player%&7!"
          - "&7Current world: &e%player_world%" # PlaceholderAPI example
          - "&7Players Online: &a%online%&7/&a%online_max%"
    ```
    *(Note: For GUI titles, PlaceholderAPI is generally recommended for dynamic text if built-in ones don't parse directly without it.)*

#### Action Strings (Various places)

Placeholders can be used within the data part of an action.

*   **Example Console Command Action:**
    ```yaml
    # In config.yml -> custom_join_items.items.*.actions
    actions:
      - "[CONSOLE] eco give %player% 100"
    ```
*   **Example Title Action:**
    ```yaml
    actions:
      - "[TITLE] &aHello %player%;&fWelcome to %server_name%;1;3;1" # %server_name% would be PAPI
    ```

By using placeholders effectively, you can create a much more engaging and informative experience for your players!
