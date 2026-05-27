export default function TalkingPhotoApp() { return ( <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6"> <div className="w-full max-w-3xl bg-zinc-900 rounded-3xl shadow-2xl p-6 border border-zinc-700"> <h1 className="text-4xl font-bold text-center mb-2"> AI Talking Photo Generator </h1>

<p className="text-center text-zinc-400 mb-8">
      Clone Style Grok Veo3 • Durasi 15 Detik
    </p>

    <div className="space-y-6">
      <div>
        <label className="block mb-2 text-lg font-semibold">
          Upload Foto
        </label>

        <input
          type="file"
          accept="image/*"
          className="w-full p-3 rounded-2xl bg-zinc-800 border border-zinc-700"
        />
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold">
          Masukkan Perintah Video
        </label>

        <textarea
          placeholder="Contoh: Buat foto berbicara alami sambil tersenyum seperti video cinematic Veo3"
          className="w-full h-40 p-4 rounded-2xl bg-zinc-800 border border-zinc-700 resize-none"
        />
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold">
          Durasi Video
        </label>

        <select className="w-full p-3 rounded-2xl bg-zinc-800 border border-zinc-700">
          <option>15 Detik</option>
        </select>
      </div>

      <button className="w-full bg-white text-black font-bold py-4 rounded-2xl text-lg hover:scale-[1.02] transition">
        Generate Video
      </button>

      <div className="mt-8">
        <div className="aspect-video bg-zinc-800 rounded-3xl border border-zinc-700 flex items-center justify-center text-zinc-500 text-lg">
          Preview Video AI
        </div>
      </div>

      <button className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl text-lg hover:scale-[1.02] transition mt-4">
        Download Video
      </button>
    </div>
  </div>
</div>

) }
