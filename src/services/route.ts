import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await resend.emails.send({
      from: 'contato@seudominio.com',
      to: 'maxnunes0711@gmail.com',
      subject: 'Novo contato recebido',
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefone:</strong> ${body.phone}</p>
        <p><strong>Mensagem:</strong> ${body.message}</p>
        <p><strong>Data:</strong> ${body.createdAt}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
