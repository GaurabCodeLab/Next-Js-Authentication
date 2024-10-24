import { doGitHubLogin } from "@/app/actions";

const SocialLogin = () => {
  return (
    <form className="mt-2" action={doGitHubLogin}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          type="submit"
          className="btn btn-info px-4"
          name="action"
          value="google"
        >
          Sign In With Google
        </button>
        <button
          type="submit"
          className="btn btn-dark px-4"
          name="action"
          value="github"
        >
          Sign In With GitHub
        </button>
      </div>
    </form>
  );
};

export default SocialLogin;
