import React from 'react';

const toolsList1 = [
  {
    name: 'ChatGPT', description: 'Chatbot AI teks', url: 'https://chat.openai.com'
  },
  {
    name: 'GrammarlyGO', description: 'Asisten menulis AI', url: 'https://www.grammarly.com/grammarlygo'
  },
  {
    name: 'Jasper AI', description: 'Konten marketing AI', url: 'https://www.jasper.ai'
  },
  {
    name: 'Writesonic', description: 'Konten SEO & iklan', url: 'https://writesonic.com'
  },
  {
    name: 'Perplexity AI', description: 'Asisten tanya jawab AI', url: 'https://www.perplexity.ai'
  },
];

const toolsList2 = [
  {
    name: 'Canva', description: 'Desain grafis mudah', url: 'https://www.canva.com'
  },
  {
    name: 'DALL·E', description: 'Gambar dari teks', url: 'https://openai.com/dall-e'
  },
  {
    name: 'MidJourney', description: 'Seni AI dari teks', url: 'https://www.midjourney.com'
  },
  {
    name: 'Remove.bg', description: 'Hapus background otomatis', url: 'https://www.remove.bg'
  },
  {
    name: 'Runway ML', description: 'Edit video/gambar AI', url: 'https://runwayml.com'
  },
];

const toolsList3 = [
  {
    name: 'VEED.IO', description: 'Editor video AI', url: 'https://www.veed.io'
  },
  {
    name: 'Pictory', description: 'Buat video dari teks', url: 'https://pictory.ai'
  },
  {
    name: 'Synthesia', description: 'Avatar video AI', url: 'https://www.synthesia.io'
  },
  {
    name: 'Adobe Premiere Pro', description: 'Edit video profesional', url: 'https://www.adobe.com/products/premiere.html'
  },
  {
    name: 'CapCut', description: 'Edit video gratis dan cepat', url: 'https://www.capcut.com'
  },
];

const toolsList4 = [
  {
    name: 'GitHub Copilot', description: 'Saran kode AI', url: 'https://github.com/features/copilot'
  },
  {
    name: 'Replit Ghostwriter', description: 'Asisten coding AI', url: 'https://replit.com/site/ghostwriter'
  },
  {
    name: 'Tabnine', description: 'Auto-complete kode', url: 'https://www.tabnine.com'
  },
  {
    name: 'Codex (OpenAI)', description: 'Teks ke kode', url: 'https://openai.com/blog/openai-codex'
  },
  {
    name: 'Hugging Face', description: 'Model AI open source', url: 'https://huggingface.co'
  },
];

const toolsList5 = [
  {
    name: 'Jupyter Notebook', description: 'Analisis data interaktif', url: 'https://jupyter.org'
  },
  {
    name: 'IBM Watson', description: 'Analisis data & NLP', url: 'https://www.ibm.com/watson'
  },
  {
    name: 'Google Cloud AI', description: 'Layanan AI Google', url: 'https://cloud.google.com/ai'
  },
  {
    name: 'Azure AI', description: 'AI dari Microsoft', url: 'https://azure.microsoft.com/en-us/services/cognitive-services/'
  },
  {
    name: 'Amazon AWS AI', description: 'Layanan AI dari AWS', url: 'https://aws.amazon.com/machine-learning/'
  },
];

const toolsList6 = [
  {
    name: 'ElevenLabs', description: 'Text-to-speech realistis', url: 'https://www.elevenlabs.io'
  },
  {
    name: 'Adobe Enhance Speech', description: 'Perbaiki kualitas suara', url: 'https://podcast.adobe.com/enhance'
  },
  {
    name: 'Murf.ai', description: 'Voiceover AI', url: 'https://murf.ai'
  },
  {
    name: 'LALAL.AI', description: 'Pisah vokal dan instrumen', url: 'https://www.lalal.ai'
  },
  {
    name: 'Play.ht', description: 'Text to speech AI', url: 'https://play.ht'
  },
];

const toolsList7 = [
  {
    name: 'AIVA', description: 'Komposisi musik AI', url: 'https://www.aiva.ai'
  },
  {
    name: 'Boomy', description: 'Buat musik instan', url: 'https://boomy.com'
  },
  {
    name: 'Mubert', description: 'Streaming musik AI', url: 'https://mubert.com'
  },
  {
    name: 'Soundraw', description: 'Komposer musik AI', url: 'https://soundraw.io'
  },
  {
    name: 'Endel', description: 'Soundscape personal AI', url: 'https://www.endel.io'
  },
];

const toolsList8 = [
  {
    name: 'Khan Academy', description: 'Tutor AI interaktif', url: 'https://www.khanacademy.org'
  },
  {
    name: 'Coursera', description: 'Kursus AI populer', url: 'https://www.coursera.org'
  },
  {
    name: 'DeepLearning.AI', description: 'Pelatihan AI profesional', url: 'https://www.deeplearning.ai'
  },
  {
    name: 'edX', description: 'Program AI dan ML', url: 'https://www.edx.org'
  },
  {
    name: 'DataCamp', description: 'Belajar data science', url: 'https://www.datacamp.com'
  },
];

const toolsList9 = [
  {
    name: 'Copy.ai', description: 'Tulis konten marketing', url: 'https://www.copy.ai'
  },
  {
    name: 'Surfer SEO', description: 'Optimasi konten SEO', url: 'https://surferseo.com'
  },
  {
    name: 'AdCreative.ai', description: 'Desain iklan otomatis', url: 'https://www.adcreative.ai'
  },
  {
    name: 'Writesonic', description: 'Iklan & SEO AI', url: 'https://writesonic.com'
  },
  {
    name: 'Jasper AI', description: 'Konten pemasaran AI', url: 'https://www.jasper.ai'
  },
];

const toolsList10 = [
  {
    name: 'Fireflies AI', description: 'Transkrip rapat otomatis', url: 'https://fireflies.ai'
  },
  {
    name: 'Otter.ai', description: 'Catatan & transkrip rapat', url: 'https://otter.ai'
  },
  {
    name: 'Notion AI', description: 'AI bantu produktivitas', url: 'https://www.notion.so/product/ai'
  },
  {
    name: 'Fathom', description: 'Ringkasan meeting otomatis', url: 'https://fathom.video'
  },
  {
    name: 'TextCraft', description: 'AI di Microsoft Word', url: 'https://www.textcraft.ai'
  },
];

const toolsList11 = [
  {
    name: 'TensorFlow', description: 'Framework machine learning', url: 'https://www.tensorflow.org'
  },
  {
    name: 'PyTorch', description: 'Library deep learning fleksibel', url: 'https://pytorch.org'
  },
  {
    name: 'Hugging Face', description: 'Model AI open source', url: 'https://huggingface.co'
  },
  {
    name: 'Fast.ai', description: 'Framework DL mudah digunakan', url: 'https://www.fast.ai'
  },
  {
    name: 'OpenAI', description: 'API dan model AI canggih', url: 'https://openai.com'
  },
];

export default function Tools() {
  const allLists = [
    { title: 'AI Umum', list: toolsList1 },
    { title: 'AI Gambar & Desain', list: toolsList2 },
    { title: 'AI untuk Video', list: toolsList3 },
    { title: 'AI untuk Programming', list: toolsList4 },
    { title: 'AI untuk Data & Analisis', list: toolsList5 },
    { title: 'AI untuk Audio & Suara', list: toolsList6 },
    { title: 'AI Musik', list: toolsList7 },
    { title: 'AI Pendidikan', list: toolsList8 },
    { title: 'AI SEO & Marketing', list: toolsList9 },
    { title: 'AI Productivity', list: toolsList10 },
    { title: 'Tools Open Source dan SDK', list: toolsList11 },
  ];

  return (
    <div className="p-6 text-white">
      {allLists.map((section, idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-bold text-center mb-6">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {section.list.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 hover:bg-gray-700 transition p-4 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold">{tool.name}</h3>
                <p className="text-sm text-gray-300">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
