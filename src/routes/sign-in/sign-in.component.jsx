import "../../utils/firebase/firebase.utils";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logUserInfo = async () => {
    const userInfo = await signInWithGooglePopup();
    console.log(userInfo);

    await createUserDocumentFromAuth(userInfo.user);
  };

  const logRedirectUserInfo = async () => {
    const {user} = await signInWithGoogleRedirect();

    console.log(user);
  };

  return (
    <div>
      <div>Sign in page</div>
      <button onClick={logUserInfo}>Sign In with popup</button>

      <button onClick={logRedirectUserInfo}>Sign In with google redirect</button>
    </div>
  );
};

export default SignIn;
