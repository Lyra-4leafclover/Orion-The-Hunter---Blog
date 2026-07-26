/* ==========================================================================
   ORION LOG CMS - File-Driven Cyberpunk Y2K Frontend & Tech Newsletter Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {

  let siteConfig = {};
  let pagesData = {};
  let entriesData = [];
  let newslettersData = [];
  let activeTab = 'home';

  // Load configuration files from local content/ directory
  try {
    const [resSite, resPages, resEntries, resNews] = await Promise.all([
      fetch('content/site.json'),
      fetch('content/pages.json'),
      fetch('content/entries.json'),
      fetch('content/newsletters.json')
    ]);

    siteConfig = await resSite.json();
    pagesData = await resPages.json();
    entriesData = await resEntries.json();
    newslettersData = await resNews.json();
  } catch (err) {
    console.error('Error loading content JSON files:', err);
  }

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

  let commentsState = [
    { id: 'c1', username: 'neon_wanderer', time: '26.07.2026 22:40', text: 'Loved the dark aesthetic of this blog! ✨' },
    { id: 'c2', username: 'cyber_dreamer', time: '25.07.2026 19:15', text: 'Super cool lo-fi cassette synth player.' }
  ];

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

  // Pre-fetch cloud comments on init
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
        const user = document.getElementById('commentUsername').value.trim();
        const txt = document.getElementById('commentText').value.trim();

        if (!user || !txt) return;

        btn.disabled = true;
        btn.textContent = '⏳ SYNCING TO CLOUD...';

        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');

        const newC = {
          id: 'c-' + Date.now(),
          username: user.replace(/[^a-zA-Z0-9_]/g, '_'),
          time: `${day}.${month}.${year} ${hrs}:${mins}`,
          text: txt
        };

        commentsState.unshift(newC);
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

  // Global helper for comment deletion
  window.deleteComment = async function(id) {
    if (confirm('Delete or archive this comment?')) {
      commentsState = commentsState.filter(c => c.id !== id);
      await saveCloudComments();
      renderCommentsFeed();
    }
  };


  /* --------------------------------------------------------------------------
     3. Navigation Tabs Controller & Tech Newsletter Page Renderer
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const hudTitle = document.getElementById('hudTitle');
  const hudSub = document.getElementById('hudSub');
  const hudMsg = document.getElementById('hudMsg');
  const viewAllEntriesBtn = document.getElementById('viewAllEntriesBtn');
  const entriesPanel = document.querySelector('.entries-panel');

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
    // Hide latest entries bottom panel on Newsletter & Enchanted pages to prevent clutter
    if (activeTab === 'newsletter' || activeTab === 'enchanted') {
      if (entriesPanel) entriesPanel.style.display = 'none';
    } else {
      if (entriesPanel) entriesPanel.style.display = 'flex';
    }

    if (activeTab === 'enchanted') {
      renderEnchantedView();
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
    viewAllEntriesBtn.addEventListener('click', () => switchToTab('newsletter'));
  }

  renderActiveTab();


  /* --------------------------------------------------------------------------
     4. Blog & Newsletter Reader Modal
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
     5. Ambient Particle & Rain Canvas Background
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
     6. Real-Time Time & Weather Update
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
