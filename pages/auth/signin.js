/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-typos */
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function signin({providers}) {
  return (
    <>
        <Header/>
        <div className="mt-40">
            {Object.values(providers).map(provider => (
                <div key={provider.name} className="flex flex-col items-center">
                    <img src="/img/google-logo.png" alt="google-logo" className="w-52 object-cover"/>
                    <p className="text-sm italic my-10 text-center">This website create by a reason</p>
                    <button className="bg-red-500 rounded-lg text-white p-3 hover:bg-red-400" onClick={() => signIn(provider.id, {
                        callbackUrl: "/"
                    })}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return { 
        props: {providers} 
    }
}