import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";
import { authOptions } from "~/server/auth";

export default function AuthPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={async (e) => {
          e.preventDefault();
          await signIn("worldcoin");
        }}
      >
        <div className="flex h-16 w-64 items-center justify-center rounded-xl bg-black">
          <h2 className="text-white">Log in with WorldCoin</h2>
        </div>
      </button>

      {/* <p>
        {!session && (
          <>
            <span>You are not signed in</span>
            <a
              href={`/api/auth/signin`}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async (e) => {
                e.preventDefault();
                await signIn("worldcoin"); // when worldcoin is the only provider
                // signIn() // when there are multiple providers
              }}
            >
              Sign in
            </a>
          </>
        )}
        {session?.user && (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
              />
            )}
            <span>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async (e) => {
                e.preventDefault();
                await signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </p> */}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/marketplace", permanent: false } };
  }
}
