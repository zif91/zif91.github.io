import Image from 'next/image';

export function Photo({ src, alt, className, priority = false, landscape = false }: {
  src: string; alt: string; className?: string; priority?: boolean; landscape?: boolean;
}) {
  return <Image src={src} alt={alt} width={landscape ? 1536 : 1122} height={landscape ? 1024 : 1402}
    className={className} priority={priority} sizes={landscape ? '(max-width: 700px) 100vw, 50vw' : '(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw'} />;
}
