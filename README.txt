BIRTHDAY WEBSITE — QUICK START
===============================

FILES
-----
index.html       Website structure
style.css        Cute Pink design and responsive layout
script.js        Name, letter, buttons and heart animations
birthday-video.mp4  (you add this yourself; optional)

HOW TO OPEN
-----------
1. Extract the ZIP file.
2. Open the birthday-website folder in VS Code.
3. Open index.html with Live Server, or double-click index.html.
4. Internet is needed for the Tailwind CDN and Google Fonts.

PERSONALIZE IT
--------------
1. Open script.js.
2. At the top, change:
      const herName = "My Love";
      const yourName = "Your Love";
3. Edit letterMessage to use your own words.
4. Save the file and refresh the browser.

ADD YOUR OWN PHOTOS
-------------------
The three memory cards currently use pastel placeholders.
Easy option: put your photo files in this folder, for example:
  memory1.jpg
  memory2.jpg
  memory3.jpg

Then open index.html. Find:
  <div class="memory-photo photo-one"><span>♡</span><small>our favorite memory</small></div>

Replace that one div with:
  <div class="memory-photo" style="background-image:url('memory1.jpg'); background-size:cover; background-position:center;"></div>

Repeat for photo-two and photo-three, using memory2.jpg and memory3.jpg.
Use photos you both feel comfortable sharing. For a private gift, avoid putting sensitive photos on a public website.

ADD THE BIRTHDAY VIDEO
----------------------
1. Export your video from CapCut as MP4.
2. Rename it exactly:
      birthday-video.mp4
3. Put it in the same folder as index.html.
4. Refresh the website. The video player will show when the file is available.

IMPORTANT:
The browser cannot play a video stored only on your laptop if you send the website link to her.
For an online website, the MP4 must also be hosted online and the video source changed to that hosted URL, or uploaded to a suitable hosting service. Check the service's privacy and sharing settings.

EDIT THE WORDS
--------------
The website's visible interface is in English for a romantic aesthetic. You can change any text directly in index.html.
The personalized name and letter text are controlled from script.js.

MOBILE CHECK
------------
In VS Code, start Live Server. To test on a phone, both devices generally need the same Wi-Fi and the laptop's firewall must allow the Live Server port. For sending it to Japan, publish the site online (e.g. GitHub Pages) and make sure any photos/video are hosted too.
