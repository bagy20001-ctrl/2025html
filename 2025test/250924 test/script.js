let currentSlide = 0;  // 현재 보이는 이미지의 인덱스
const slides = document.querySelectorAll('.slide');  // 모든 이미지 요소를 선택
const totalSlides = slides.length;  // 총 이미지 개수
let slideInterval;  // 슬라이드 자동 전환을 위한 타이머 변수
let progressBar = document.getElementById('progress-bar');  // 진행 바
let currentPage = document.getElementById('current-page');  // 현재 페이지 표시
let totalPage = document.getElementById('total-pages');  // 총 페이지 표시

// 슬라이드를 전환하는 함수
function changeSlide() {
    slides[currentSlide].classList.remove('visible');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('visible');
    updatePageNumber();  // 페이지 번호 업데이트
    resetProgressBar();  // 진행 바 초기화
}

// 이전 슬라이드로 가는 함수
function prevSlide() {
    slides[currentSlide].classList.remove('visible');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('visible');
    updatePageNumber();  // 페이지 번호 업데이트
    resetProgressBar();  // 진행 바 초기화
}

// 다음 슬라이드로 가는 함수
function nextSlide() {
    slides[currentSlide].classList.remove('visible');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('visible');
    updatePageNumber();  // 페이지 번호 업데이트
    resetProgressBar();  // 진행 바 초기화
}

// 슬라이드 쇼 타이머 초기화 함수
function resetProgressBar() {
    clearInterval(slideInterval);  // 기존 타이머를 종료
    progressBar.style.width = '0%';  // 진행 바 초기화
    slideInterval = setInterval(updateProgressBar, 30);  // 30ms마다 진행 바 업데이트
}

// 진행 바 업데이트 함수
function updateProgressBar() {
    let width = parseFloat(progressBar.style.width);
    if (width < 100) {
        progressBar.style.width = width + 0.3 + '%';  // 진행 바가 0.3%씩 증가
    } else {
        changeSlide();  // 진행 바가 끝나면 슬라이드 변경
    }
}

// 페이지 번호 업데이트 함수
function updatePageNumber() {
    currentPage.textContent = currentSlide + 1;  // 현재 페이지 번호
}

// 페이지 로드 시 초기 설정
window.onload = function() {
    for (let i = 1; i < totalSlides; i++) {
        slides[i].classList.remove('visible');  // 처음에는 두 번째부터 마지막 이미지는 숨깁니다.
    }

    totalPage.textContent = totalSlides;  // 총 페이지 수 설정
    currentPage.textContent = currentSlide + 1;  // 초기 페이지 번호 설정
    resetProgressBar();  // 페이지 로드 시 슬라이드 타이머 초기화

    // 버튼 클릭 시 슬라이드를 변경하는 이벤트 리스너 추가
    document.getElementById('prev-btn').addEventListener('click', prevSlide);  // 이전 버튼 클릭 시 prevSlide 함수 실행
    document.getElementById('next-btn').addEventListener('click', nextSlide);  // 다음 버튼 클릭 시 nextSlide 함수 실행
};
