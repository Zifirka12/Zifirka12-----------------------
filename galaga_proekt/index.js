let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            }
        });
    });
});

let isLoginBlockVisible = false;
    
        function toggleLoginBlock() {
            const loginBlock = document.getElementById('loginBlock');
            if (!isLoginBlockVisible) {
                loginBlock.innerHTML = `
                    <p style="margin-top: 10px; margin-bottom: 10px;">Пожалуйста, войдите</p>
                    <label for="username">Имя пользователя:</label><br>
                    <input type="text" id="username" name="username"><br>
                    <label for="password">Пароль:</label><br>
                    <input type="password" id="password" name="password"><br>
                    <button onclick="submitLogin()">Войти</button>
                    <button onclick="closeLoginBlock()">Закрыть</button>
                `;
                loginBlock.style.display = "block";
                isLoginBlockVisible = true;
            } else {
                closeLoginBlock();
            }
        }
    
        function closeLoginBlock() {
            const loginBlock = document.getElementById('loginBlock');
            loginBlock.style.display = "none";
            loginBlock.innerHTML = "";
            isLoginBlockVisible = false;
        }
    
        function submitLogin() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
    
            console.log(`Username: ${username}, Password: ${password}`);
            closeLoginBlock(); // Закрытие формы после успешного входа
        }


        let isRegisterBlockVisible = false;
    
        function toggleRegisterBlock() {
            const registerBlock = document.getElementById('registerBlock');
            if (!isRegisterBlockVisible) {
                registerBlock.innerHTML = `
                    <p style="margin-top: 10px; margin-bottom: 10px;">Пожалуйста, зарегистрируйтесь</p>
                    <label for="username">Имя пользователя:</label><br>
                    <input type="text" id="username" name="username"><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email"><br>
                    <label for="password">Пароль:</label><br>
                    <input type="password" id="password" name="password"><br>
                    <button onclick="submitRegister()">Зарегистрироваться</button>
                    <button onclick="closeRegisterBlock()">Закрыть</button>
                `;
                registerBlock.style.display = "block";
                isRegisterBlockVisible = true;
            } else {
                closeRegisterBlock();
            }
        }
    
        function closeRegisterBlock() {
            const registerBlock = document.getElementById('registerBlock');
            registerBlock.style.display = "none";
            registerBlock.innerHTML = "";
            isRegisterBlockVisible = false;
        }
    
        function submitRegister() {
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
    
            console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
            closeRegisterBlock(); // Закрытие формы после успешной регистрации
        }