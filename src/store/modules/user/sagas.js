import { takeLatest, call, put, all } from 'redux-saga/effects';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = {
    name,
    email,
    ...(rest.oldPassword ? rest : {}),
  };
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
