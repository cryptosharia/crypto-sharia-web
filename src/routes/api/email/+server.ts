import { EMAIL, GS_CONTACT_FORM_ENDPOINT } from '$env/static/private';

export const POST = async ({ request }) => {
  const { sender, name, message } = await request.json();

  try {
    const res = await fetch(GS_CONTACT_FORM_ENDPOINT, {
      redirect: 'follow', // to solve CORS issue
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8' // to solve CORS issue
      },
      body: JSON.stringify({ recipient: EMAIL, sender, name, message })
    });

    if (!res.ok) {
      throw new Error(`Sending email failed: ${res.statusText}`);
    }

    return new Response(JSON.stringify({ error: false, message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error(error);

    return new Response(JSON.stringify({ error: true, message: error.toString() }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
