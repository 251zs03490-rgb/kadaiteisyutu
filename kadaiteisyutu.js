  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false

  });



const videoUrl = "https://www.nicovideo.jp/watch/so45151786";

fetch(`https://ext.nicovideo.jp/api/oembed?url=${encodeURIComponent(videoUrl)}`)
  .then(res => res.json())
  .then(data => {
    if (data.thumbnail_url) {
      document.getElementById("nico-thumbnail").src = data.thumbnail_url;
      document.getElementById("nico-title").textContent = data.title || "タイトル不明";
    } else {
      document.getElementById("nico-title").textContent = "サムネイル取得に失敗しました";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("nico-title").textContent = "エラー発生";
  });
