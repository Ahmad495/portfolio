/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Button, Input, Loading, Modal, Text, Textarea } from '@nextui-org/react';
import { Mail } from './Mail';

export default function Contact({ openDialog, setOpenDialog }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Modal closeButton aria-labelledby='modal-title' open={openDialog} blur onClose={() => setOpenDialog(false)}>
      <Modal.Header>
        <Text id='modal-title' size={18} b>
          What's Up
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input type='email' clearable bordered fullWidth color='secondary' size='md' placeholder='Email' contentLeft={<Mail fill='currentColor' />} />
        <Textarea bordered color='secondary' placeholder='Message' rows={5} />
      </Modal.Body>
      <Modal.Footer>
        <Button auto size={'sm'}>
          {isLoading && <Loading color='currentColor' size='sm' />}
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
