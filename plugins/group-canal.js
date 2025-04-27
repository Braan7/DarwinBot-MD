
var handler = async (m, { command }) => {
    if (command === 'canal') {
        const canalLink = 'https://whatsapp.com/channel/0029Vb4tpfK1t90gCaPxv90A'; // Reemplaza esto con tu enlace real
        conn.reply(m.chat, `¡Aquí está el enlace de mi canal! 👉 ${canalLink}`, m);
    }
};