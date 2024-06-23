import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

// 로그인 폼 전송 
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // 파이어베이스 Authentication을 통해 사용자 로그인
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        alert('로그인을 성공하셨습니다.');
        window.location.href = 'index.html'; // 로그인 성공 후 리다이렉트
    } catch (error) {
        console.error('Error logging in:', error);
        alert('Login Failed: ' + error.message);
    }
});
