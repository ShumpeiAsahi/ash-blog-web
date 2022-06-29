import Link from 'next/link';
import Image from 'next/image'

export const Card = () => {
    return (
    <Link href='/'>
        <a className='mx-4'>
            <div>
                <p>2022/06/28</p>
                <div>
                    <span className='font-bold text-lg'>Kotlinのいいところをまとめた</span>
                    <Image src='/japanese-style.jpg' width='80' height='80' alt='logo'></Image>
                </div>
                <div>
                    <p>Kotlin</p><p>Web</p>
                </div>
                <p>Kotlinを使い始めて数か月経ちました。感じたことをまとめます。</p>
            </div>
        </a>
    </Link>
    );
  };