document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.createElement('div');
    dashboard.id = 'custom-dashboard';
    dashboard.innerHTML = `
        <div class="dashboard-content">
            <h2 class="animated-text">Skill Lab Dashboard</h2>
            <div class="day-buttons">
                <button class="dash-btn" data-day="1">Welcome to RVCE skill lab Portal</button>
                <button id="close-dashboard">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(dashboard);

    setTimeout(() => {
        dashboard.style.opacity = '1';
        dashboard.style.transform = 'translateY(0)';
    }, 100);

    const style = document.createElement('style');
    style.innerHTML = `
        #custom-dashboard {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(44,62,80,0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transform: translateY(-40px);
            transition: opacity 0.4s, transform 0.4s;
        }
        .dashboard-content {
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(44, 62, 80, 0.25);
            padding: 38px 32px 28px 32px;
            text-align: center;
            min-width: 320px;
            animation: popIn 0.5s;
        }
        .dashboard-content h2.animated-text {
            color: #4a90e2;
            margin-bottom: 24px;
            font-size: 2em;
            letter-spacing: 2px;
            font-weight: bold;
            /* Text animation */
            background: linear-gradient(90deg, #4a90e2, #50e3c2, #e67e22, #4a90e2);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shineText 2.5s linear infinite;
        }
        @keyframes shineText {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        .dash-btn {
            display: block;
            width: 100%;
            margin: 10px 0;
            padding: 12px;
            font-size: 1.1em;
            border: none;
            border-radius: 7px;
            background: linear-gradient(90deg, #4a90e2 60%, #50e3c2 100%);
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s, transform 0.15s;
        }
        .dash-btn:hover {
            background: linear-gradient(90deg, #357ab8 60%, #38bfa7 100%);
            transform: scale(1.04);
        }
        #close-dashboard {
            margin-top: 18px;
            padding: 10px 28px;
            background: #e74c3c;
            color: #fff;
            border: none;
            border-radius: 7px;
            font-size: 1em;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
            /* Add doodle bounce animation */
            animation: doodleBounce 1.2s infinite;
        }
        #close-dashboard:hover {
            background: #c0392b;
        }
        @keyframes popIn {
            0% { transform: scale(0.8);}
            100% { transform: scale(1);}
        }
        @keyframes doodleBounce {
            0%, 100% { transform: translateY(0);}
            20% { transform: translateY(-8px);}
            40% { transform: translateY(0);}
            60% { transform: translateY(-5px);}
            80% { transform: translateY(0);}
        }
    `;
    document.head.appendChild(style);

    dashboard.querySelectorAll('.dash-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const day = this.getAttribute('data-day');
            alert(`You clicked Day ${day} Projects! (You can add navigation here)`);
        });
    });

    document.getElementById('close-dashboard').onclick = function () {
        dashboard.style.opacity = '0';
        dashboard.style.transform = 'translateY(-40px)';
        setTimeout(() => dashboard.remove(), 400);
    };
});