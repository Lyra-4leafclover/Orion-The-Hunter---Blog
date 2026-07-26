/* ==========================================================================
   ORION LOG CMS - File-Driven Cyberpunk Y2K Frontend & Guestbook Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {

  let siteConfig = {};
  let pagesData = {};
  let entriesData = [];
  let activeTab = 'home';

  // Load configuration files from local content/ directory
  try {
    const [resSite, resPages, resEntries] = await Promise.all([
      fetch('content/site.json'),
      fetch('content/pages.json'),
      fetch('content/entries.json')
    ]);

    siteConfig = await resSite.json();
    pagesData = await resPages.json();
    entriesData = await resEntries.json();
  } catch (err) {
    console.error('Error loading content JSON files:', err);
  }

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
     2. Enchanted Visitor Guestbook & Comments Engine
     -------------------------------------------------------------------------- */
  const defaultComments = [
    { id: 'c1', username: 'neon_wanderer', time: '26.07.2026 22:40', text: 'Loved the dark aesthetic of this blog! ✨' },
    { id: 'c2', username: 'cyber_dreamer', time: '25.07.2026 19:15', text: 'Super cool lo-fi cassette synth player.' }
  ];

  let commentsState = [];
  const storedComments = localStorage.getItem('lyra_enchanted_comments');
  if (storedComments) {
    try { commentsState = JSON.parse(storedComments); } catch(e) { commentsState = defaultComments; }
  } else {
    commentsState = defaultComments;
  }

  function saveComments() {
    localStorage.setItem('lyra_enchanted_comments', JSON.stringify(commentsState));
  }

  function renderEnchantedView() {
    const hudTitle = document.getElementById('hudTitle');
    const hudSub = document.getElementById('hudSub');
    const hudMsg = document.getElementById('hudMsg');

    hudTitle.textContent = '> ENCHANTED GUESTBOOK';
    hudSub.textContent = '> 魔法のメッセージ';

    const commentsHTML = commentsState.map(c => `
      <div class="comment-card" data-id="${c.id}">
        <div class="comment-card-top">
          <span class="comment-username">👤 @${c.username}</span>
          <div class="comment-top-right">
            <span class="comment-time">${c.time}</span>
            <button class="delete-comment-btn" title="Delete or Archive Comment" onclick="deleteComment('${c.id}')">🗑️</button>
          </div>
        </div>
        <div class="comment-body-text">${c.text}</div>
      </div>
    `).join('');

    hudMsg.innerHTML = `
      <div class="enchanted-box">
        <p class="greeting-line">Leave your mark in the <span class="pink-glow">Cyber Matrix</span>. Choose a username and drop an enchanted message for Lyra.</p>
        
        <form id="commentForm" class="enchanted-form">
          <div class="form-row">
            <input type="text" id="commentUsername" class="enchanted-input" placeholder="Enter username (e.g. cyber_visitor)" required>
          </div>
          <div class="form-row">
            <textarea id="commentText" class="enchanted-textarea" rows="2" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" class="enchanted-submit-btn">✨ LEAVE ENCHANTED MESSAGE</button>
        </form>

        <div class="comments-feed" id="commentsFeed">
          ${commentsHTML}
        </div>
      </div>
    `;

    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('commentUsername').value.trim();
        const txt = document.getElementById('commentText').value.trim();

        if (!user || !txt) return;

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
        saveComments();
        renderEnchantedView();
      });
    }
  }

  // Global helper for comment deletion
  window.deleteComment = function(id) {
    if (confirm('Delete or archive this comment?')) {
      commentsState = commentsState.filter(c => c.id !== id);
      saveComments();
      renderEnchantedView();
    }
  };


  /* --------------------------------------------------------------------------
     3. Navigation Tabs Controller
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const hudTitle = document.getElementById('hudTitle');
  const hudSub = document.getElementById('hudSub');
  const hudMsg = document.getElementById('hudMsg');

  function getArchiveHTML() {
    const count2026 = entriesData.filter(e => e.year === 2026).length;
    const count2025 = entriesData.filter(e => e.year === 2025).length;
    return `
      <p class="greeting-line">Decrypted Logs from <span class="pink-glow">2024 - 2026</span></p>
      <p class="description-line">📁 [2026] <span class="pink-glow">${count2026}</span> entries compiled</p>
      <p class="description-line">📁 [2025] <span class="purple-glow">${count2025}</span> midnight notes archived</p>
      <p class="mission-line">Browse full timeline in the <span class="purple-glow">Cyber Matrix</span>.</p>
    `;
  }

  function renderActiveTab() {
    if (activeTab === 'enchanted') {
      renderEnchantedView();
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

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      activeTab = link.dataset.tab;
      hudTitle.style.opacity = '0';
      hudMsg.style.opacity = '0';

      setTimeout(() => {
        renderActiveTab();
        hudTitle.style.opacity = '1';
        hudMsg.style.opacity = '1';
      }, 150);
    });
  });

  renderActiveTab();


  /* --------------------------------------------------------------------------
     4. Blog Entries Renderer
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

    entriesData.slice(0, 6).forEach(entry => {
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
