// 스크롤하면 메뉴에 배경 넣기
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// 모바일 메뉴 열고 닫기
const navMenu = document.getElementById("navMenu");
document.getElementById("navToggle").addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
navMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navMenu.classList.remove("open"));
});

// 평면 탭 전환
const units = [
  {
    name: "84㎡ TYPE",
    desc: "3룸 2욕실, 4베이 판상형 구조로 채광과 통풍이 뛰어난 실속형 평면입니다.",
    img: "https://picsum.photos/seed/lumiere-unit84/900/700",
    spec: [["전용면적", "84.97㎡"], ["공급면적", "112.40㎡"], ["세대수", "312세대"]],
  },
  {
    name: "101㎡ TYPE",
    desc: "넓은 드레스룸과 알파룸을 갖춰 공간 활용도를 높인 여유로운 평면입니다.",
    img: "https://picsum.photos/seed/lumiere-unit101/900/700",
    spec: [["전용면적", "101.84㎡"], ["공급면적", "134.20㎡"], ["세대수", "208세대"]],
  },
  {
    name: "129㎡ TYPE",
    desc: "파노라마 거실과 마스터존 분리 설계로 품격을 더한 펜트하우스급 평면입니다.",
    img: "https://picsum.photos/seed/lumiere-unit129/900/700",
    spec: [["전용면적", "129.93㎡"], ["공급면적", "168.55㎡"], ["세대수", "104세대"]],
  },
];
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const unit = units[tab.dataset.unit];
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("unitImg").src = unit.img;
    document.getElementById("unitName").textContent = unit.name;
    document.getElementById("unitDesc").textContent = unit.desc;
    document.getElementById("unitSpec").innerHTML = unit.spec
      .map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`)
      .join("");
  });
});

// 갤러리 클릭하면 크게 보기
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.querySelectorAll("#galleryGrid img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("open");
  });
});
lightbox.addEventListener("click", () => lightbox.classList.remove("open"));

// 상담 신청 폼 (연습용이라 실제 전송은 안 함)
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("상담 신청이 접수되었습니다. (연습용 페이지)");
  e.target.reset();
});

// 스크롤하면 섹션이 아래에서 올라오며 등장
const revealEls = document.querySelectorAll(".section-head, .card, .feature, .loc-item, .overview > *, .unit, .contact > *");
revealEls.forEach((el) => el.classList.add("reveal"));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => observer.observe(el));
