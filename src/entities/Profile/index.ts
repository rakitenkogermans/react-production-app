export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
export { profileActions, profileReducer } from 'entities/Profile/model/slice/profileSlice';
export type { Profile, ProfileSchema } from './model/types/profile';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/services/updateProfileData/updateProfileData';
