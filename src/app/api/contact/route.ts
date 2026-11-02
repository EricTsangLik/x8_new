import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SERVICE_LABELS: Record<string, string> = {
  'mall-popup': '商場 POP-UP',
  'store-renovation': '店舖裝修工程',
  roadshow: 'ROADSHOW 一站式推廣',
  printing: '專業印刷服務',
  backdrop: 'BackDrop 設計與製作',
  'exhibition-booth': '展覽攤位製作',
  'event-decoration': '活動佈置裝飾',
  'license-application': '設計及牌照申請服務',
  'equipment-rental': '設備租賃服務',
  lightbox: '廣告燈箱',
  'mall-sale': '商場特賣場製作',
  'mall-decoration': '商場裝飾佈置',
  'christmas-mall': '聖誕商場佈置',
  'new-year-mall': '新年商場佈置',
  other: '其他查詢',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const subject = String(body.subject ?? '').trim();
    const message = String(body.message ?? '').trim();
    const honeypot = String(body.company ?? '').trim();

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: '請填寫所有必填欄位。' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: '請輸入有效的電郵地址。' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.MAIL_TO || 'info.x8production@gmail.com';
    const mailFrom = process.env.MAIL_FROM || smtpUser || mailTo;

    if (!smtpUser || !smtpPass) {
      console.error('Missing SMTP_USER or SMTP_PASS');
      return NextResponse.json({ error: '郵件服務尚未設定，請稍後再試。' }, { status: 500 });
    }

    const serviceLabel = SERVICE_LABELS[subject] || '未指定服務';
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"X8 PRODUCTION 網站" <${mailFrom}>`,
      to: mailTo,
      replyTo: email,
      subject: `網站查詢：${serviceLabel} — ${name}`,
      text: [
        `姓名：${name}`,
        `電郵：${email}`,
        `電話：${phone}`,
        `查詢服務：${serviceLabel}`,
        '',
        '訊息內容：',
        message,
      ].join('\n'),
      html: `
        <h2>X8 PRODUCTION 網站查詢</h2>
        <p><strong>姓名：</strong>${escapeHtml(name)}</p>
        <p><strong>電郵：</strong>${escapeHtml(email)}</p>
        <p><strong>電話：</strong>${escapeHtml(phone)}</p>
        <p><strong>查詢服務：</strong>${escapeHtml(serviceLabel)}</p>
        <p><strong>訊息內容：</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return NextResponse.json({ error: '發送失敗，請稍後再試或改用 WhatsApp / 電郵聯絡。' }, { status: 500 });
  }
}
