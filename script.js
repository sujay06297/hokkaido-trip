const itineraryContainer = document.getElementById('itinerary');
const filterInput = document.getElementById('filterInput');
const resetFilter = document.getElementById('resetFilter');
let itinerary = [];
const SHEET_ID = '113xiJaMMBxUC7aN0flEpWMQ9R4-STZuuaOFB6_Sk33k';
const ITINERARY_GID = '650658766';
const fallbackHeroImages = [
  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
];

function fetchGvizRows(gid) {
  return new Promise((resolve, reject) => {
    const resolverQueue = (window.__gvizResolvers = window.__gvizResolvers || []);
    if (!window.google) window.google = {};
    if (!window.google.visualization) window.google.visualization = {};
    if (!window.google.visualization.Query) window.google.visualization.Query = {};
    if (!window.google.visualization.Query.setResponse) {
      window.google.visualization.Query.setResponse = (response) => {
        const next = resolverQueue.shift();
        if (next) next(response);
      };
    }

    const script = document.createElement('script');
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${gid}&headers=1&tqx=out:json`;

    resolverQueue.push((response) => {
      try {
        const rows = response?.table?.rows || [];
        resolve(rows);
      } catch (err) {
        reject(err);
      } finally {
        script.remove();
      }
    });

    script.onerror = () => {
      script.remove();
      resolverQueue.shift();
      reject(new Error('gviz JSONP 載入失敗'));
    };

    script.src = url;
    document.body.appendChild(script);
  });
}

function buildItineraryFromRows(rows) {
  const days = [];
  let currentDay = null;
  rows.forEach((row) => {
    const cells = row?.c || [];
    const timeCell = cells[0] || {};
    const rawTime = timeCell.v;
    const timeText = timeCell.f
      ? String(timeCell.f).trim()
      : rawTime instanceof Date
      ? rawTime.getFullYear() > 2000
        ? `${rawTime.getMonth() + 1}/${rawTime.getDate()}`
        : `${String(rawTime.getHours()).padStart(2, '0')}:${String(
            rawTime.getMinutes()
          ).padStart(2, '0')}`
      : String(rawTime ?? '').trim();
    const activity = cells[1]?.v ? String(cells[1].v).trim() : '';
    const note = cells[2]?.v ? String(cells[2].v).trim() : '';
    const link = cells[3]?.v ? String(cells[3].v).trim() : '';
    if (!timeText && !activity) return;
    const isDateRow =
      (timeText && /^\d{1,2}\/\d{1,2}/.test(timeText)) ||
      (rawTime instanceof Date && rawTime.getFullYear() > 2000);
    if (isDateRow) {
      const dateLabel = timeText;
      currentDay = {
        date: dateLabel,
        title: activity || dateLabel,
        location: note || '',
        heroImage: fallbackHeroImages[days.length % fallbackHeroImages.length],
        tag: '',
        events: [],
      };
      days.push(currentDay);
      return;
    }
    if (!currentDay) return;
    currentDay.events.push({
      time: timeText || '',
      title: activity || '',
      note: note || '',
      link: link || '',
    });
  });
  return days;
}

function createEvent(event) {
  const li = document.createElement('li');
  li.className = 'event';

  const time = document.createElement('time');
  time.textContent = event.time;

  const details = document.createElement('div');

  const title = document.createElement('p');
  title.className = 'event-title';
  title.textContent = event.title;

  const note = document.createElement('p');
  note.className = 'event-note';
  note.textContent = event.note || '';

  details.append(title);
  if (event.note) {
    details.append(note);
  }

  if (event.link) {
    const linkRow = document.createElement('div');
    linkRow.className = 'link-row';
    const mapLink = document.createElement('a');
    mapLink.className = 'chip';
    mapLink.href = event.link;
    mapLink.target = '_blank';
    mapLink.rel = 'noreferrer';
    mapLink.textContent = '查看地圖';
    linkRow.append(mapLink);
    details.append(linkRow);
  }

  li.append(time, details);
  return li;
}

function matchesKeyword(text = '', keyword) {
  return text.toLowerCase().includes(keyword);
}

function renderItinerary(keyword = '') {
  itineraryContainer.innerHTML = '';
  const normalized = keyword.trim().toLowerCase();

  itinerary.forEach((day, index) => {
    const filteredEvents = normalized
      ? day.events.filter((e) =>
          [e.time, e.title, e.note, day.location]
            .filter(Boolean)
            .some((field) => matchesKeyword(field, normalized))
        )
      : day.events;

    if (normalized && filteredEvents.length === 0) return;

    const card = document.createElement('article');
    card.className = 'day-card';
    card.dataset.open = 'false';

    const header = document.createElement('div');
    header.className = 'day-header';

    const info = document.createElement('div');

    const eyebrow = document.createElement('p');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = day.date;

    const title = document.createElement('h3');
    title.className = 'day-title';
    title.textContent = day.title;

    const meta = document.createElement('div');
    meta.className = 'day-meta';
    let hasMeta = false;

    if (day.tag) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = day.tag;
      meta.append(tag);
      hasMeta = true;
    }

    if (day.location) {
      const location = document.createElement('span');
      location.className = 'pill';
      location.style.background = 'rgba(59, 130, 246, 0.12)';
      location.style.border = '1px solid rgba(59, 130, 246, 0.2)';
      location.style.color = '#0f172a';
      location.textContent = day.location;
      meta.append(location);
      hasMeta = true;
    }

    if (hasMeta) {
      info.append(eyebrow, title, meta);
    } else {
      info.append(eyebrow, title);
    }

    const thumbnail = document.createElement('img');
    thumbnail.className = 'thumbnail';
    thumbnail.src = day.heroImage;
    thumbnail.alt = `${day.location} 照片`;

    header.append(info, thumbnail);

    const list = document.createElement('ul');
    list.className = 'event-list';
    list.style.display = 'none'; // 2. 預設收合列表
    filteredEvents.forEach((event) => list.append(createEvent(event)));

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'ghost-btn';
    toggle.textContent = '展開'; // 3. 預設為展開
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = card.dataset.open === 'true';
      card.dataset.open = (!isOpen).toString();
      list.style.display = isOpen ? 'none' : 'grid';
      toggle.textContent = isOpen ? '展開' : '收合';
    });

    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' || e.target === toggle) return;
      toggle.click();
    });

    card.append(header, list, toggle);
    itineraryContainer.append(card);
  });
}

async function loadItinerary() {
  try {
    const rows = await fetchGvizRows(ITINERARY_GID);
    const parsed = buildItineraryFromRows(rows);
    if (parsed.length) {
      itinerary = parsed;
    } else {
      itinerary = [];
    }
  } catch (err) {
    console.error('行程資料載入失敗，改用空清單。', err);
    itinerary = [];
  }
  renderItinerary(filterInput.value);
}

loadItinerary();

filterInput.addEventListener('input', (e) => {
  renderItinerary(e.target.value);
});

resetFilter.addEventListener('click', () => {
  filterInput.value = '';
  renderItinerary();
});
