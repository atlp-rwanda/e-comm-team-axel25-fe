import { useDispatch } from 'react-redux';
import { useGetUserQuery } from './getUser';
import { login } from '../../../reducers/authReducer';

export function UserInfo(id: string) {
  const dispatch = useDispatch();
  const { data: user } = useGetUserQuery(id);
  console.log(user);

  localStorage.setItem('Role', user?.data.role);
  if (user?.data) {
    dispatch(
      login({
        email: user?.data.email,
        given_name: user?.data.given_name,
        surname: user?.data.surname,
        avatar: user?.data.avatar,
      }),
    );
  }
}
