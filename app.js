/* ── Quote treasure box ──────────────────────────────────────── */
const QUOTES = [
  {
    text: "There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.",
    author: "Miyamoto Musashi"
  },
  {
    text: "Today is victory over yourself of yesterday; tomorrow is your victory over lesser men.",
    author: "Miyamoto Musashi"
  },
  {
    text: "If you know the way broadly, you will see it in everything.",
    author: "Miyamoto Musashi"
  },
  {
    text: "You can only find truth with logic if you have already found truth without it.",
    author: "G.K. Chesterton"
  },
  {
    text: "There is hope, but not for us.",
    author: "Franz Kafka"
  },
  {
    text: "A book must be the axe for the frozen sea within us.",
    author: "Franz Kafka"
  },
  {
    text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion.",
    author: "Franz Kafka"
  },
  {
    text: "In the fight between you and the world, back the world.",
    author: "Franz Kafka"
  },
  {
    text: "The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.",
    author: "Alan Watts"
  },
  {
    text: "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
    author: "Fyodor Dostoevsky"
  },
  {
    text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
    author: "Fyodor Dostoevsky"
  },
  {
    text: "Taking a new step, uttering a new word, is what people fear most.",
    author: "Fyodor Dostoevsky"
  },
  {
    text: "Man is sometimes extraordinarily, passionately, in love with suffering.",
    author: "Fyodor Dostoevsky"
  },
  {
    text: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him.",
    author: "Fyodor Dostoevsky"
  },
  {
    text: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "That which does not kill us, makes us stronger.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "There are no facts, only interpretations.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    text: "Wonder is the beginning of wisdom.",
    author: "Socrates"
  },
  {
    text: "Education is the kindling of a flame, not the filling of a vessel.",
    author: "Socrates"
  },
  {
    text: "To know thyself is the beginning of wisdom.",
    author: "Socrates"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    text: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle"
  },
  {
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    text: "All that we are is the result of what we have thought.",
    author: "The Buddha"
  },
  {
    text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "The Buddha"
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "The Buddha"
  },
  {
    text: "Knowing others is wisdom; knowing yourself is Enlightenment.",
    author: "Lao Tzu"
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu"
  },
  {
    text: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  }
];

/* ── Date-based daily selection ─────────────────────────────── */
function getTodayIndex() {
  const now = new Date();
  // Build a numeric seed from year + day-of-year so the quote
  // stays constant all day but rotates at midnight.
  const start = new Date(now.getFullYear(), 0, 0);
  const diff  = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay); // 1–366
  return (now.getFullYear() * 1000 + dayOfYear) % QUOTES.length;
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric'
  });
}

/* ── Render quote ────────────────────────────────────────────── */
function renderQuote() {
  const idx    = getTodayIndex();
  const today  = QUOTES[idx];
  const date   = new Date();

  document.getElementById('dateLabel').textContent  = formatDate(date);
  document.getElementById('quoteText').textContent  = today.text;
  document.getElementById('quoteAuthor').textContent = today.author;
}

/* ── Toast helper ────────────────────────────────────────────── */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

/* ── Copy button ─────────────────────────────────────────────── */
document.getElementById('copyBtn').addEventListener('click', () => {
  const quote  = document.getElementById('quoteText').textContent;
  const author = document.getElementById('quoteAuthor').textContent;
  const full   = `"${quote}" — ${author}`;

  navigator.clipboard.writeText(full)
    .then(() => showToast('Quote copied to clipboard!'))
    .catch(() => {
      // Fallback for environments where clipboard API is unavailable
      try {
        const ta = document.createElement('textarea');
        ta.value = full;
        ta.style.position = 'fixed';
        ta.style.opacity  = '0';
        document.body.appendChild(ta);
        ta.select();
        const success = document.execCommand('copy');
        document.body.removeChild(ta);
        if (success) {
          showToast('Quote copied!');
        } else {
          showToast('Could not copy – please select and copy manually.');
        }
      } catch (_e) {
        showToast('Could not copy – please select and copy manually.');
      }
    });
});

/* ── Share button ────────────────────────────────────────────── */
const shareBtn = document.getElementById('shareBtn');

if (navigator.share) {
  shareBtn.addEventListener('click', () => {
    const quote  = document.getElementById('quoteText').textContent;
    const author = document.getElementById('quoteAuthor').textContent;
    navigator.share({
      title: "The Thinker's Daily Quote",
      text:  `"${quote}" — ${author}`,
      url:   location.href
    }).catch(() => {}); // user cancelled – ignore
  });
} else {
  // Hide share button when Web Share API is not supported
  shareBtn.classList.add('hidden');
}

/* ── Register service worker ─────────────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

/* ── Init ────────────────────────────────────────────────────── */
renderQuote();
