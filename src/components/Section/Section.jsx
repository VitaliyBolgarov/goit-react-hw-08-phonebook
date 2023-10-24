import { SectionContainer, Title } from './Section.module';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContainer>
  );
};
