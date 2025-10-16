
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
  isQuoteRequest?: boolean;
  configuration?: Record<string, string>;
}

// Server-side validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone) && phone.length >= 9 && phone.length <= 15;
};

const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 100;
};

const sanitizeString = (str: string, maxLength: number): string => {
  return str.trim().substring(0, maxLength);
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, email, telefono, comentarios }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { nombre, email });

    // Server-side validation
    if (!nombre || !email) {
      return new Response(
        JSON.stringify({ error: "Nombre y email son obligatorios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!validateName(nombre)) {
      return new Response(
        JSON.stringify({ error: "Nombre inválido. Solo se permiten letras, espacios, guiones y apóstrofes" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (telefono && !validatePhone(telefono)) {
      return new Response(
        JSON.stringify({ error: "Formato de teléfono inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize inputs
    const sanitizedNombre = sanitizeString(nombre, 100);
    const sanitizedEmail = sanitizeString(email, 255);
    const sanitizedTelefono = telefono ? sanitizeString(telefono, 15) : undefined;
    const sanitizedComentarios = comentarios ? sanitizeString(comentarios, 1000) : undefined;

    // Send email to the company
    const emailResponse = await resend.emails.send({
      from: "Nex Modular Homes <onboarding@resend.dev>",
      to: ["info@nexmodularhomes.com"],
      subject: "Nueva solicitud de información - Nex Modular Homes",
      html: `
        <h2>Nueva solicitud de información</h2>
        <p><strong>Nombre:</strong> ${sanitizedNombre}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        ${sanitizedTelefono ? `<p><strong>Teléfono:</strong> ${sanitizedTelefono}</p>` : ''}
        ${sanitizedComentarios ? `<p><strong>Comentarios:</strong></p><p>${sanitizedComentarios.replace(/\n/g, '<br>')}</p>` : ''}
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
