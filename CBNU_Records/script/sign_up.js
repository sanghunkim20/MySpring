import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// 파이어 베이스 설정
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
const db = getFirestore(app);

// 회원가입 폼 전송
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    try {
        // 파이어베이스 Authentication을 통해 사용자 생성
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // 파이어 스토어에 사용자 추가 정보 저장
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            phone: phone,
            address: address,
            createdAt: new Date()
        });

        alert('회원가입을 성공하셨습니다.');
        window.location.href = 'login.html'; // 회원가입 성공 후 리다이렉트
    } catch (error) {
        console.error('Error signing up:', error);
        alert('Sign Up Failed: ' + error.message);
    }
});
