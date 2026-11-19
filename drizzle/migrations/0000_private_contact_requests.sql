CREATE TABLE public.contact_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL, email text NOT NULL, phone text NOT NULL, city text NOT NULL, state text NOT NULL, service text NOT NULL, message text NOT NULL, details jsonb NOT NULL DEFAULT '{}'::jsonb, privacy_version text NOT NULL DEFAULT '2026-11-19'
);
GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_requests_email_created_idx ON public.contact_requests(email, created_at);
CREATE FUNCTION public.submit_contact_request(p_name text, p_email text, p_phone text, p_city text, p_state text, p_service text, p_message text, p_details jsonb) RETURNS uuid LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
DECLARE request_id uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtext(lower(p_email)));
 IF (SELECT count(*) FROM public.contact_requests WHERE email = lower(p_email) AND created_at > now() - interval '1 hour') >= 3 THEN RAISE EXCEPTION 'RATE_LIMIT'; END IF;
 INSERT INTO public.contact_requests(name,email,phone,city,state,service,message,details) VALUES(p_name,lower(p_email),p_phone,p_city,p_state,p_service,p_message,p_details) RETURNING id INTO request_id;
 RETURN request_id;
END;
$$;
REVOKE ALL ON FUNCTION public.submit_contact_request(text,text,text,text,text,text,text,jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_contact_request(text,text,text,text,text,text,text,jsonb) TO service_role;