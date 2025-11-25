-- Create the projects table
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title_es text not null,
  description_es text not null,
  title_en text not null,
  description_en text not null,
  image_url text not null,
  technologies text[] not null,
  live_url text,
  github_url text,
  featured boolean default false,
  display_order integer default 0
);

-- Enable Row Level Security (RLS)
alter table public.projects enable row level security;

-- Create policies
-- Allow read access to everyone
create policy "Public projects are viewable by everyone"
  on public.projects for select
  using ( true );

-- Allow insert/update/delete access to everyone (since this is a personal portfolio with anon key for admin)
-- WARNING: In a production app with multiple users, you'd want to restrict this to authenticated users only.
create policy "Enable insert for everyone"
  on public.projects for insert
  with check ( true );

create policy "Enable update for everyone"
  on public.projects for update
  using ( true );

create policy "Enable delete for everyone"
  on public.projects for delete
  using ( true );

-- Storage Bucket Setup (You might need to create the bucket 'project-images' manually in the dashboard if this fails)
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

-- Storage Policies
create policy "Give public access to project-images"
  on storage.objects for select
  using ( bucket_id = 'project-images' );

create policy "Enable upload for project-images"
  on storage.objects for insert
  with check ( bucket_id = 'project-images' );
