import { useMemo, useState, useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip from '@mui/material/Tooltip';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { PlusIcon } from 'assets';
import { LikeButton, Input } from 'common/components';
import { useBooleanState } from 'hooks';

import { ButtonsGroup } from './buttons-group';
import { FavoriteGroup } from './favorite-group';
import { PlusButtonWrapper, TooltipWrapper, FormWrapper, FormContent } from './styled';

interface StateProps {
  favoriteList: string[];
  favoriteName: string | null;
}

const data = [
  {
    name: 'favorite',
    label: 'Favorite',
    selected: false,
  },
  {
    name: 'new',
    label: 'New',
    selected: true,
  },
];

const schema = yup
  .object({
    favoriteList: yup.string().required(),
    favoriteName: yup.string().required('Can’t be Empty').max(100),
  })
  .required();

export const FavoriteTooltip = () => {
  const [open, setOpen] = useState(false);
  const [isAdd, turnOnAddMode, turnOffAddMode] = useBooleanState(false);

  const initialState: StateProps = useMemo(() => {
    const list = data.map(({ name, selected }) => selected && name);
    const favoriteList = list.filter(item => item) as string[];
    return { favoriteList, favoriteName: '' };
  }, [data]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    resolver: yupResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const handleTooltipClose = useCallback(() => {
    setOpen(false);
    turnOffAddMode();
  }, [turnOffAddMode]);

  const handleTooltipOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onSubmit = data => console.log(data);

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <TooltipWrapper>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          disableHoverListener
          disableTouchListener
          open={open}
          title={
            <FormWrapper>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormContent>
                  <FavoriteGroup control={control} favoriteData={data} />
                  {!isAdd && (
                    <PlusButtonWrapper onClick={turnOnAddMode}>
                      <PlusIcon />
                      <span>Create New Favorite List</span>
                    </PlusButtonWrapper>
                  )}
                  {isAdd && (
                    <>
                      <Controller
                        name="favoriteName"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="New List Name"
                            error={!!errors.favoriteName?.message}
                            errorMessage={errors.favoriteName?.message}
                            withLabel={false}
                          />
                        )}
                      />
                      <ButtonsGroup onCancel={turnOffAddMode} />
                    </>
                  )}
                </FormContent>
              </form>
            </FormWrapper>
          }>
          <LikeButton liked={false} onClick={handleTooltipOpen} />
        </Tooltip>
      </TooltipWrapper>
    </ClickAwayListener>
  );
};
