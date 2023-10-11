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
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert(`name, email, message: ${name}, ${email}, ${message}`);
 };

 return (
  <StyledContactForm onSubmit={handleSubmit}>
   <label>
    Name:
    <input
     type='text'
     //   placeholder='Name'
     required
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
   </label>
   <label>
    Email:
    <input
     type='email'
     required
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    />
   </label>
   <label>
    Message:
    <textarea
     value={message}
     required
     rows={5}
     onChange={(e) => setMessage(e.target.value)}
    />
   </label>
   <Button type='submit' variant='primary'>
    Submit
   </Button>
  </StyledContactForm>
 );
}
