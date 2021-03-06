import { signIn, useSession } from "next-auth/react";
import {useEffect} from "react";
import { compileFunction } from "vm";
import spotifyApi from "../lib/spotify";

function useSpotify() {
    const {data: session, status} = useSession();
    useEffect(() => {
        if (session){
            if(session.error === 'RefreshAccessTokenError'){
                signIn();
            }

            spotifyApi.setAccessToken(session.user.accessToken);
        }
    }, [session])
    console.log(spotifyApi);
    return spotifyApi;
}

export default useSpotify;
