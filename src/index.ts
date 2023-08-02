let link = "";
let length = 0;
let timer: null | number = null;

export default function checkUpdate(
  isProd: boolean,
  interval = 5 * 1000,
  callback?: () => void
) {
  if (isProd) {
    timer = setInterval(fetchHtml, interval);
  }

  function fetchHtml() {
    fetch(`/?_=${Date.now()}`)
      .then((res) => res.text())
      .then((html) => {
        const flag = judgeIsNeedUpdate(html);
        if (flag) {
          callback && callback();
          clearInterval(timer!);
          timer = null;
        }
      });
  }
}

function judgeIsNeedUpdate(text: string) {
  const scriptReg = /<script.*?>/gi;
  const scriptLength = text.match(scriptReg)?.length;
  if (length && length !== scriptLength) return true;
  length = scriptLength ?? 0;
  const reg = /<script\s?type="module"\s?crossorigin\s?src=["'](.*)?[".]>/gi;
  const result = reg.exec(text);
  if (link && link !== result?.[1]) return true;
  link = result?.[1] ?? "";
  return false;
}
