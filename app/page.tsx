import StudyApp from './study-app';
import {getChatGPTUser,chatGPTSignInPath,chatGPTSignOutPath} from './chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Page(){const u=await getChatGPTUser();return <StudyApp identity={u} signInPath={chatGPTSignInPath('/')} signOutPath={chatGPTSignOutPath('/')} />}
