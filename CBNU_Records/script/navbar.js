import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// 파이어베이스 설정
const firebaseConfig = {
    apiKey: "AIzaSyD0tTW3h8TC2LNjVnPHsgAwAaAJ9hQ-GGU",
    authDomain: "musicweb-67e10.firebaseapp.com",
    projectId: "musicweb-67e10",
    storageBucket: "musicweb-67e10.appspot.com",
    messagingSenderId: "411216875147",
    appId: "1:411216875147:web:6bd13f389eed0a42580e8e",
    measurementId: "G-79W6HJR73C"
};

// 파이어베이스 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 로그인 상태 확인 및 내비게이션 바 업데이트
onAuthStateChanged(auth, (user) => {
    const loginLink = document.getElementById('login-link');
    const joinLink = document.getElementById('join-link');
    const logoutLink = document.getElementById('logout-link');

    if (user) {
        loginLink.style.display = 'none';
        joinLink.style.display = 'none';
        logoutLink.style.display = 'block';
        // 로그아웃 이벤트 리스너 추가
        logoutLink.addEventListener('click', logout);
    } else {
        loginLink.style.display = 'block';
        joinLink.style.display = 'block';
        logoutLink.style.display = 'none';
        // 로그아웃 이벤트 리스너 제거
        logoutLink.removeEventListener('click', logout);
    }
});

// 로그아웃 기능
async function logout(e) {
    e.preventDefault();
    try {
        await signOut(auth);
        alert('로그아웃 되었습니다.');
        window.location.href = 'index.html'; // 로그아웃 후 index.html로 이동
    } catch (error) {
        console.error('Error logging out:', error);
        alert('Logout Failed: ' + error.message);
    }
}
