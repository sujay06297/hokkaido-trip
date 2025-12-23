const fallbackPlaces = [
  { type: '正餐', name: '政壽司', city: '小樽', note: '', link: 'https://share.google/S3ukaRxnwxd1ULz5P' },
  { type: '景點', name: '小樽水族館', city: '小樽', note: '看企鵝走路 時段11:30 12:40 14:40', link: 'https://share.google/iw7JNXOBCpNKDQXIX' },
  { type: '景點', name: '小樽天狗山', city: '小樽', note: '北海道三大夜景', link: 'https://share.google/MiELOhXgsL1HO4g7p' },
  { type: '景點', name: '小樽音樂盒堂', city: '小樽', note: '', link: 'https://share.google/QYzEHp5c5UuX8kByD' },
  { type: '正餐', name: '若鶏時代 なると', city: '小樽', note: '6000評論炸雞', link: 'https://share.google/RChxauOEPQs1g5qnW' },
  { type: '景點', name: '住吉神社', city: '小樽', note: '紅色鳥居很邱', link: 'https://share.google/wxNQHEcLERYZVJPM4' },
  { type: '甜點', name: 'LeTAO 總店', city: '小樽', note: '有名甜點店', link: 'https://maps.app.goo.gl/LNwV8XHtrhGWSCrr7' },
  { type: '甜點', name: '小樽北菓樓', city: '小樽', note: '有名甜點店', link: 'https://share.google/A2l9ZGOMhGzqzaAhj' },
  { type: '正餐', name: 'cafe BAAL', city: '小樽', note: '牛排飯', link: 'https://maps.app.goo.gl/pajKFQg6uZSdpzhh8?g_st=ipc' },
  { type: '正餐', name: '迴轉壽司Toriton', city: '札幌', note: '北海道人氣第一 要排隊 可以找偏僻店', link: '' },
  { type: '逛街', name: '狸小路', city: '札幌', note: '札幌最大商圈', link: 'https://maps.app.goo.gl/wLvjzHkCkTT3BaK5A' },
  { type: '逛街', name: '札幌 二條市場', city: '札幌', note: '海鮮早市 類似築地市場', link: 'https://share.google/xrhO8B1cl7EQVWWcY' },
  { type: '正餐', name: 'Picante 湯咖哩', city: '札幌', note: '有分店', link: '' },
  { type: '逛街', name: 'Urban Site 慕尼黑大橋 購物中心', city: '札幌', note: '逛街 uniqlo 買草莓', link: 'https://maps.app.goo.gl/9U5nXcPeJJggABx67' },
  { type: '正餐', name: '三光舍', city: '札幌', note: '百年壽喜燒', link: '' },
  { type: '甜點', name: '札幌 六花亭', city: '札幌', note: '北海道最有名伴手禮', link: '' },
  { type: '景點', name: '北海道神宮', city: '札幌', note: '北海道最大神社', link: 'https://maps.app.goo.gl/ysBmkxaKYdaz7Vhr7' },
  { type: '景點', name: '札幌啤酒園成吉思汗烤肉', city: '札幌', note: '', link: 'https://www.tablecheck.com/zh-TW/reservation/H92YTM' },
  { type: '甜點', name: 'GELATERIA La Giostra', city: '札幌', note: '厲害冰淇淋', link: 'https://share.google/Bl6JdeeiXJsggEA4K' },
  { type: '正餐', name: '望羊蹄', city: '洞爺湖', note: '日式洋食', link: 'https://maps.app.goo.gl/8g6NXh4DmuLkFxFH8' },
  { type: '正餐', name: '一本亭拉麵', city: '洞爺湖', note: '米其林推薦', link: 'https://share.google/eE8dGgsMJu6AMoK27' },
  { type: '正餐', name: 'Mokumokuya', city: '留壽都', note: '成吉思汗烤肉', link: 'https://maps.app.goo.gl/d5rM1u38WsRZoeve9' },
  { type: '逛街', name: 'Amuse Sports', city: '留壽都雪場', note: '雪具租借', link: 'https://maps.app.goo.gl/cNmDUiHBHVVm3fJ49' },
  { type: '正餐', name: 'ステイームボート', city: '留壽都雪場山上', note: '要搭纜車上去 熱門雪場午餐選擇', link: 'https://share.google/D9Ta6oURwA4J9IS5N' },
];

let places = fallbackPlaces.slice();
const SHEET_ID = '113xiJaMMBxUC7aN0flEpWMQ9R4-STZuuaOFB6_Sk33k';
const PLACES_GID = '420714754';

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

function buildPlacesFromRows(rows) {
  return rows
    .map((row) => {
      const cells = row?.c || [];
      const type = cells[0]?.v ? String(cells[0].v).trim() : '';
      const name = cells[1]?.v ? String(cells[1].v).trim() : '';
      const city = cells[2]?.v ? String(cells[2].v).trim() : '';
      const note = cells[3]?.v ? String(cells[3].v).trim() : '';
      const link = cells[4]?.v ? String(cells[4].v).trim() : '';
      if (!name) return null;
      return { type, name, city, note, link };
    })
    .filter(Boolean);
}

async function loadPlaces() {
  try {
    const rows = await fetchGvizRows(PLACES_GID);
    const parsed = buildPlacesFromRows(rows);
    if (parsed.length) {
      places = parsed;
    } else {
      places = fallbackPlaces.slice();
    }
  } catch (err) {
    console.error('取得口袋名單失敗，改用備援資料', err);
    places = fallbackPlaces.slice();
  }
}
