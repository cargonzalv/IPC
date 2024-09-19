import html2canvas from 'html2canvas';

export const containerId = 'payment-confirmation-share-container';
const imageType = 'image/png';

export const buildCanvasAndShare = (divContainer: HTMLElement, shareHandler: any) => {
  const html2CanvasConfig: Record<string, boolean> = {
    allowTaint: true,
    useCORS: true,
  };
  html2canvas(divContainer, html2CanvasConfig).then((canvas) => {
    canvas.toBlob((data: any) => {
      shareHandler(data);
    }, imageType);
  });
};

export const handleShareNative = (data: Blob, fileShareName: string) => {
  const file = new File([data], fileShareName, { type: imageType });
  const shareData = {
    files: [file],
  };
  if (navigator.canShare && navigator.canShare({ files: shareData.files })) {
    navigator.share(shareData);
  }
};

export const handleCopyContent = (data: Blob) => {
  navigator.clipboard.write([
    new ClipboardItem({
      [imageType]: data,
    }),
  ]);
};
