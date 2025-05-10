let isEnvelopeOpen = false;

function toggleEnvelope(open) {
  const envelope = document.querySelector('.envelope');
  const paper = document.querySelector('.paper');
  const content = document.querySelector('.content');

  if (open && !isEnvelopeOpen) {
    // Open the envelope
    envelope.style.opacity = '0';
    envelope.style.transform = 'translateY(-50px)';
    envelope.style.pointerEvents = 'none';

    setTimeout(() => {
      paper.style.transform = 'translate(-50%, -50%) translateY(0) scale(1)';
      paper.style.opacity = '1';
      paper.style.pointerEvents = 'auto';

      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 200);
    }, 300);

    isEnvelopeOpen = true;
  } else if (!open && isEnvelopeOpen) {
    // Close the envelope
    paper.style.transform = 'translate(-50%, -50%) translateY(100%) scale(0.2)';
    paper.style.opacity = '0';
    paper.style.pointerEvents = 'none';

    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
      envelope.style.opacity = '1';
      envelope.style.transform = 'translateY(0)';
      envelope.style.pointerEvents = 'auto';
    }, 300);

    isEnvelopeOpen = false;
  }
}