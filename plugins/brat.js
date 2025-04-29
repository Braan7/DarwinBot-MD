Código creador por Braan

import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        if (!args[0]) {
            return m.reply(`❌ Ingresa el texto para el sticker.\n\nEjemplo: *${usedPrefix + command} 𝐃𝐚𝐫𝐰𝐢𝐧 𝐁𝐨𝐭*`);
        }

        const text = encodeURIComponent(args.join(" "));
        const apiUrl = `https://api.siputzx.my.id/api/m/brat?text=${text}`;

        await conn.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });

        await conn.sendMessage(m.chat, {
            sticker: { url: apiUrl }
        }, { quoted: m });

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply(`❌ Ocurrió un error al generar el sticker.`);
    }
};

handler.command = /^brat$/i;
export default handler;