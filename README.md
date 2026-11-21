# DayFlow

A private routine app for prayer, skin care, workouts, runs, reading and meals. It connects to Strava, Apple Health (through an iPhone Shortcut), Claude and ChatGPT. It works offline and can be added to your home screen.

## 1. Publish on GitHub Pages
1. On github.com create a new repository, e.g. `dayflow`.
2. **Add file → Upload files** and upload everything here: `index.html`, `app.js`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png`.
3. **Settings → Pages → Deploy from a branch → main → / (root) → Save.**
4. After about a minute the app is live at `https://YOUR-USERNAME.github.io/dayflow/`.

## 2. Add to your home screen
- iPhone (Safari): Share → **Add to Home Screen**. Always open DayFlow from this icon.
- Android (Chrome): ⋮ → **Install app**.

## 3. Lock it (do this first)
Go to **Settings → Passcode lock**. Your data is encrypted on your phone with AES-256, and the app locks when you leave it.
**If you forget the passcode, the data can't be recovered**, so export a backup now and then.

### Who can see what
- GitHub only holds the app's code. **None of your data goes to GitHub.** Anyone who opens your link gets a blank copy of the app on their own device.
- Your data only leaves your phone when you use a connection yourself: Strava (to download your activities), aladhan.com (prayer times for your city) and Claude/OpenAI (only when you tap Ask).
- The app blocks connections to any other site.

## 4. Connect Strava
1. Go to https://www.strava.com/settings/api and create an app. Set **Authorization Callback Domain** = `YOUR-USERNAME.github.io`.
2. In DayFlow go to **Connect → Strava**, paste the Client ID and Secret, and tap **Connect**.
3. If Strava sends you back to Safari instead of the app, copy the code it shows. Then open DayFlow from your home screen and go to **Connect → Strava → Got a code?**
Runs are logged as runs and everything else as workouts. They also tick off your Run and Workout routines. DayFlow syncs whenever you open it, at most once an hour.

**Apple Watch / Health workouts:** connect Apple Health in the Strava app. Workouts then go Health → Strava → DayFlow.

## 5. Apple Health (steps, active calories, exercise minutes, weight)
Apple doesn't let any website read Health, so an iPhone Shortcut does it. The steps are inside the app under **Connect → Apple Health → Set up the Shortcut**. The Shortcut copies something like:
```
DAYFLOW
steps=8432
active_kcal=540
exercise_min=45
weight=72.5
```
Then tap **Import from Health**. Add a daily Automation in the Shortcuts app so the data is ready every evening.

## 6. Prayer app
Add your prayer app under **Connect → App shortcuts**, then pick it under **Prayer app**.
- **iPhone:** in the Shortcuts app, make a shortcut with one action, **Open App → (your app)**, named e.g. "Open Muslim Pro". In DayFlow choose "iPhone app (via Shortcuts)" and enter that name. This works for any app.
- **Android:** choose "Android app" and enter the package name, e.g. `com.bitsmedia.android.muslimpro`.

Set the same calculation method in **Settings** so the times match your app. "Add this month's prayer times to my calendar" gives you an alert for each prayer.

## 7. Claude / ChatGPT coach
In the **Log** tab, write your workout plan and tap **Ask Claude** or **Ask ChatGPT**.
- With no keys, it copies your plan plus 4 weeks of training and health data, then opens the Claude or ChatGPT app.
- With an API key (Connect tab, stored encrypted), the answer appears inside DayFlow. API use is billed by Anthropic or OpenAI, so set a low spending limit on the key.

## Updating the app later
Upload the changed files again and change `dayflow-v5` in `sw.js` (to `v6` and so on) so phones get the update.

## Quests & levels 🏆
- **XP:** +10 per routine, +15 per prayer, +5 per log entry, +100 per badge.
- **Levels & titles:** 🌱 Beginner → 🧭 Seeker (3) → 🛡️ Disciplined (5) → ⚔️ Warrior (8) → 🏅 Champion (12) → 🦁 Master (16) → 👑 Legend (20).
- **Daily quests:** 3 new ones every day, picked from what you actually have scheduled. Claim all 3 to open the 🎁 daily chest. There's also a 🌟 perfect-day bonus, and you can swap your quests once a day.
- **Weekly quests:** 3 bigger goals, e.g. run 15 km, 3 workouts, all 5 prayers on 5 days.
- **Monthly boss:** each routine and prayer you finish this month is a hit. Defeat it for +500 XP.
- **Badges:** 16 to unlock (streaks, perfect days, 100 prayers, 50 km, 500 pages…).
- **Streak 🔥:** a day counts when at least half of its routines are done.

## Language learning 🗣️ (Learn tab)
- **Pick your language** the first time you open Learn: level, daily goal, new words per day, native language.
- **Duolingo:** tap 🦉 *Open Duolingo*, do your lesson, then log it under *Log practice* (minutes, plus XP and streak if you like). That ticks off your "Duolingo lesson" routine. Duolingo has no public API, so this part is manual. On iPhone you can set the Duolingo link to a Shortcut link (`shortcuts://run-shortcut?name=Open%20Duolingo`) so it always opens the app.
- **Flashcards with spaced repetition:** add the words you got wrong, one at a time or many at once (`word = meaning | example`). *Review* shows each card at the right moment (Again / Hard / Good / Easy). 🔊 reads it aloud and 🎤 *Say it* checks your pronunciation (Chrome / Safari).
- **AI tutor:** a story using your words, a quiz, conversation practice, help with words you keep forgetting, and writing correction. It uses Claude or ChatGPT, answering inside DayFlow if you saved an API key and opening the app otherwise.
- **Language quests and badges:** one language quest every day and every week, +2 XP per flashcard, and badges for 100 and 500 words, 50 words mastered and 10 hours of practice.
- **Starter routines:** Duolingo (daily), flashcards (daily), listening (3×/week), speaking (every 2 days) and conversation (weekly). You can edit them in Routines.

## Your character 🧙
Tap the hero card in **Quests** to design your character: name, motto, class, skin, hair or hijab, colors, eyes, mouth, beard, glasses or headband, outfit and background. *Randomize* and *Preview your Level 20 look* are there too.
- **Classes** give bonus XP. Paladin: +2 on everything. Monk: +5 on prayers & Quran. Warrior: +5 on workouts. Ranger: +5 on runs. Scholar: +5 on reading & language. Healer: +5 on skin care & meals. You can switch any time, and the bonus counts from the day you switch.
- **Gear unlocks:** 🧣 Scarf (Lv 3), ✨ Aura (Lv 5), 🦸 Cape (Lv 8), 🥇 Gold trim (Lv 12), 🌟 Star halo (Lv 16), 👑 Crown (Lv 20).

## Anime characters & quest animations ✨
- **Characters** are drawn in an anime style: sparkly eyes in 8 colors, 8 hairstyles (including hijab and twin tails), cat ears, an ahoge, a flower pin, a headband, blush and freckles.
- **9 classes, one for each activity, each with its own outfit:** 🛡️ Paladin (all), 📿 Spirit Monk (prayer), ⚔️ Warrior (workouts), 🏹 Wind Ranger (running), 🌸 Bloom Healer (skin care), 📜 Sage (reading), 🔮 Rune Mage (language), 🧪 Alchemist (meals), ♟️ Tactician (work/study).
- **QUEST CLEAR! screen** with anime speed lines and your character, themed by quest type: prayer 🌙 rising stars · workout 💥 power-up shake · run 💨 speed dash · skin care 🫧 bubbles · reading 📖 pages · language 💬 greetings in many languages · meals 🍎 falling fruit · steps 👣 footprints · chest 🪙 coins · boss ⚔️ sword slash.
- Ticking a routine gives a small themed burst. Sound effects can be turned off in More → Settings.

## 💊 Medications (More → Medications)
- Add each medication with its dose and form, how often (every day, certain days, or every few days), times (1×, 2×, 3× a day or custom), food instructions, start and end dates, and stock.
- Doses appear on **Today** in time order. Late doses are flagged, and ticking one off lowers your stock count. You get a refill alert when stock runs low.
- You can see the % taken over the last 7 and 30 days, and export a calendar file with a reminder at every dose time.
- There's a daily quest ("Take all your medications"), a weekly quest and the 💊 *Self-care pro* badge. The 🧪 Alchemist class gets +5 XP per dose.

## 🏋️ Train tab: 5-day rotating program
- The default rotation is **Push → Pull → Legs → Upper → Lower + Core** on **Sat, Sun, Mon, Wed, Thu** (Tue and Fri are rest days). You can change the days, rename workouts, and add, remove or reorder exercises (sets, reps, rest) in *Edit program*.
- **It rotates:** workouts go in order on your training days, and a missed day doesn't skip a workout. *Skip ⏭* moves to the next one.
- **During a workout:** last time's weights are filled in. Tick each set and a rest timer starts (+15s / Skip). The finish screen shows your sets and volume, and **NEW PR!** when you beat your best.
- A finished workout logs itself, ticks off "Training session" on Today, and counts toward the training quests and the 🏋️ *Iron will* and 🏆 *PR hunter* badges.
- The AI coach (Log → Workout coach) now sees your full program and your recent sets.

## 🃏 Card of the day
Tap the card on Today to reveal a motivational card (+5 XP). Collect all 30 across Discipline, Strength, Wisdom, Focus and Spirit. Your collection is in Quests.

## Navigation
The bottom bar is now **Today · Quests · Train · Learn · More**. *More* holds Routines, Medications, Log, Connections and Settings.

## 🌙 Dark mode
**More → Settings → Appearance:** *Auto* (follows your phone), *Light* or *Dark*. The 🌓 button at the top of **More** switches between them in one tap, and your choice is remembered, even on the lock screen. *(New file: `theme.js`, so upload it too.)*

## ⚔️ Hunter-style characters & STATUS window
- New default **Hunter** art style: a mature anime look with sharp eyes, ✨ glowing eyes (can be turned off), a dark high-collar coat and a glow in your class color. Switch back to **Chibi** in the character editor under *Art style*. Dark backgrounds were added.
- The **Quests** tab opens with a game-style **STATUS** window showing your level, class, EXP and 6 stats that grow with your real activity:
  💪 STR (workouts, runs) · ❤️ VIT (meds, meals, skin care) · 🧠 INT (reading, language) · 🌙 SPI (prayer) · 🎯 FOC (work and to-dos) · ⚔️ DIS (streaks and perfect days).

## 📋 To-do lists (new To-do tab)
- Starts with **Groceries 🛒, Work 💼 and Home 🏠** lists, and you can add your own with *＋ List*.
- Quick typing: `milk x2` adds a quantity, `pay bills !` marks it important ★, `call bank tomorrow` sets a due date. 📅 switches the due date between today, tomorrow and next week.
- **⭐ Today** collects starred and due tasks from every list, and they also appear on the Today screen with a quick-add box.
- *Share list* sends your grocery list to WhatsApp or anywhere else. *Clear done items* tidies the list.
- +5 XP per to-do (♟️ Tactician gets +5 more), daily and weekly to-do quests, and the 📋 *Getting it done* badge.

## 🌃 Night-city character look
The Hunter style now has a **black techwear jacket** (high zip collar, straps, orange accents), **rim lighting** on the hair, face and jacket, **amber eyes**, an earring, and a **night-city background** with blurred lights. You can change the *Light color* (orange, gold, blue, purple, red, green, white), switch the background to a plain color, and turn glowing eyes on or off.
**More → Settings → Accent color → 🟠 Night orange** gives the whole app the same orange-and-black look.

## 💰 Money (More → Money)
- **Import bank SMS:** paste one or many messages, use *Paste from clipboard*, or *Open file*. DayFlow reads the amount, whether it's spending or income, the shop, the date and the card, in **English and Arabic**. It skips OTP and balance-only messages and skips duplicates.
- **Auto-categories:** groceries, food, transport and fuel, bills, shopping, health, fitness, subscriptions, education, home, transfers, cash, gifts. Change a category once and it remembers that shop.
- **Android:** after installing from Chrome, long-press a bank SMS → **Share → DayFlow**.
- **iPhone:** a Shortcuts *Message* automation appends bank SMS to `bank.txt`, which you import with *Open file*.
- Monthly total, comparison with last month, a daily average, a **budget** bar with the daily amount you can spend to stay on track, and a "where it went" breakdown you can tap to filter.
- Foreign-currency charges (e.g. USD) are listed but kept out of your main-currency totals.

## 🎁 Wishlist (Money → Wishlist)
Add things you want with a price, priority and link. Track **how much you've saved** for each one. *Bought ✓* can also log it as spending.

## 🛒 Smarter groceries (To-do → Groceries)
Items are grouped by **aisle** automatically (English and Arabic). Add a price with `@`, e.g. `milk x2 @45`, to see an **estimated total**. **Done shopping** logs what you spent in Money and clears the checked items.

## 🖼️ Real anime illustration as your character
Character editor → **Character art → 🖼️ My own image → Upload your anime illustration**. A portrait or half-body works best. Your art becomes:
- a big **character card** on Quests (name, level, title, class, EXP and streak on top, with a glowing frame, a pulsing aura from Level 5, and 🌟/👑 at Levels 16/20),
- a **banner** at the top of Today,
- the hero of every **QUEST CLEAR / LEVEL UP** screen.
The image is stored only on your phone (encrypted with your passcode) and is never uploaded to GitHub.

## 📈 Progress (weekly & monthly)
Tap the progress bar on **Today**, the **📈 Weekly & monthly progress** button on Quests, or **More → Progress**.
- **Week / Month** with ‹ › to look back: overall completion ring, the change compared with the same point last week or month, XP earned, perfect days and your best day.
- **Day by day:** a bar chart for the week and a colour-coded calendar for the month. Tap a day to open it.
- **By area:** prayer, exercise, skin care, reading, language, meds and the rest.
- **Totals:** prayers, training sessions, km, pages, language minutes, flashcards, to-dos and spending.
- **Routines:** each one's done vs due, with weak spots marked *needs attention*.

## 🍡 Cute character style (default)
The character is now drawn in a soft **kawaii style**: rounded bangs, big glossy eyes, blush, a pastel background and rounded accessories (bow, cat ears, flower, curly ahoge). The Quests card is a soft pastel **Hero card** instead of the dark STATUS window. Existing characters switch to the cute style once; you can go back to **⚔️ Hunter (dark anime)** any time in the character editor under *Art style* (the Hunter-only options like glowing eyes and night city appear only then). Hair names changed: *Spiky hero → Tufty*, *Wolf cut → Fluffy*. Bump `dayflow-v16` in `sw.js` when you upload so phones refresh.
