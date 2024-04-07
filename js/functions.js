// functions

function digitalClock(target) {
  const clockSet = generateDigitalClockSet(target);
  const d = new Date();

  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ms = d.getMilliseconds();

  h = h < 10 ? `0${h}` : `${h}`;
  m = m < 10 ? `0${m}` : `${m}`;
  s = s < 10 ? `0${s}` : `${s}`;
  ms = ms < 10 && ms < 100 ? `00${s}` : ms < 100 ? `0${ms}` : `${ms}`;

  setFill(clockSet, {
    h0: Number(h[0]),
    h1: Number(h[1]),
    m0: Number(m[0]),
    m1: Number(m[1]),
    s0: Number(s[0]),
    s1: Number(s[1]),
    ms0: Number(ms[0]),
    ms1: Number(ms[1]),
    ms2: Number(ms[2]),
  });

  requestAnimationFrame(() => {
    digitalClock(target);
  });
}

function setFill(clockSet, clockValues) {
  const clockValuesSet = [
    clockValues.h0 >= 0 && clockValues.h0 <= 9 ? clockValues.h0 : 0,
    clockValues.h1 >= 0 && clockValues.h1 <= 9 ? clockValues.h1 : 0,
    clockValues.m0 >= 0 && clockValues.m0 <= 9 ? clockValues.m0 : 0,
    clockValues.m1 >= 0 && clockValues.m1 <= 9 ? clockValues.m1 : 0,
    clockValues.s0 >= 0 && clockValues.s0 <= 9 ? clockValues.s0 : 0,
    clockValues.s1 >= 0 && clockValues.s1 <= 9 ? clockValues.s1 : 0,
    clockValues.ms0 >= 0 && clockValues.ms0 <= 9 ? clockValues.ms0 : 0,
    clockValues.ms1 >= 0 && clockValues.ms1 <= 9 ? clockValues.ms1 : 0,
    clockValues.ms2 >= 0 && clockValues.ms2 <= 9 ? clockValues.ms2 : 0,
  ];

  clockValuesSet.forEach((value, index) => {
    const prop =
      index <= 1
        ? `h${index}`
        : index <= 3
        ? `m${index - 2}`
        : index <= "5"
        ? `s${index - 4}`
        : `ms${index - 6}`;

    clockSet[prop]["a"].classList.remove("on");
    clockSet[prop]["b"].classList.remove("on");
    clockSet[prop]["c"].classList.remove("on");
    clockSet[prop]["d"].classList.remove("on");
    clockSet[prop]["e"].classList.remove("on");
    clockSet[prop]["f"].classList.remove("on");
    clockSet[prop]["g"].classList.remove("on");

    if (value === 0) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
      clockSet[prop]["d"].classList.add("on");
      clockSet[prop]["e"].classList.add("on");
      clockSet[prop]["f"].classList.add("on");
    } else if (value === 1) {
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
    } else if (value === 2) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["d"].classList.add("on");
      clockSet[prop]["e"].classList.add("on");
      clockSet[prop]["g"].classList.add("on");
    } else if (value === 3) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
      clockSet[prop]["d"].classList.add("on");
      clockSet[prop]["g"].classList.add("on");
    } else if (value === 4) {
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
      clockSet[prop]["f"].classList.add("on");
      clockSet[prop]["g"].classList.add("on");
    } else if (value === 5) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
      clockSet[prop]["d"].classList.add("on");
      clockSet[prop]["f"].classList.add("on");
      clockSet[prop]["g"].classList.add("on");
    } else if (value === 6) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
      clockSet[prop]["d"].classList.add("on");
      clockSet[prop]["e"].classList.add("on");
      clockSet[prop]["f"].classList.add("on");
      clockSet[prop]["g"].classList.add("on");
    } else if (value === 7) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
    } else if (value === 8) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
      clockSet[prop]["d"].classList.add("on");
      clockSet[prop]["e"].classList.add("on");
      clockSet[prop]["f"].classList.add("on");
      clockSet[prop]["g"].classList.add("on");
    } else if (value === 9) {
      clockSet[prop]["a"].classList.add("on");
      clockSet[prop]["b"].classList.add("on");
      clockSet[prop]["c"].classList.add("on");
      clockSet[prop]["d"].classList.add("on");
      clockSet[prop]["f"].classList.add("on");
      clockSet[prop]["g"].classList.add("on");
    }
  });
}

function generateDigitalClockSet(target) {
  const digitalClock = document.querySelector(target);

  const keys = [
    { name: "H", values: 2 },
    { name: "M", values: 2 },
    { name: "S", values: 2 },
    { name: "MS", values: 3 },
  ];
  const result = {};

  keys.forEach((key, keyIndex) => {
    for (let i = 0; i < key.values; i++) {
      const sg_g = document.querySelector(`#sg_${key.name}${i}`);

      const sg_g_a = sg_g.querySelector(`#sg_${key.name}${i}_a`);
      const sg_g_b = sg_g.querySelector(`#sg_${key.name}${i}_b`);
      const sg_g_c = sg_g.querySelector(`#sg_${key.name}${i}_c`);
      const sg_g_d = sg_g.querySelector(`#sg_${key.name}${i}_d`);
      const sg_g_e = sg_g.querySelector(`#sg_${key.name}${i}_e`);
      const sg_g_f = sg_g.querySelector(`#sg_${key.name}${i}_f`);
      const sg_g_g = sg_g.querySelector(`#sg_${key.name}${i}_g`);

      result[`${key.name.toLowerCase()}${i}`] = {
        a: sg_g_a,
        b: sg_g_b,
        c: sg_g_c,
        d: sg_g_d,
        e: sg_g_e,
        f: sg_g_f,
        g: sg_g_g,
      };
    }
  });

  return result;
}
