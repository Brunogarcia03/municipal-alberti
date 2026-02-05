"use client";

const ButtonShare = ({ news }) => {
  const handleShare = async () => {
    const shareData = {
      title: news[0].titulo,
      text: news[0].descripcion || news[0].titulo,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copiado al portapapeles");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex gap-x-2 hover:opacity-70 transition cursor-pointer"
    >
      Compartir
    </button>
  );
};

export default ButtonShare;
