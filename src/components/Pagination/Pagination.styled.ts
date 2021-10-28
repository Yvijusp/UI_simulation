import styled from 'styled-components';

export const StyledPagination = styled.div``;

export const Testimonials = styled.div`
  display: flex;
  justify-content: center;
  gap: 42px;

  margin-bottom: 16px;
`;

export const LinesContainer = styled.div``;
export const ButtonContainer = styled.div``;

export const TestimonialsControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(1380px - 110px);
  margin: 0 auto;

  ${LinesContainer} {
    display: flex;
    gap: 11px;
    align-items: center;
    justify-content: flex-end;

    width: 55%;
  }

  ${ButtonContainer} {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: flex-end;
    width: 45%;
  }
`;
