---
sidebar_position: 6
---

# Colors and more! ✨

DeluxeHubReloaded offers advanced text formatting options that go beyond standard Minecraft color codes. Use HEX colors, gradients, and rainbow effects to give your server a unique touch!

## Standard Minecraft Color Codes

Of course, DeluxeHubReloaded supports the classic Minecraft color codes using the ampersand (`&`) symbol.

*   **Colors:** `&0` - `&9`, `&a` - `&f`
    *   Example: `&cThis text is red.`
*   **Formatting:**
    *   `&l` **Bold**
    *   `&m` ~~Strikethrough~~
    *   `&n` <u>Underline</u>
    *   `&o` *Italic*
    *   `&r` Reset (removes all previous colors/formatting)
    *   Example: `&a&lThis is bold and green.`

These can be used almost anywhere text is displayed.

## HEX Color Codes (RGB)

For more precise colors, you can use HEX color codes. DeluxeHubReloaded supports this via a special tag format.

*   **Format:** `{#RRGGBB}Your Text`
    *   `RRGGBB` is the six-digit HEX code of your desired color.
*   **Example:**
    *   `{#FF0000}This text is bright red.`
    *   `{#34ebae}This text has a custom teal color.`

**Note:** Standard Spigot HEX codes (`&#RRGGBB`) are also supported through `ChatColor.translateAlternateColorCodes` after our custom patterns are processed and should work in most cases. However, the `{}` format is recommended as it is processed by DeluxeHubReloaded's internal color system.

## Gradients

Create beautiful transitions between two HEX colors for your text.

*   **Format:** `{#START_HEX>}Your Text</#END_HEX}`
    *   `START_HEX` is the HEX code of the starting color.
    *   `END_HEX` is the HEX code of the ending color.
*   **Example:**
    *   `{#12C2E9>}This text has a gradient from blue to purple</#C471ED}`
    *   `{#FFD700>}Golden Gradient</#FFA500}`

The text in between will smoothly transition from the start color to the end color.

## Rainbow Colors

Let your text shine in the colors of the rainbow!

*   **Format:** `<RAINBOWsaturation>Your Text</RAINBOW>`
    *   `saturation`: A floating-point value that determines the saturation of the rainbow. Typically between `0.0` (grayscale) and `1.0` (full color). Values like `0.7` or `1.0` are common. The parser also accepts values like `100` (which is interpreted as `100.0`).
*   **Example:**
    *   `<RAINBOW1.0>This text is a bright rainbow!</RAINBOW>`
    *   `<RAINBOW0.7>A softer rainbow effect.</RAINBOW>`

## Centered Text

You can automatically center lines of text in chat messages.

*   **Format:** `<center>Your text to be centered</center>`
*   **Example in a `[MESSAGE]` action:**
    *   `- "[MESSAGE] <center>&eImportant Announcement!</center>"`
*   **Note:** This works best for single-line chat messages. Centering is based on standard Minecraft font widths. In GUIs or scoreboards, where text width is handled differently, this tag might not have the desired effect.

## Where can you use these formats?

These advanced color and formatting options can be used in most places where placeholders also work:

*   **Messages** (e.g., in `messages.yml` or in Action Strings like `[MESSAGE]`)
*   **Scoreboards** (title and lines in `config.yml`)
*   **Tablist** (header and footer in `config.yml`)
*   **Custom Menu / GUI items** (names and lore in `menus/*.yml`)
*   **Action Strings** (e.g., the text part of an `[ACTIONBAR]` or `[TITLE]` action)

Experiment with these options to give your server a professional and appealing look!
