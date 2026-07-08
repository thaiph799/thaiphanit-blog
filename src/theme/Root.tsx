import React, {useEffect, useState} from 'react';

export default function Root({children}: {children: React.ReactNode}): React.ReactElement {
  const [image, setImage] = useState<{src: string; alt: string} | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) {
        return;
      }

      const isContentImage = Boolean(target.closest('article, main'));
      if (!isContentImage || target.closest('a')) {
        return;
      }

      setImage({src: target.currentSrc || target.src, alt: target.alt || 'Portfolio image'});
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!image) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setImage(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [image]);

  return (
    <>
      {children}
      {image ? (
        <button className="tpLightbox" type="button" onClick={() => setImage(null)} aria-label="Close image preview">
          <img src={image.src} alt={image.alt} />
        </button>
      ) : null}
    </>
  );
}
