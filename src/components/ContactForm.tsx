'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import { Button } from '@/components/styles';

const StyledContactForm = styled.form`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: calc(var(--global-spacing) * 3);

 label {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: calc(var(--global-spacing) * 2);
 }

 input,
 textarea {
  flex: 1;
  outline: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: var(--text-body);
  padding: var(--global-spacing);
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
 }

 textarea {
  resize: none;
 }
`;

export default function ContactForm() {
 const [form, setForm] = useState({ name: '', email: '', message: '' });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
  setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert(`Name: ${form.name}, Email: ${form.email}, Message: ${form.message}`);
 };

 return (
  <StyledContactForm onSubmit={handleSubmit}>
   <label>
    Name:
    <input
     type='text'
     name='name'
     //   placeholder='Name'
     required
     value={form.name}
     onChange={handleChange}
    />
   </label>
   <label>
    Email:
    <input
     type='email'
     name='email'
     required
     value={form.email}
     onChange={handleChange}
    />
   </label>
   <label>
    Message:
    <textarea
     name='message'
     value={form.message}
     required
     rows={5}
     onChange={handleChange}
    />
   </label>
   <Button type='submit' $variant='primary'>
    Submit
   </Button>
  </StyledContactForm>
 );
}
