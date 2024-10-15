import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
   return (
      <>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">Home</Link>
         </h2>
         <br/>
         <Image
            src= '/images/ita_logo.png'
            height= {256}
            width= {512}
            alt="Logo Ita"
         />
      </>	  
   )
}