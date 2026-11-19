import { createServerFn } from '@tanstack/react-start';
import { contactSchema } from './contact-schema';
export const submitContact=createServerFn({method:'POST'}).inputValidator((input:unknown)=>contactSchema.parse(input)).handler(async({data})=>{
 // Public write-only intake: validated consent and honeypot before privileged access.
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const {data:id,error}=await supabaseAdmin.rpc('submit_contact_request',{p_name:data.name,p_email:data.email,p_phone:data.phone,p_city:data.city,p_state:data.state,p_service:data.service,p_message:data.message,p_details:data.details});
 if(error) return {success:false,id:null,error:error.message.includes('RATE_LIMIT')?'Você atingiu o limite de solicitações. Tente novamente em uma hora.':'Não foi possível registrar sua solicitação. Tente novamente.'};
 return {success:true,id,error:null};
});
