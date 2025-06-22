
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nombre: string;
  email: string;
  telefono?: string;
  comentarios?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, email, telefono, comentarios }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { nombre, email });

    // Send email to the company
    const emailResponse = await resend.emails.send({
      from: "Nex Modular Homes <onboarding@resend.dev>",
      to: ["info@nexmodularhomes.com"],
      subject: "Nueva solicitud de información - Nex Modular Homes",
      html: `
        <h2>Nueva solicitud de información</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
        ${comentarios ? `<p><strong>Comentarios:</strong></p><p>${comentarios.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Enviado desde el formulario de contacto de Nex Modular Homes</small></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
