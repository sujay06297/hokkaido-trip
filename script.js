const fallbackItinerary = [
  {
    date: '2/7 (六)',
    title: '抵達北海道・觀賞薄野冰季',
    location: '札幌',
    heroImage:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    tag: '抵達 & 冰祭夜景',
    events: [
      { time: '12:30', title: '桃園機場飛機起飛', note: '向雪國出發，準備好保暖衣物。' },
      { time: '17:20', title: '抵達新千歲機場', note: '台灣飛機抵達時間' },
      {
        time: '晚上',
        title: '前往札幌車站',
        note: '機場快捷搭乘時間約 37 分鐘',
        link: 'https://maps.app.goo.gl/UzQ1HyrQ7j9Xii7K6',
      },
      { time: '晚上', title: '入住 Airbnb', link: 'https://maps.app.goo.gl/imiJbVikRXywY5367' },
      { time: '晚上', title: '晚餐', note: '就近覓食。' },
      {
        time: '晚上',
        title: '薄野冰祭夜晚點燈',
        note: '點燈至 23:00，夜間更夢幻。',
        link: 'https://maps.app.goo.gl/iFkEzacHxv5Qvwmz6',
      },
    ],
  },
  {
    date: '2/8 (日)',
    title: '租車自駕，前往洞爺湖',
    location: '札幌 → 洞爺湖',
    heroImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    tag: '自駕 & 湖畔住宿',
    events: [
      { time: '07:30', title: '早餐', note: '補充能量，準備搬行李。' },
      {
        time: '上午',
        title: '前往 Budget 租車',
        note: '攜帶行李，地鐵約 10 幾分鐘',
        link: 'https://maps.app.goo.gl/yB1XMNKKAtppm5GM9',
      },
      {
        time: '上午',
        title: '大通公園看雪祭',
        note: '行李放車上，搭地鐵 10 分鐘',
        link: 'https://maps.app.goo.gl/YyDHTWDqi75Qsfb6A',
      },
      {
        time: '中午',
        title: 'Urban Site 慕尼黑大橋購物中心',
        note: '雪祭車潮抓 40 分鐘，順道採買',
        link: 'https://maps.app.goo.gl/9U5nXcPeJJggABx67',
      },
      { time: '中午', title: '午餐 & 採買', note: 'Uniqlo、草莓、雨刷水、零食一次補齊。' },
      {
        time: '13:00',
        title: '開車前往洞爺湖',
        note: '冬天車程抓 3 小時，注意雪況',
        link: 'https://maps.app.goo.gl/XoDJRy2jddok6asz9',
      },
      { time: '下午', title: '入住 Airbnb', note: '湖景房進房，稍作休息。' },
      { time: '晚上', title: '溫泉 + 晚餐', note: '雪場餐廳、真狩村、洞爺湖溫泉街皆可。' },
      { time: '晚上', title: '洞爺湖冬季煙火大會', note: '每晚 20:30 點燃湖面天空。' },
    ],
  },
  {
    date: '2/9 (一)',
    title: '留壽都滑雪初體驗',
    location: '洞爺湖 ⇄ 留壽都',
    heroImage:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    tag: '滑雪 & 溫泉',
    events: [
      { time: '上午', title: '房主附早餐', note: '山景配咖啡，暖暖出門。' },
      {
        time: '08:00',
        title: '前往留壽都',
        note: '需領裝備，車程 30 分鐘',
        link: 'https://maps.app.goo.gl/7epr6mcmYyYHTQez5',
      },
      { time: '上午', title: '開滑', note: '雪場 9:00 營業，先熱身。' },
      { time: '中午', title: '雪場餐廳用餐', note: '補充熱量，再戰午後。' },
      { time: '下午', title: '持續滑雪', note: '16:00 後切換夜滑氣氛。' },
      { time: '晚上', title: '溫泉 + 晚餐', note: '回程泡湯，真狩村或湖畔餐廳。' },
      { time: '晚上', title: '洞爺湖冬季煙火大會', note: '20:30 鎖定湖畔位置。' },
    ],
  },
  {
    date: '2/10 (二)',
    title: '留壽都滑雪 Day 2',
    location: '洞爺湖 ⇄ 留壽都',
    heroImage:
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80',
    tag: '滑雪日常',
    events: [
      { time: '上午', title: '房主附早餐' },
      { time: '08:30', title: '前往留壽都', note: '車程 30 分鐘', link: 'https://maps.app.goo.gl/7epr6mcmYyYHTQez5' },
      { time: '上午', title: '開滑', note: '雪場 9:00 營業，補練技巧。' },
      { time: '中午', title: '雪場餐廳用餐' },
      { time: '下午', title: '持續滑雪', note: '16:00 後夜滑，挑戰不同雪道。' },
      { time: '晚上', title: '溫泉 + 晚餐', note: '雪場餐廳或洞爺湖溫泉街。' },
      { time: '晚上', title: '洞爺湖冬季煙火大會', note: '每晚 20:30。' },
    ],
  },
  {
    date: '2/11 (三)',
    title: '留壽都滑雪 Day 3',
    location: '洞爺湖 ⇄ 留壽都',
    heroImage:
      'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?auto=format&fit=crop&w=900&q=80',
    tag: '滑雪終曲',
    events: [
      { time: '上午', title: '房主附早餐' },
      { time: '08:30', title: '前往留壽都', note: '車程 30 分鐘', link: 'https://maps.app.goo.gl/7epr6mcmYyYHTQez5' },
      { time: '上午', title: '開滑', note: '雪場 9:00 營業。' },
      { time: '中午', title: '雪場餐廳用餐' },
      { time: '下午', title: '開滑 + 夜滑', note: '16:00 後體驗夜滑燈海。' },
      { time: '晚上', title: '溫泉 + 晚餐', note: '雪場餐廳、真狩村、洞爺湖溫泉街。' },
      { time: '晚上', title: '洞爺湖冬季煙火大會', note: '20:30 湖畔煙火，不要錯過。' },
    ],
  },
  {
    date: '2/12 (四)',
    title: '小樽浪漫日',
    location: '洞爺湖 → 小樽',
    heroImage:
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80',
    tag: '運河 & 雪燈',
    events: [
      { time: '上午', title: '房主附早餐' },
      { time: '上午', title: '漫步洞爺湖', note: '白天湖景散策。' },
      {
        time: '上午',
        title: '開車前往小樽·住吉神社',
        note: '冬天車程抓 2.5 小時',
        link: 'https://share.google/wxNQHEcLERYZVJPM4',
      },
      { time: '中午', title: '小樽午餐' },
      {
        time: '下午',
        title: '小樽堺町通商店街',
        note: '音樂盒堂、甜點店都在附近',
        link: 'https://share.google/lhpMyt4zhLX7Lea47',
      },
      { time: '下午', title: '入住小樽飯店', link: 'https://maps.app.goo.gl/c3dkCuSMeTr2cXm26' },
      {
        time: '下午',
        title: '天狗山纜車入口',
        note: '須注意天氣是否停駛',
        link: 'https://maps.app.goo.gl/DQA2dd1ADSgM6UCK9',
      },
      { time: '晚上', title: '晚餐', note: '品嚐小樽海鮮或甜點。' },
      { time: '晚上', title: '小樽雪燈之路', note: '飯店旁，17:00~21:00 點燈。' },
    ],
  },
  {
    date: '2/13 (五)',
    title: '企鵝巡禮 & 札幌夜景',
    location: '小樽 → 札幌',
    heroImage:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80',
    tag: '水族館 & 夜景',
    events: [
      { time: '上午', title: '早餐' },
      {
        time: '上午',
        title: '小樽水族館',
        note: '企鵝走路時段 11:30',
        link: 'https://maps.app.goo.gl/PtGm5cLsPjXrryv56',
      },
      { time: '中午', title: '午餐', note: '時間較趕，簡餐為主。' },
      {
        time: '13:00',
        title: '前往札幌·北海道神宮',
        note: '冬天車程抓 1.5 小時',
        link: 'https://maps.app.goo.gl/ysBmkxaKYdaz7Vhr7',
      },
      { time: '下午', title: '入住札幌飯店', link: 'https://maps.app.goo.gl/RnFe9fFqtAFbEwi56' },
      {
        time: '18:00',
        title: '晚餐 Sapporo Garden Grill',
        note: '已預約三位',
        link: 'https://maps.app.goo.gl/tPH3MC9QVQNV2Gzd7',
      },
      {
        time: '晚上',
        title: '藻岩山纜車夜景',
        note: '須注意天氣是否停駛',
        link: 'https://maps.app.goo.gl/kFxEGv3YjKZfuBdm6',
      },
    ],
  },
  {
    date: '2/14 (六)',
    title: '札幌市區自由行',
    location: '札幌',
    heroImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    tag: '美食 & 購物日',
    events: [
      {
        time: '上午',
        title: '早餐 · 札幌二條市場',
        note: '走路 10 分鐘內',
        link: 'https://maps.app.goo.gl/VReh3H1Ahb4WuoPF9',
      },
      { time: '上午', title: '還車', link: 'https://maps.app.goo.gl/yB1XMNKKAtppm5GM9' },
      { time: '中午', title: '自由行動', note: '把握最後購物機會。' },
      { time: '下午', title: '自由行動', note: '可逛狸小路、札幌藥妝。' },
      { time: '晚上', title: '自由行動', note: '補買伴手禮或美食巡禮。' },
    ],
  },
  {
    date: '2/15 (日)',
    title: '返家日',
    location: '札幌 → 桃園',
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    tag: '返程',
    events: [
      { time: '上午', title: '早餐', note: '簡單打包，確認文件與護照。' },
      { time: '上午', title: '前往札幌車站', link: 'https://maps.app.goo.gl/UzQ1HyrQ7j9Xii7K6' },
      {
        time: '上午',
        title: '前往新千歲機場',
        note: '機場快捷約 37 分鐘',
        link: 'https://maps.app.goo.gl/J3dYURPZupBSL3S56',
      },
      { time: '中午', title: '機場午餐 & 購物', note: '新千歲機場美食與伴手禮不少。' },
      { time: '14:00', title: '飛機起飛', note: '北海道再見！' },
    ],
  },
];

const itineraryContainer = document.getElementById('itinerary');
const filterInput = document.getElementById('filterInput');
const resetFilter = document.getElementById('resetFilter');
let itinerary = fallbackItinerary.slice();
const SHEET_ID = '113xiJaMMBxUC7aN0flEpWMQ9R4-STZuuaOFB6_Sk33k';
const ITINERARY_GID = '650658766';
const fallbackHeroImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80',
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
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${gid}&tqx=out:json`;

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
    const time = cells[0]?.v ? String(cells[0].v).trim() : '';
    const activity = cells[1]?.v ? String(cells[1].v).trim() : '';
    const note = cells[2]?.v ? String(cells[2].v).trim() : '';
    const link = cells[3]?.v ? String(cells[3].v).trim() : '';
    if (!time && !activity) return;
    if (/^\d{1,2}\/\d{1,2}/.test(time)) {
      currentDay = {
        date: time,
        title: activity || time,
        location: activity || '',
        heroImage: fallbackHeroImages[days.length % fallbackHeroImages.length],
        tag: '行程',
        events: [],
      };
      days.push(currentDay);
      return;
    }
    if (!currentDay) return;
    currentDay.events.push({
      time: time || '',
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

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = day.tag;

    const location = document.createElement('span');
    location.className = 'pill';
    location.style.background = 'rgba(59, 130, 246, 0.12)';
    location.style.border = '1px solid rgba(59, 130, 246, 0.2)';
    location.style.color = '#0f172a';
    location.textContent = day.location;

    meta.append(tag, location);
    info.append(eyebrow, title, meta);

    const thumbnail = document.createElement('img');
    thumbnail.className = 'thumbnail';
    thumbnail.src = day.heroImage;
    thumbnail.alt = `${day.location} 圖片`;

    header.append(info, thumbnail);

    const list = document.createElement('ul');
    list.className = 'event-list';
    list.style.display = 'none'; // 2. 預設隱藏列表
    filteredEvents.forEach((event) => list.append(createEvent(event)));

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'ghost-btn';
    toggle.textContent = '展開'; // 3. 文字改為展開
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
      itinerary = fallbackItinerary.slice();
    }
  } catch (err) {
    console.error('取得行程資料失敗，改用備援資料', err);
    itinerary = fallbackItinerary.slice();
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
