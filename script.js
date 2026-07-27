/* ==========================================================================
   ORION LOG CMS - File-Driven Cyberpunk Y2K Frontend & Embedded Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {

  const siteConfig = {
    siteTitle: "ORION LOG",
    siteSub: "",
    kanjiText: "未来を夢見て",
    weatherCity: "NEON CITY_2077",
    idText: "ID: LYRA_XO",
    idLevel: "LEVEL: DREAMER",
    hudTags: "DREAMER // READER // CREATOR"
  };

  const pagesData = {
    home: {
      title: "> WELCOME TO MY UNIVERSE",
      sub: "> ようこそ、私の世界へ",
      paragraphs: [
        "I'm <span class=\"pink-glow\">Lyra</span>, a 20-year-old Computer Science student from India.",
        "I collect projects, strange ideas, and little discoveries hidden between lines of code.",
        "If knowledge is an endless forest, this blog is my <span class=\"purple-glow\">notebook left on a mossy stone</span>."
      ]
    },
    notes: {
      title: "> MIDNIGHT NOTES",
      sub: "> 深夜のメモ",
      paragraphs: [
        "Fragments of <span class=\"pink-glow\">late night thoughts</span>.",
        "\"Stars don't shine without darkness. Code doesn't compile without coffee.\"",
        "Exploring Reading, soundscapes, and digital solitude under violet aurora skies."
      ]
    },
    projects: {
      title: "> CREATIVE LAB",
      sub: "> プロジェクト",
      paragraphs: [
        "Current Experiments & <span class=\"pink-glow\">Neon Builds</span>",
        "⚡ Project Orion_Log v2.07 [ONLINE]",
        "🔮 Synthwave Web Audio Engine [ACTIVE]",
        "Building experiences where <span class=\"purple-glow\">code meets art</span>."
      ]
    },
    newsletter: {
      title: "> TECH NEWSLETTER",
      sub: "> 最新テックニュース",
      paragraphs: [
        "Decrypted <span class=\"pink-glow\">Tech News Dispatches</span> & World Innovations.",
        "Weekly updates on AI breakthroughs, quantum computing, and global cyber innovations compiled by <span class=\"purple-glow\">Lyra</span>."
      ]
    },
    links: {
      title: "> NEON CONNECTIONS",
      sub: "> リンク",
      paragraphs: [
        "Connect with <span class=\"pink-glow\">Lyra</span> across the cyber grid:",
        "✦ <strong>GitHub:</strong> <a href=\"https://github.com/Lyra-4leafclover\" target=\"_blank\" class=\"link-url\">https://github.com/Lyra-4leafclover</a>",
        "✦ <strong>Twitter/X:</strong> <a href=\"https://x.com/Lyra_void\" target=\"_blank\" class=\"link-url\">https://x.com/Lyra_void</a>"
      ]
    },
    enchanted: {
      title: "> ENCHANTED GUESTBOOK",
      sub: "> 魔法のメッセージ",
      paragraphs: [
        "Leave your mark in the <span class=\"pink-glow\">Cyber Matrix</span>. Choose a username and drop an enchanted note for Lyra."
      ]
    }
  };

  const projectsData = [
    {
      id: "proj-1",
      date: "2026",
      title: "Project Orion_Log v2.07",
      status: "ONLINE",
      category: "CYBERPUNK CMS BLOG",
      summary: "A file-driven Y2K neon blog engine with real-time cloud guestbook, synthwave Web Audio, and frameless graphic collages.",
      blocks: [
        { type: "text", content: "Orion_Log is an aesthetic cyberpunk micro-journal built with pure HTML, CSS, and JS. Powered by local file content management and real-time cloud APIs." },
        { type: "image", src: "assets/disbelief_poster_exact.png", alt: "Orion Log Architecture Blueprint" }
      ],
      link: "https://github.com/Lyra-4leafclover/Orion-The-Hunter---Blog"
    },
    {
      id: "proj-2",
      date: "2026",
      title: "Synthwave Web Audio Engine",
      status: "ACTIVE",
      category: "AUDIO SYNTHESIZER",
      summary: "Custom Web Audio API lo-fi chord synthesizer featuring ambient sawtooth filters and tape reel animations.",
      blocks: [
        { type: "text", content: "An embedded browser synthesizer generating generative 2077 lo-fi chord progressions dynamically in real-time." },
        { type: "image", src: "assets/cassette_tape_exact.jpg", alt: "Synthwave Audio Engine Tape Reel" }
      ],
      link: "https://github.com/Lyra-4leafclover"
    },
    {
      id: "proj-3",
      date: "2025",
      title: "Neon Matrix Particle System",
      status: "COMPLETED",
      category: "CANVAS SHADER",
      summary: "Lightweight HTML5 canvas particle simulation rendering floating space dust and neon rain.",
      blocks: [
        { type: "text", content: "A high-performance particle engine rendering glowing atmospheric neon dust under violet skies." }
      ],
      link: "https://github.com/Lyra-4leafclover"
    }
  ];

  const newslettersData = [
    {
      id: "news-1",
      date: "27.07.2026",
      category: "AI & HARDWARE",
      title: "quantum neural chips breakthrough",
      blocks: [
        { type: "text", content: "Researchers demonstrate 100x efficiency gains using photon-guided neural architecture in quantum processing units." }
      ]
    },
    {
      id: "news-2",
      date: "25.07.2026",
      category: "CYBERNETICS",
      title: "decentralized autonomous web protocols",
      blocks: [
        { type: "text", content: "Next generation peer-to-peer web networks introduce zero-latency edge caching and encrypted mesh memory." }
      ]
    },
    {
      id: "news-3",
      date: "22.07.2026",
      category: "INTERFACE DESIGN",
      title: "next-gen spatial UI frameworks",
      blocks: [
        { type: "text", content: "Exploring tactile cybernetic interfaces and glowing glassmorphism in modern operating environments." }
      ]
    }
  ];

  const entriesData = [
    {
      id: "entry-weekly-1",
      year: 2026,
      date: "27.07.2026",
      title: "Weekly Log: 第1周 27-07-2026",
      blocks: [
        {
          type: "text",
          content: "Had a pretty productive week working on a few projects and diving deeper into some computer science topics."
        },
        {
          type: "text",
          content: "<h3 style=\"color:var(--pink-neon);margin-top:10px;\">1. Sunday Quiz Project Reveal</h3><p>My friend and I do this thing where we pick a mini project, build it separately during the week without showing each other, and then reveal what we made on Sunday to learn Python together.</p><p>This week’s project was a quiz maker. Instead of just doing a basic text quiz in the terminal, I wanted to support different question types (like multiple choice, fill-in-the-blank, and images).</p>"
        },
        {
          type: "image",
          src: "assets/post1_quiz_tkinter.png",
          alt: "Tkinter Red Panda Quiz Image Popup"
        },
        {
          type: "text",
          content: "<p>I used Tkinter and PIL so that whenever an image question pops up (like identifying an animal), a separate window opens with the picture, and then closes when you move on. I also added a simple hint trigger.</p><p>Here’s how I handled opening the image popups:</p><pre style=\"background:rgba(8,2,16,0.9);border:1px solid var(--purple-neon);padding:12px;border-radius:6px;overflow-x:auto;color:#d8b4fe;font-family:var(--font-mono);font-size:0.82rem;margin:10px 0;\"><code>def show_image_window(image_path):\n    if not os.path.exists(image_path):\n        print(f\"⚠️ Warning: Could not find image file '{image_path}'. Skipping image display.\")\n        return None\n\n    img_window = tk.Toplevel()\n    img_window.title(\"Question Image\")\n    \n    raw_img = Image.open(image_path)\n    raw_img.thumbnail((300, 300))\n    quiz_img = ImageTk.PhotoImage(raw_img)\n    \n    img_label = tk.Label(img_window, image=quiz_img)\n    img_label.image = quiz_img  # Reference to avoid garbage collection\n    img_label.pack(padx=10, pady=10)\n    \n    img_window.update()\n    return img_window</code></pre><p>It was fun seeing how differently both of us built the exact same thing on Sunday. Next week we’re making a typing speed tester.</p>"
        },
        {
          type: "text",
          content: "<h3 style=\"color:var(--pink-neon);margin-top:10px;\">2. IoT Expothon: Phantom Gate</h3><p>I’m also working on an IoT Expothon project called <strong style=\"color:var(--purple-bright);\">Phantom Gate – AI-Based Smart Industrial Safety & Access Control System</strong>.</p><p>It’s essentially a tabletop maze setup where judges turn a rotary encoder to move a payload through a grid. The catch is that the grid has invisible optical beam sensors. If someone breaks a beam, the system:</p><ul style=\"padding-left:20px;margin:8px 0;line-height:1.8;\"><li>Triggers an emergency E-STOP</li><li>Snaps a photo of their face</li><li>Plays a voice alert (\"INTRUDER DETECTED\")</li><li>Sends an emergency SMS to a phone</li></ul><p>There's a lot of hardware and sensor logic involved, but it's going to be cool to test out physically.</p>"
        },
        {
          type: "text",
          content: "<h3 style=\"color:var(--pink-neon);margin-top:10px;\">3. Capstone Project: Document Reassembly with OpenCV</h3><p>I also built a capstone project focused on automated document reassembly using OpenCV and computer vision. The idea is simple but tricky in practice: if you feed it images of shredded paper strips, jigsaw pieces of a document, or torn receipts, the system analyzes the edges, contours, and text/line continuations to piece them back together into the original document. It was a really fun challenge working through the image processing pipeline and matching logic to get the fragments aligning correctly.</p>"
        },
        {
          type: "image",
          src: "assets/post1_opencv_shreds.png",
          alt: "OpenCV Interactive Light Table Shredded Strips"
        },
        {
          type: "image",
          src: "assets/post1_opencv_reassembled.png",
          alt: "OpenCV Reassembled Classified Document"
        },
        {
          type: "image",
          src: "assets/post1_opencv_jigsaw.png",
          alt: "OpenCV Torn Scenery Strips Jigsaw Reassembly"
        },
        {
          type: "text",
          content: "<h3 style=\"color:var(--pink-neon);margin-top:10px;\">4. LeetCode SQL & BFS</h3><p><strong style=\"color:var(--purple-bright);\">MySQL on LeetCode:</strong> I just realized LeetCode has dedicated MySQL problem sets! Diving straight into database queries alongside standard DSA problems is going to make practicing SQL so much more structured.</p><p><strong style=\"color:var(--purple-bright);\">Graph Algorithms (BFS):</strong> I spent time mastering the theory and code for Breadth-First Search (BFS). Understanding queue-based level-order traversal opens up so many pathfinding possibilities, and I’m ready to start applying it to graph-based problems soon.</p>"
        },
        {
          type: "text",
          content: "<h3 style=\"color:var(--pink-neon);margin-top:10px;\">5. Course Realities & Cool Finds</h3><p><strong style=\"color:var(--purple-bright);\">Pivot on NPTEL:</strong> I started my NPTEL coursework this week, but to be completely honest, the lectures aren't landing well for me. Instead of slogging through material that isn't sticking, I’m taking full ownership of my learning path and switching to curated self-study resources.</p><h3 style=\"color:var(--pink-neon);margin-top:10px;\">6. Tool of the Week</h3><p>I stumbled upon <strong style=\"color:var(--purple-bright);\">Chai Visual</strong> (\"Learn CS by watching it move\"). Watching data structures, pointers, and memory step through frame-by-frame makes complex algorithm logic click instantly. Highly recommended if you're a visual learner.</p>"
        },
        {
          type: "image",
          src: "assets/post1_chai_visual.png",
          alt: "Chai Visual Algorithms You Can See UI"
        },
        {
          type: "text",
          content: "<p style=\"margin-top:14px;font-weight:bold;color:var(--purple-bright);\">Onward to next week's typing speed build and Phantom Gate prototyping!</p>"
        }
      ]
    }
  ];

  let activeTab = 'home';

  /* --------------------------------------------------------------------------
     0. Owner Moderation Mode (Disabled for Vercel Visitors by default)
     -------------------------------------------------------------------------- */
  const urlParams = new URLSearchParams(window.location.search);
  let isModerator = localStorage.getItem('lyra_mod_mode') === 'true' || urlParams.has('mod');

  function toggleModeratorMode() {
    isModerator = !isModerator;
    localStorage.setItem('lyra_mod_mode', isModerator ? 'true' : 'false');
    if (activeTab === 'enchanted') {
      renderEnchantedView();
    }
    alert(isModerator ? '🛠️ Owner Comment Moderation Mode Enabled.' : '🔒 Public Visitor Mode Active (Delete buttons hidden).');
  }

  // Secret Shortcut: Ctrl + Shift + M to toggle Owner Comment Delete Access
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'm') {
      e.preventDefault();
      toggleModeratorMode();
    }
  });

  /* --------------------------------------------------------------------------
     1. Render Site Configuration
     -------------------------------------------------------------------------- */
  function renderSiteConfig() {
    const siteTitleText = document.getElementById('siteTitleText');
    const siteSubText = document.getElementById('siteSubText');
    const kanjiStripText = document.getElementById('kanjiStripText');
    const weatherCityText = document.getElementById('weatherCityText');
    const idTextBadge = document.getElementById('idTextBadge');
    const idLevelBadge = document.getElementById('idLevelBadge');
    const hudTagsText = document.getElementById('hudTagsText');

    if (siteTitleText && siteConfig.siteTitle) siteTitleText.textContent = siteConfig.siteTitle;
    if (siteSubText && siteConfig.siteSub) siteSubText.textContent = siteConfig.siteSub;
    if (kanjiStripText && siteConfig.kanjiText) kanjiStripText.textContent = siteConfig.kanjiText;
    if (weatherCityText && siteConfig.weatherCity) weatherCityText.textContent = siteConfig.weatherCity;
    if (idTextBadge && siteConfig.idText) idTextBadge.textContent = siteConfig.idText;
    if (idLevelBadge && siteConfig.idLevel) idLevelBadge.textContent = siteConfig.idLevel;
    if (hudTagsText && siteConfig.hudTags) hudTagsText.textContent = siteConfig.hudTags;
  }

  renderSiteConfig();


  /* --------------------------------------------------------------------------
     2. Real-Time Cloud Guestbook & Worldwide Visitor Comments Engine
     -------------------------------------------------------------------------- */
  const CLOUD_API_URL = 'https://api.restful-api.dev/objects/ff8081819f7e10ae019f9fb2b65e2d4e';
  let commentsState = [];

  async function fetchCloudComments() {
    try {
      const res = await fetch(CLOUD_API_URL);
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          commentsState = json.data;
          localStorage.setItem('lyra_enchanted_comments', JSON.stringify(commentsState));
        }
      }
    } catch (e) {
      console.warn('Fallback to local storage comments:', e);
      const stored = localStorage.getItem('lyra_enchanted_comments');
      if (stored) {
        try { commentsState = JSON.parse(stored); } catch(err) {}
      }
    }
  }

  async function saveCloudComments() {
    localStorage.setItem('lyra_enchanted_comments', JSON.stringify(commentsState));
    try {
      await fetch(CLOUD_API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'orion_comments',
          data: commentsState
        })
      });
    } catch (e) {
      console.error('Cloud comment sync error:', e);
    }
  }

  fetchCloudComments();

  async function renderEnchantedView() {
    const hudTitle = document.getElementById('hudTitle');
    const hudSub = document.getElementById('hudSub');
    const hudMsg = document.getElementById('hudMsg');

    hudTitle.textContent = '> ENCHANTED GUESTBOOK';
    hudSub.textContent = '> 魔法のメッセージ';

    hudMsg.innerHTML = `
      <div class="enchanted-box">
        <p class="greeting-line">Leave your mark in the <span class="pink-glow">Cyber Matrix</span>. Choose a username and drop an enchanted note for Lyra.</p>
        
        <form id="commentForm" class="enchanted-form">
          <div class="form-row">
            <input type="text" id="commentUsername" class="enchanted-input" placeholder="Enter username (e.g. cyber_visitor)" required>
          </div>
          <div class="form-row">
            <textarea id="commentText" class="enchanted-textarea" rows="2" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" class="enchanted-submit-btn" id="subCommentBtn">✨ LEAVE ENCHANTED MESSAGE</button>
        </form>

        <div class="comments-feed" id="commentsFeed">
          <p class="description-line">⚡ Connecting to Cyber Cloud Database...</p>
        </div>
      </div>
    `;

    await fetchCloudComments();
    renderCommentsFeed();

    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
      commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('subCommentBtn');
        const userVal = document.getElementById('commentUsername').value.trim();
        const textVal = document.getElementById('commentText').value.trim();

        if (!userVal || !textVal) return;

        btn.disabled = true;
        btn.textContent = '⏳ SYNCING TO CLOUD...';

        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');

        const newComment = {
          id: 'c-' + Date.now(),
          username: userVal,
          time: `${day}.${month}.${year} ${hrs}:${mins}`,
          text: textVal
        };

        await fetchCloudComments();
        commentsState.unshift(newComment);
        await saveCloudComments();
        
        document.getElementById('commentText').value = '';
        renderCommentsFeed();
        btn.disabled = false;
        btn.textContent = '✨ LEAVE ENCHANTED MESSAGE';
      });
    }
  }

  function renderCommentsFeed() {
    const feed = document.getElementById('commentsFeed');
    if (!feed) return;

    if (commentsState.length === 0) {
      feed.innerHTML = '<p class="description-line">No comments yet. Be the first to leave an enchanted note!</p>';
      return;
    }

    feed.innerHTML = commentsState.map(c => `
      <div class="comment-card" data-id="${c.id}">
        <div class="comment-card-top">
          <span class="comment-username">👤 @${c.username}</span>
          <div class="comment-top-right">
            <span class="comment-time">${c.time}</span>
            ${isModerator ? `<button class="delete-comment-btn" title="Delete or Archive Comment" onclick="deleteComment('${c.id}')">🗑️</button>` : ''}
          </div>
        </div>
        <div class="comment-body-text">${c.text}</div>
      </div>
    `).join('');
  }

  window.deleteComment = async function(id) {
    if (confirm('Delete or archive this comment?')) {
      commentsState = commentsState.filter(c => c.id !== id);
      await saveCloudComments();
      renderCommentsFeed();
    }
  };


  /* --------------------------------------------------------------------------
     3. Navigation Tabs Controller & Renderers
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const hudTitle = document.getElementById('hudTitle');
  const hudSub = document.getElementById('hudSub');
  const hudMsg = document.getElementById('hudMsg');
  const viewAllEntriesBtn = document.getElementById('viewAllEntriesBtn');

  function getProjectsHTML() {
    const projListHTML = projectsData.map(p => `
      <div class="entry-row" onclick="openProjectModalById('${p.id}')">
        <span class="entry-star">⚡</span>
        <span class="entry-date">[ ${p.date} ]</span>
        <span class="entry-label"><strong style="color:var(--purple-bright)">${p.title}</strong> <span class="pink-glow">[${p.status}]</span></span>
        <button class="entry-btn">VIEW &gt;</button>
      </div>
    `).join('');

    return `
      <p class="greeting-line">Current Experiments & <span class="pink-glow">Neon Builds</span></p>
      <div class="archive-entries-container" style="margin-top:14px;">
        <h4 class="archive-subhead">&gt; CREATIVE LAB MATRIX (${projectsData.length} PROJECTS)</h4>
        <div class="entries-stack">
          ${projListHTML}
        </div>
      </div>
    `;
  }

  function getNewsletterHTML() {
    const newsListHTML = newslettersData.map(news => `
      <div class="entry-row" onclick="openNewsletterModalById('${news.id}')">
        <span class="entry-star">📡</span>
        <span class="entry-date">[ ${news.date} ]</span>
        <span class="entry-label"><strong style="color:var(--pink-neon)">[${news.category}]</strong> ${news.title}</span>
        <button class="entry-btn">READ NEWS DISPATCH &gt;</button>
      </div>
    `).join('');

    return `
      <p class="greeting-line">Decrypted <span class="pink-glow">Tech News Dispatches</span> & World Innovations</p>
      <p class="description-line">📡 Weekly updates on AI breakthroughs, quantum computing, and global cyber innovations compiled by <span class="purple-glow">Lyra</span>.</p>
      <div class="archive-entries-container" style="margin-top:14px;">
        <h4 class="archive-subhead">&gt; TECH NEWSLETTERS (${newslettersData.length})</h4>
        <div class="entries-stack">
          ${newsListHTML}
        </div>
      </div>
    `;
  }

  function getArchiveHTML() {
    const count2026 = entriesData.filter(e => e.year === 2026).length;
    const count2025 = entriesData.filter(e => e.year === 2025).length;
    
    const allEntriesListHTML = entriesData.map(entry => `
      <div class="entry-row" onclick="openEntryModalById('${entry.id}')">
        <span class="entry-star">✦</span>
        <span class="entry-date">[ ${entry.date} ]</span>
        <span class="entry-label">${entry.title}</span>
        <button class="entry-btn">READ &gt;</button>
      </div>
    `).join('');

    return `
      <p class="greeting-line">Decrypted Logs & Full Archive Matrix</p>
      <p class="description-line">📁 [2026] <span class="pink-glow">${count2026}</span> entries compiled &nbsp;|&nbsp; 📁 [2025] <span class="purple-glow">${count2025}</span> entries archived</p>
      <div class="archive-entries-container">
        <h4 class="archive-subhead">&gt; ALL BLOG ENTRIES (${entriesData.length})</h4>
        <div class="entries-stack">
          ${allEntriesListHTML}
        </div>
      </div>
    `;
  }

  function renderActiveTab() {
    const entriesPanel = document.querySelector('.entries-panel');
    if (entriesPanel) {
      if (activeTab === 'home') {
        entriesPanel.style.setProperty('display', 'flex', 'important');
      } else {
        entriesPanel.style.setProperty('display', 'none', 'important');
      }
    }

    if (activeTab === 'enchanted') {
      renderEnchantedView();
      return;
    }

    if (activeTab === 'projects') {
      hudTitle.textContent = '> CREATIVE LAB';
      hudSub.textContent = '> プロジェクト';
      hudMsg.innerHTML = getProjectsHTML();
      return;
    }

    if (activeTab === 'newsletter') {
      hudTitle.textContent = '> TECH NEWSLETTER';
      hudSub.textContent = '> 最新テックニュース';
      hudMsg.innerHTML = getNewsletterHTML();
      return;
    }

    if (activeTab === 'archive') {
      hudTitle.textContent = '> ARCHIVED MEMORIES';
      hudSub.textContent = '> 記憶のアーカイブ';
      hudMsg.innerHTML = getArchiveHTML();
      return;
    }

    const page = pagesData[activeTab];
    if (page) {
      hudTitle.textContent = page.title;
      hudSub.textContent = page.sub;
      hudMsg.innerHTML = page.paragraphs.map(p => `<p>${p}</p>`).join('');
    }
  }

  function switchToTab(tabKey) {
    navLinks.forEach(l => l.classList.remove('active'));
    const targetLink = document.querySelector(`.nav-link[data-tab="${tabKey}"]`);
    if (targetLink) targetLink.classList.add('active');

    activeTab = tabKey;
    hudTitle.style.opacity = '0';
    hudMsg.style.opacity = '0';

    setTimeout(() => {
      renderActiveTab();
      hudTitle.style.opacity = '1';
      hudMsg.style.opacity = '1';
    }, 150);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => switchToTab(link.dataset.tab));
  });

  if (viewAllEntriesBtn) {
    viewAllEntriesBtn.addEventListener('click', () => switchToTab('archive'));
  }

  renderActiveTab();


  /* --------------------------------------------------------------------------
     4. Blog Reader Modal Engine
     -------------------------------------------------------------------------- */
  const entriesList = document.getElementById('entriesList');
  const blogModal = document.getElementById('blogModal');
  const modalCloseX = document.getElementById('modalCloseX');
  const modalDismiss = document.getElementById('modalDismiss');
  const modalDate = document.getElementById('modalDate');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  function renderEntriesList() {
    if (!entriesList) return;
    entriesList.innerHTML = '';

    entriesData.slice(0, 3).forEach(entry => {
      const row = document.createElement('div');
      row.className = 'entry-row';
      row.innerHTML = `
        <span class="entry-star">✦</span>
        <span class="entry-date">[ ${entry.date} ]</span>
        <span class="entry-label">${entry.title}</span>
        <button class="entry-btn">READ &gt;</button>
      `;
      row.addEventListener('click', () => openEntryModal(entry));
      entriesList.appendChild(row);
    });
  }

  function openEntryModal(entry) {
    modalDate.textContent = `[ ${entry.date} ]`;
    modalTitle.textContent = entry.title;

    let htmlHTML = '';
    if (entry.blocks && Array.isArray(entry.blocks)) {
      htmlHTML = entry.blocks.map(block => {
        if (block.type === 'image') {
          return `<img src="${block.src}" alt="${block.alt || 'Inline Image'}" class="entry-inline-img">`;
        } else if (block.type === 'text') {
          return `<p>${block.content}</p>`;
        }
        return '';
      }).join('');
    } else if (entry.body) {
      htmlHTML = entry.body;
    }

    if (entry.link) {
      htmlHTML += `<p style="margin-top:14px;"><a href="${entry.link}" target="_blank" class="link-url">🔗 VIEW LIVE PROJECT / REPO &gt;</a></p>`;
    }

    modalContent.innerHTML = htmlHTML;
    blogModal.classList.add('active');
  }

  window.openEntryModalById = function(id) {
    const found = entriesData.find(e => e.id === id);
    if (found) openEntryModal(found);
  };

  window.openNewsletterModalById = function(id) {
    const found = newslettersData.find(n => n.id === id);
    if (found) {
      openEntryModal({
        date: `${found.date} | ${found.category}`,
        title: found.title,
        blocks: found.blocks
      });
    }
  };

  window.openProjectModalById = function(id) {
    const found = projectsData.find(p => p.id === id);
    if (found) {
      openEntryModal({
        date: `${found.date} | ${found.category} [${found.status}]`,
        title: found.title,
        blocks: found.blocks,
        link: found.link
      });
    }
  };

  function closeModal() {
    blogModal.classList.remove('active');
  }

  if (modalCloseX) modalCloseX.addEventListener('click', closeModal);
  if (modalDismiss) modalDismiss.addEventListener('click', closeModal);
  if (blogModal) {
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) closeModal();
    });
  }

  renderEntriesList();


  /* --------------------------------------------------------------------------
     5. Ambient Particle Canvas Background
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const particles = [];
  for (let i = 0; i < 75; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.5 + 0.1,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.3 ? '#c084fc' : '#f472b6'
    });
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();


  /* --------------------------------------------------------------------------
     6. Real-Time Clock & Weather
     -------------------------------------------------------------------------- */
  const timeVal = document.getElementById('timeVal');
  const rainVal = document.getElementById('rainVal');

  function updateClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    if (timeVal) timeVal.textContent = `${hrs}:${mins}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  setInterval(() => {
    const rainPct = Math.floor(80 + Math.random() * 6);
    if (rainVal) rainVal.textContent = `${rainPct}%`;
  }, 8000);


  /* --------------------------------------------------------------------------
     7. Ambient Web Audio Synthesizer (Cassette Tape)
     -------------------------------------------------------------------------- */
  const playAudioBtn = document.getElementById('playAudioBtn');
  const playSymbol = document.getElementById('playSymbol');
  const playLabel = document.getElementById('playLabel');
  const cassetteContainer = document.getElementById('cassetteContainer');

  let audioCtx = null;
  let isPlaying = false;
  let synthTimer = null;

  function playLoFiSynth() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const chords = [
      [220.00, 261.63, 329.63, 392.00],
      [174.61, 220.00, 261.63, 329.63],
      [130.81, 164.81, 196.00, 246.94]
    ];
    let chordIdx = 0;

    function playChord() {
      if (!isPlaying) return;
      const notes = chords[chordIdx];
      chordIdx = (chordIdx + 1) % chords.length;

      notes.forEach(freq => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 1.5);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 4.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 5.0);
      });

      synthTimer = setTimeout(playChord, 5000);
    }

    playChord();
  }

  if (playAudioBtn) {
    playAudioBtn.addEventListener('click', () => {
      if (!isPlaying) {
        isPlaying = true;
        playSymbol.textContent = '⏸';
        playLabel.textContent = 'PLAYING...';
        cassetteContainer.querySelector('.cassette-play-overlay').classList.add('active');
        playLoFiSynth();
      } else {
        isPlaying = false;
        playSymbol.textContent = '▶';
        playLabel.textContent = 'PLAY TAPE';
        cassetteContainer.querySelector('.cassette-play-overlay').classList.remove('active');
        if (synthTimer) clearTimeout(synthTimer);
      }
    });
  }

});
