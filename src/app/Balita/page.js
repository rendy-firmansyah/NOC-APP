const Balita = () => {
    return(
        <section className="lg:h-screen">
            <div className="flex justify-center pb-10">
                <div className="mt-[120px] card lg:w-[900px] md:w-[600px] w-[350px] px-6 md:px-14 lg:px-32 py-5 md:py-14 bg-gray-400 rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-center">STATUS KESEHATAN KELOMPOK</h1>
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Balita</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full border-b-black border-b-2 my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Apakah ada anggota keluarga yang usianya 0-28 hari?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Apakah ada anggota keluarga balita yang usianya 1 bulan-5 tahun?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Usia berapa pertama kali kontak dengan tenaga kesehatan?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">0 - 7 hari</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">8 - 28 hari</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">3 - lebih dari 28 hari</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Apakah balita mendapatkan ASI Esklusif?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>e. Apakah setiap bulan balita dibawa ke posyandu?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>f. Apa saja jenis Imunisasi yang sudah didapatkan?</p>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" className="block text-sm font-medium leading-6 text-gray-900">Polio</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" className="block text-sm font-medium leading-6 text-gray-900">BCG</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">DPT</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">Hepatitis</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">Campak</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p>g. Hasil pengukuran pertumbuhan dan perkembangan Balita ....</p>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Usia</label>
                                            <div className="mt-2">
                                                <input type="text" name="first-name" id="first-name" placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">(Tahun, Bulan, Hari)</label>
                                        </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">BB (Berat Badan)</label>
                                            <div className="mt-2">
                                                <input type="text" name="first-name" id="first-name" placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">(Kg)</label>
                                        </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">TB (Tinggi Badan)</label>
                                            <div className="mt-2">
                                                <input type="text" name="first-name" id="first-name" placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">(Cm)</label>
                                        </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">KPSP</label>
                                            <div className="mt-2">
                                                <input type="text" name="first-name" id="first-name" placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Interpretasi</label>
                                            <div className="mt-2">
                                                <input type="text" name="first-name" id="first-name" placeholder="Isi disini ..." autocomplete="given-name" className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>h. Dari hasil pengukuran tinggi badan berdasarkan usia (TB/U) Status gizi anak saat ini ....</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Tinggi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Normal</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Pendek</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Sangat pendek</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>i. Dari hasil pengukuran status gizi di pita KMS, berat badan anak berada pada?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Daerah kuning atas</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Daerah hijau</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Daerah kuning bawah</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Daerah garis merah</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>j. Adakah penyakit atau keluhan yang dirasakan balita saat ini?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Batuk, pilek, panas</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Diare</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Gizi kurang</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Gatal gatal</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="mt-10 py-4 w-full bg-gray-50 rounded-lg hover:bg-gray-300 transition-all duration-300">Submit Jawaban</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Balita;