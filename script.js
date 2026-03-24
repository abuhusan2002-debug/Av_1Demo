const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const email = (data.get('email') || '').toString().trim();
  const password = (data.get('password') || '').toString();

  if (!email || !password) {
    setMessage('الرجاء تعبئة جميع الحقول.', 'error');
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    setMessage('صيغة البريد الإلكتروني غير صحيحة.', 'error');
    return;
  }

  if (password.length < 6) {
    setMessage('كلمة المرور يجب أن تكون 6 أحرف على الأقل.', 'error');
    return;
  }

  setMessage('تم تسجيل الدخول بنجاح (واجهة تجريبية).', 'success');
});

function setMessage(text, type) {
  message.textContent = text;
  message.className = type;
}
