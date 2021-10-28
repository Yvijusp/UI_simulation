import { useState } from 'react';
import { Title02 } from '../../GlobalStyle';
import { Closed, Open, Question, StyledFAQ } from './FAQ.styled';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: FAQProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledFAQ>
      <Question>
        <Title02>{question}</Title02>
        <div>
          {open ? (
            <Open onClick={() => setOpen(false)}>
              <span></span>
            </Open>
          ) : (
            <Closed onClick={() => setOpen(true)}>
              <span></span>
              <span></span>
            </Closed>
          )}
        </div>
      </Question>
      {open && (
        <div>
          <p>{answer}</p>
        </div>
      )}
    </StyledFAQ>
  );
};

export default FAQ;
