import { useRouter } from "next/router";
export default function Helloworld () {
    const router = useRouter();
    return (
        <>
        <div>This is the first post</div>
        <br />
        <button type="button" onClick={ () => router.push("/posts/address") }>Address</button>
        </>
    )
}