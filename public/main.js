// Função para o login no index.html
async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();

        if (!response.ok) {
            alert('Login falhou');
            return;
        }

        localStorage.setItem('token', data.token);
        alert('Login bem-sucedido!');
        window.location.href = 'registrar.html';
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login');
    }
}

// Função para carregar dados em registrar.html
async function loadRegistrarPage() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('Por favor, faça login.');
        window.location.href = 'index.html';
        return;
    }

    try {
        const response = await fetch('/registrar', {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.status === 403) {
            alert('Token inválido. Por favor, faça login novamente.');
            window.location.href = 'index.html';
        } else {
            const data = await response.json();
            document.getElementById('data-container').textContent = JSON.stringify(data, null, 2);
        }
    } catch (error) {
        console.error('Erro ao carregar dados de registro:', error);
    }
}

// Função de logout
function handleLogout() {
    localStorage.removeItem('token');
    alert('Logout bem-sucedido!');
    window.location.href = 'index.html';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');

    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (logoutButton) logoutButton.addEventListener('click', handleLogout);

    if (window.location.pathname.endsWith('registrar.html')) {
        loadRegistrarPage();
    }
});