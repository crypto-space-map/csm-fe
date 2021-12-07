import { useState } from 'react';

import { Button } from 'common/components/button';

import { UserForms } from '../types';
import { StyledFormContainer } from './styled';

export const FormContainer = () => {
  const [selectedForm, setSelectedForm] = useState(UserForms.LOGIN);

  const handleClick = () => setSelectedForm(selectedForm === 1 ? UserForms.LOGIN : UserForms.REGISTER);

  const renderForm = () => {
    switch (selectedForm) {
      case UserForms.LOGIN:
        return <div>login</div>;
      case UserForms.REGISTER:
        return <div>register</div>;
      default:
        return null;
    }
  };

  return (
    <StyledFormContainer>
      {renderForm()}
      <Button onClick={handleClick}>NEXT FORM</Button>
    </StyledFormContainer>
  );
};
