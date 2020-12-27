import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const imgSrc = [
  "https://img.ohpolly.com/5-c1dEdP-RVIUdlNBif2TD2JMx4=/fit-in/1800x/catalog/product/1/5/1567-white-edit2-bottommain_1.jpg",
  "https://img.ohpolly.com/sKolnl6lhIFE0xes0srvqzpex74=/fit-in/1800x/catalog/product/1/2/1292-black-edit7_2.jpg",
  "https://img.ohpolly.com/lT6LWp7kIwtPgomFt6dLWIiBwDs=/fit-in/1800x/catalog/product/1/5/1567-white-edit9_1.jpg",
  "https://img.ohpolly.com/yk6T-uqnQGbz-M3LsVK2IKPyNi4=/fit-in/1800x/catalog/product/1/2/1292-black-edit4_2.jpg",
  "https://img.ohpolly.com/RFLMMeNdW4rEiE5HM5v_vh_V8pE=/fit-in/1800x/catalog/product/1/2/1292-black-edit2_1.jpg",
  "https://img.ohpolly.com/YwlctpKdYNdZIe4aEi-Hb1ZQ4xE=/fit-in/1800x/catalog/product/1/5/1567-white-edit10_1.jpg",
  "https://img.ohpolly.com/pKhXS4M3PAWiFjFyVJOe0yhO9YM=/fit-in/1800x/catalog/product/1/2/1292-black-edit3_2.jpg",
  "https://img.ohpolly.com/bHx889BcPC0C4huvrTuoO3iBeok=/fit-in/1800x/catalog/product/1/5/1567-white-edit8_1.jpg",
  "https://img.ohpolly.com/6O3EdYEkeYLbUo4Nt5lcWaAh_5k=/fit-in/1800x/catalog/product/1/2/1292-black-edit1_2.jpg",
  "https://img.ohpolly.com/FPflFV1Hedx7YGCwcFa3P737EMw=/fit-in/1800x/catalog/product/1/2/1292-black-edit6_2.jpg",
  "https://img.ohpolly.com/EqrQX06KofELRd211Rt1jyWfRr0=/fit-in/1800x/catalog/product/1/2/1292-black-edit5_2.jpg",
  "https://img.ohpolly.com/pQGNUhhKOgbnDGkR-ZSHDnMvG44=/fit-in/1800x/catalog/product/1/5/1567-white-edit4_1.jpg",
  "https://img.ohpolly.com/LbpFtIe5dhpmVrZt6iIecLUP8nk=/fit-in/1800x/catalog/product/1/5/1567-white-edit11_1.jpg",
  "https://img.ohpolly.com/K82P7PtDgN16Rl2Gpahfv5s0hdQ=/fit-in/1800x/catalog/product/1/5/1567-white-edit3_1.jpg",
  "https://img.ohpolly.com/bavqoWnFvBCSeYNsA6njCY6HI5U=/fit-in/1800x/catalog/product/1/5/1567-white-edit7_1.jpg",
  "https://img.ohpolly.com/Gk1wkUD-S3c5C6GqP6owMkG4vuc=/fit-in/1800x/catalog/product/1/5/1567-white-edit12_1.jpg",
  "https://img.ohpolly.com/Ek8JsQWP__Xn4pyYgU7CFWG2ys0=/fit-in/1800x/catalog/product/1/5/1567-white-edit6_1.jpg",
  "https://img.ohpolly.com/MB7VYeClRdF2_mmeEtk5Eh7L064=/fit-in/1800x/catalog/product/1/5/1567-white-edit5-topmain_1.jpg",
  "https://img.ohpolly.com/xiGPuaRRW9Qr124yknkXBJkHdDQ=/fit-in/1800x/catalog/product/1/5/1567-white-edit1_1.jpg",
  "https://img.ohpolly.com/zT2uQwkeENpVP7gski5k7HuUVe8=/fit-in/1800x/catalog/product/2/3/2300_10_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/20U62wl6c1bwNYeivRlHIeY3_4c=/fit-in/1800x/catalog/product/1/5/1567_pink_edit7-bottommain.jpg",
  "https://img.ohpolly.com/tw66pFt9_ejFlhBtE4AhkYYR7-c=/fit-in/1800x/catalog/product/1/5/1567_pink_edit14.jpg",
  "https://img.ohpolly.com/A0AoNmf9sXUf6t1Rdnta2jtBTnY=/fit-in/1800x/catalog/product/1/5/1567_pink_edit13.jpg",
  "https://img.ohpolly.com/i2G_lTCHoYbNq38xkyemS3S967s=/fit-in/1800x/catalog/product/1/5/1567_pink_edit8.jpg",
  "https://img.ohpolly.com/JCqxdPUTLWkwH4HdF7DS1XFraAQ=/fit-in/1800x/catalog/product/1/5/1567_pink_edit1.jpg",
  "https://img.ohpolly.com/3dDevd4YbFz3GtrW2W8Pg5qPUp8=/fit-in/1800x/catalog/product/1/5/1567_pink_edit10-topmain.jpg",
  "https://img.ohpolly.com/cmLC2KO5ndhtjUEfMyfeiQwJG3w=/fit-in/1800x/catalog/product/1/5/1567_pink_edit12.jpg",
  "https://img.ohpolly.com/1bHvvnJYnQ7rrSG1LyRCJOeQJH0=/fit-in/1800x/catalog/product/1/5/1567_pink_edit3.jpg",
  "https://img.ohpolly.com/bkgs82i0PkCeGouz2CNxpcSG0rw=/fit-in/1800x/catalog/product/1/5/1567_pink_edit11.jpg",
  "https://img.ohpolly.com/wy7hwMLsRitJpkMcptJbIuDigNo=/fit-in/1800x/catalog/product/1/5/1567_pink_edit9.jpg",
  "https://img.ohpolly.com/A4Frj7vs6kE8kw8ptonCNvqjCZA=/fit-in/1800x/catalog/product/1/5/1567_pink_edit5.jpg",
  "https://img.ohpolly.com/OCFswn4SXzCDv9jtbTPcSA82Gn0=/fit-in/1800x/catalog/product/1/5/1567_pink_edit6.jpg",
  "https://img.ohpolly.com/__bOOliIcrJT0BCN1Kewtr89h94=/fit-in/1800x/catalog/product/1/5/1567_pink_edit2.jpg",
  "https://img.ohpolly.com/Url7uIm8JlQlqCHmysEgLSHUtK8=/fit-in/1800x/catalog/product/1/5/1567_pink_edit4.jpg",
  "https://img.ohpolly.com/n8Mh-CxjPNy2IJYUo2hzHXvrKSs=/fit-in/1800x/catalog/product/1/5/1567_black_edit7-bottoms.jpg",
  "https://img.ohpolly.com/cJDNp1UgAyvAbl23cL9--HQVE9g=/fit-in/1800x/catalog/product/1/5/1567_black_edit8.jpg",
  "https://img.ohpolly.com/dCH-NOzRfBDrQe5YXjVQzU1XhkE=/fit-in/1800x/catalog/product/1/5/1567_black_edit11.jpg",
  "https://img.ohpolly.com/SgF6WIsGOVKg1XyLyfLS36eTfZI=/fit-in/1800x/catalog/product/1/5/1567_black_edit2.jpg",
  "https://img.ohpolly.com/_vkEsKbSIKM_VwPbscbJYC_NmTQ=/fit-in/1800x/catalog/product/1/5/1567_black_edit3-top.jpg",
  "https://img.ohpolly.com/IpmcUW5FmORvFA5XHJSmaGtSYPk=/fit-in/1800x/catalog/product/1/5/1567_black_edit9.jpg",
  "https://img.ohpolly.com/EP3p9-JEfXmUXIfQItGP8PxaaHM=/fit-in/1800x/catalog/product/1/5/1567_black_edit1.jpg",
  "https://img.ohpolly.com/5NC8YQHFiggyf-dV2B4MMlrFZE8=/fit-in/1800x/catalog/product/1/5/1567_black_edit5.jpg",
  "https://img.ohpolly.com/BaTaeZh5oMdN_PbOVuT_-D1V9pE=/fit-in/1800x/catalog/product/1/5/1567_black_edit10.jpg",
  "https://img.ohpolly.com/_mSObaeLN5isHibB4tdkJUtBXHc=/fit-in/1800x/catalog/product/1/5/1567_black_edit4.jpg",
  "https://img.ohpolly.com/hUeR42Fb4aIGYNMi1EZrfwfJJqY=/fit-in/1800x/catalog/product/1/5/1567_black_edit12.jpg",
  "https://img.ohpolly.com/s0x7bk3NpaTNzTrLaVLL1gLpbfo=/fit-in/1800x/catalog/product/1/5/1567_black_edit13.jpg",
  "https://img.ohpolly.com/adJj9Wak-r1V8Mj77Bh3eEX-VXs=/fit-in/1800x/catalog/product/2/3/2300_topmain_crop_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/U3SsQwDiNlCogwGLlyYm12a4ffs=/fit-in/1800x/catalog/product/2/3/2300_11_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/Xn-qAUUPnWntUvokafe04CF5quU=/fit-in/1800x/catalog/product/2/3/2300_12_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/GnGWgT-bK4uLUVS6IZXzLVaJ1fU=/fit-in/1800x/catalog/product/2/3/2300_9_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/NbPlNfRVCGUPUceIJtiGqDcTgx8=/fit-in/1800x/catalog/product/2/3/2300_7_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/5gNMzfUYZz2Yp7tmmeYDk-LBQbU=/fit-in/1800x/catalog/product/2/3/2300_4_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/o9njZSurLjpRdxV9DMMkl8H57uY=/fit-in/1800x/catalog/product/2/3/2300_3_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/EmojAK4t6_1tokqv5Bf1J1nCspY=/fit-in/1800x/catalog/product/2/3/2300_1_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/Vc_ylmlag5G5uTcqBMIkIENukJU=/fit-in/1800x/catalog/product/2/3/2300_6_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/A4PBeWnIJG0h1NwiA7Jy6vu6HrU=/fit-in/1800x/catalog/product/2/3/2300_5_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/dgPabLdy4pFLaiK0OfuRiAiocS8=/fit-in/1800x/catalog/product/2/3/2300_2_string-em-along-gunmetal-metallic-high-waisted-string-bikini.jpg",
  "https://img.ohpolly.com/ZUT2L9LZlyXX_I1XgRWcHYg_3nM=/fit-in/1800x/catalog/product/2/3/2300_topmain_crop_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/F9iT5wO6cUCULI1Z7mHogHyLpuk=/fit-in/1800x/catalog/product/2/3/2300_7_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/XJ_zpHhUODstXKUSPPzlE8FZXeE=/fit-in/1800x/catalog/product/2/3/2300_3_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/u3kd87zMfoL7D18irgarA-A33O8=/fit-in/1800x/catalog/product/2/3/2300_6_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/-PoGoI34fxCt-eDrhGzsPRbC66A=/fit-in/1800x/catalog/product/2/3/2300_8_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/kBIiTOZn0IO49d6q_-5m5nPXoM4=/fit-in/1800x/catalog/product/2/3/2300_11_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/p85pVrqG6v4WLKcnb3wBvYBDfrg=/fit-in/1800x/catalog/product/2/3/2300_10_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/ksUyrafdzQSQ4PLvhrTUjRQpj6k=/fit-in/1800x/catalog/product/2/3/2300_5_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/xg-MpzHNLuefmECpo4xVqQqWy4Y=/fit-in/1800x/catalog/product/2/3/2300_9_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/ewyU7Rr7zdOAQ3tgb7J7DwpMkzY=/fit-in/1800x/catalog/product/2/3/2300_1_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/9h74tnp5V3iKTJMBLwC_O1cp70A=/fit-in/1800x/catalog/product/2/3/2300_12_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/H1ouf8NTDocPaZo_005_YttLLHI=/fit-in/1800x/catalog/product/2/3/2300_2_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/3fVljpcRjQQY-Y1F6eIQo5kJP24=/fit-in/1800x/catalog/product/2/3/2300_13_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg",
  "https://img.ohpolly.com/mxF-YgrPcBxH0blElMda1oyEP3Q=/fit-in/1800x/catalog/product/2/3/2300_14_string-em-along-rose-gold-metallic-thin-strap-bikini_1.jpg"
];

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const el1 = useFullscreen(onFullS);
  const el2 = useFullscreen(onFullS);
  const el3 = useFullscreen(onFullS);
  const el4 = useFullscreen(onFullS);

  return (
    <div className="App">
      <div className="div" ref={el1.element}>
        <div>
          <img
            ref={el3.element}
            className="img"
            src={imgSrc[Math.floor(Math.random() * 71)]}
          />
        </div>
        <div>
          <button onClick={el1.exitFull}>Exit fullscreen</button>
          <button onClick={el3.triggerFull}>Make Large FullScreen</button>
          <button onClick={el1.triggerFull}>Make Small fullscreen</button>
        </div>
      </div>
      <div className="div" ref={el2.element}>
        <div>
          <img
            ref={el4.element}
            className="img"
            src={imgSrc[Math.floor(Math.random() * 71)]}
          />
        </div>
        <div>
          <button onClick={el2.exitFull}>Exit fullscreen</button>
          <button onClick={el4.triggerFull}>Make Large FullScreen</button>
          <button onClick={el2.triggerFull}>Make fullscreen</button>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
