
-- 1. Conversations (both group and 1:1)
CREATE TABLE public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  is_group BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Conversation participants (users in a conversation, for group support)
CREATE TABLE public.conversation_participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL, -- References auth.users
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (conversation_id, user_id)
);

-- 3. Messages (text & attachments, read status)
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL,
  content TEXT,
  attachment_url TEXT,
  attachment_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 4. Message "reads" (who read which message)
CREATE TABLE public.message_reads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id UUID NOT NULL REFERENCES public.messages(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  read_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (message_id, user_id)
);

-- Enable RLS on all chat tables for user privacy
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversation_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.message_reads ENABLE ROW LEVEL SECURITY;

-- Policy: participants can view their conversations
CREATE POLICY "Participants can view their conversations"
ON public.conversations
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.conversation_participants
    WHERE conversation_id = conversations.id AND user_id = auth.uid()
  )
);

-- Policy: participants can be listed
CREATE POLICY "Participants can view their own participation"
ON public.conversation_participants
FOR SELECT
USING (
  user_id = auth.uid()
);

-- Policy: allow inserting self as participant
CREATE POLICY "Users can join conversations"
ON public.conversation_participants
FOR INSERT
WITH CHECK (
  user_id = auth.uid()
);

-- Policy: participants can read/write to their conversations' messages
CREATE POLICY "Participants can view messages"
ON public.messages
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.conversation_participants
    WHERE conversation_id = messages.conversation_id AND user_id = auth.uid()
  )
);

-- Policy: participants can send messages
CREATE POLICY "Participants can send messages"
ON public.messages
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.conversation_participants
    WHERE conversation_id = messages.conversation_id AND user_id = auth.uid()
  )
  AND sender_id = auth.uid()
);

-- Policy: allow read receipts for own user
CREATE POLICY "Participants can record message reads"
ON public.message_reads
FOR INSERT
WITH CHECK (
  user_id = auth.uid()
);

-- Policy: allow users to see their own message_reads
CREATE POLICY "Participants can view their message reads"
ON public.message_reads
FOR SELECT
USING (
  user_id = auth.uid()
);

