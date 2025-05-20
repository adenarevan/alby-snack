'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const snacks = [
  {
    name: "Cimol",
    desc: "Cemilan gurih dan kenyal, cocok buat santai!",
    price: "Rp5.000",
    image: "/images/cimol.png",
    waMessage: "Halo kak! Aku mau pesan Cimol."
  },
  {
    name: "Cimol Keju",
    desc: "Cimol dengan sensasi lelehan keju creamy yang gurih!",
    price: "Rp6.000",
    image: "/images/cimolkeju.png",
    waMessage: "Halo kak! Aku mau pesan Cimol Keju."
  },
  {
    name: "Makaroni",
    desc: "Renyer pedas yang crunchy banget!",
    price: "Rp4.000",
    image: "/images/makaroni.png",
    waMessage: "Halo kak! Aku mau pesan Makaroni."
  },
  {
    name: "Basreng",
    desc: "Bakso goreng khas Alby Snack, pedasnya nampol!",
    price: "Rp5.000",
    image: "/images/basreng.png",
    waMessage: "Halo kak! Aku mau pesan Basreng."
  }
];

const phone = "081296023400";
const mapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.193222126297!2d106.72738731100698!3d-6.215007893738111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f13670f79235%3A0x1a6cda36e850dcd3!2sQPMJ%2BV2%2C%20Joglo%2C%20Kembangan%2C%20West%20Jakarta%20City%2C%20Jakarta%20Capital%20Region!5e0!3m2!1sen!2sid!4v1716205510000!5m2!1sen!2sid";

const testimonials = [
  {
    name: "Andi W.",
    review: "Cimolnya enak banget, beneran nagih!",
    rating: 5
  },
  {
    name: "Rina M.",
    review: "Basreng pedesnya mantap, cocok buat temen kerja.",
    rating: 4
  },
  {
    name: "Yudha P.",
    review: "Harga murah rasa mewah. Repeat order terus!",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 animate-pulse-slow">
      <Head>
        <title>Alby Snack | Cemilan Pedas Kekinian</title>
        <meta name="description" content="Snack pedas seperti cimol, makaroni, basreng, dan lainnya! Bisa pesan via WA." />
        <meta property="og:image" content="/images/og-cover.png" />
      </Head>

      <a href={`https://wa.me/${phone}`} target="_blank" className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-xl">
        💬
      </a>

      <main className="flex-grow p-6">
        <header className="text-center mb-10">
          <motion.h1
            className="text-6xl font-extrabold text-red-700 drop-shadow-md mb-3 animate-bounce"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Alby Snack 🌶️🍟
          </motion.h1>
          <motion.p
            className="text-xl text-gray-800 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cemilan pedas kekinian favorit kamu — murah, gurih, nagih!
          </motion.p>
        </header>

        <motion.div className="w-full bg-gradient-to-r from-yellow-300 via-red-300 to-yellow-300 text-red-800 text-center py-2 font-semibold rounded-xl mb-8 shadow-md animate-pulse">
          🔥 PROMO SPESIAL: Beli 2 Cimol Gratis Makaroni - Hari Ini Saja! 🔥
        </motion.div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {snacks.map((snack, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 border-4 border-yellow-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Image
                src={snack.image}
                alt={snack.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-bold text-orange-700">
                    {snack.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{snack.desc}</p>
                </div>
                <div className="mt-4">
                  <p className="text-red-500 text-lg font-bold">
                    {snack.price}
                  </p>
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(snack.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-sm"
                  >
                    💬 Pesan via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 mb-12 border border-yellow-300">
          <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">⭐ Testimoni Pelanggan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl shadow">
                <p className="text-sm text-gray-700 italic">“{item.review}”</p>
                <p className="mt-2 text-yellow-600 font-bold">{item.name}</p>
                <p className="text-yellow-500">{"⭐".repeat(item.rating)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 mb-12 border border-red-200">
          <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">📍 Lokasi & Kontak</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 text-sm mb-2">
                Lokasi kami mudah ditemukan dan dekat dari mana saja. Kunjungi langsung atau hubungi kami:
              </p>
              <ul className="text-sm text-gray-800 space-y-1">
                <li><strong>📍 Alamat:</strong> JL Haji Sa'abah, No. 80, Joglo, RT.3/RW.1, Meruya Sel., Kec. Kembangan Kota Jakarta Barat</li>
                <li><strong>📞 Telp/WA:</strong> <a href={`https://wa.me/${phone}`} className="text-green-600 underline font-medium">{phone}</a></li>
                <li><strong>🕒 Jam Operasional:</strong> 10.00 – 22.00 WIB</li>
              </ul>
            </div>
            <iframe
              src={mapsLink}
              className="w-full h-64 rounded-xl border-2 border-orange-300 shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white text-sm rounded-t-xl shadow-lg animate-pulse">
        © 2025 Alby Snack 🔥 Pedasnya bikin balik lagi! | IG: <a href="https://instagram.com/albysnack.id" className="underline">@albysnack.id</a>
      </footer>
    </div>
  );
}