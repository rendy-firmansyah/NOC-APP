const IbuHamil = () => {
    return(
        <section className="lg:h-screen">
            <div className="flex justify-center pb-10">
                <div className="mt-[120px] card lg:w-[900px] md:w-[600px] w-[350px] px-6 md:px-14 lg:px-32 py-5 md:py-14 bg-gray-400 rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-center">STATUS KESEHATAN KELOMPOK</h1>
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Ibu Hamil</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full border-b-black border-b-2 my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Berapa umur kehamilan pada trimester?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">I (0-3 bulan)</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">II (4-6 bulan)</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">III (7-9 bulan)</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Jika ada, ini adalah kehamilan yang ke?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">1</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">2</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">3</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900"> Lebih dari 3 </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Berapa usia ibu hamil saat ini?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Kurang dari 20 tahun</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">20 - 35 tahun</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Lebih dari 35 tahun</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Apakah ibu memeriksakan kehamilannya?</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Iya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>e. Bila ya, sudah berapa kali</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">1 kali</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">2 kali</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Lebih dari 3 kali</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>g. Bila tidak, alasannya</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Tidak ada biaya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Tidak sempat</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Tidak tahu</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>h. Rencana tempat persalinan</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Puskesmas/RS</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Bidan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Dukun</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>i. Apakah sudah mendapatkan imunisasi TT</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Ya</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Tidak tahu</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>j. Bila ya</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Lengkap (2 kali) </label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Tidak</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>k. Adakah penyakit atau keluhan yang dirasakan bumil saat ini</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Tekanan darah tinggi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Tekanan darah rendah</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Kurang darah</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Kurang gizi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Kaki bengkak</label>
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

export default IbuHamil;