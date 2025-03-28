document.querySelectorAll('.toolbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // 썸네일 클릭 시 최상단으로 이동
      if (targetId === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // 그 외에는 툴바 바로 아래에 위치
        const targetSection = document.querySelector(targetId);
        const toolbarHeight = document.querySelector('.toolbar').offsetHeight;
        const offset = 10; // 추가 여백 (필요에 따라 조정)


        window.scrollTo({
          top: targetSection.offsetTop - toolbarHeight - offset,
          behavior: 'smooth'
        });
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const weddingDate = new Date("2025-06-01T12:00:00"); // 결혼식 날짜 설정
    const today = new Date();
    
    const timeDiff = weddingDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 남은 일수 계산

    const daysLeftElement = document.getElementById("days-left");

    if (daysLeft > 0) {
        daysLeftElement.textContent = `사발❤지선의 결혼식이 ${daysLeft}일 남았습니다.`;
    } else {
        daysLeftElement.textContent = "결혼식이 끝났습니다.";
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const daysContainer = document.getElementById("calendar-days");
  const firstDayOfMonth = new Date(2025, 5, 1).getDay(); // 6월 1일의 요일 (일:0, 월:1 ...)
  const totalDays = 30; // 2025년 6월은 30일
  let day = 1;

  // 빈칸 생성 (첫째 날 이전의 빈 칸)
  for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDiv = document.createElement("div");
      daysContainer.appendChild(emptyDiv);
  }

  // 날짜 생성
  for (let i = 1; i <= totalDays; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;

      // 6월 1일 하이라이트 적용
      if (i === 1) {
          dayDiv.classList.add("highlight");
      }

      daysContainer.appendChild(dayDiv);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Masonry는 column-count 방식이므로 별도 초기화 필요 X

  // LightGallery 초기화
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    download: false,
    hash: false,
    closeIcon: false,
  });
});

//오시는길 적용
document.addEventListener("DOMContentLoaded", function () {
  // 토글 버튼 기능
  const toggleButtons = document.querySelectorAll(".location-toggle-btn");
  const mapAccount = document.getElementById("map");
  const sketchAccount = document.getElementById("map-hidden");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      toggleButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      if (button.dataset.target === "map") {
        mapAccount.classList.remove("hidden");
        sketchAccount.classList.add("hidden");
      } else {
        sketchAccount.classList.remove("hidden");
        mapAccount.classList.add("hidden");
      }
    });
  });
});

//마음 전하는 곳 적용
document.addEventListener("DOMContentLoaded", function () {
  // 토글 버튼 기능
  const toggleButtons = document.querySelectorAll(".account-toggle-btn");
  const groomAccount = document.getElementById("groom-account");
  const brideAccount = document.getElementById("bride-account");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      toggleButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      if (button.dataset.target === "groom") {
        groomAccount.classList.remove("hidden");
        brideAccount.classList.add("hidden");
      } else {
        brideAccount.classList.remove("hidden");
        groomAccount.classList.add("hidden");
      }
    });
  });

  // 복사 버튼 기능
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const account = button.dataset.account;
      navigator.clipboard.writeText(account).then(() => {
        alert("계좌번호가 복사되었습니다!");
      }).catch(err => {
        alert("복사에 실패했습니다. 직접 복사해 주세요.");
        console.error(err);
      });
    });
  });
});

