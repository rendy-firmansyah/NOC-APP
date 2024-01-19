const Remaja = () => {
    return(
        <section className="lg:h-screen">
            <div className="flex justify-center pb-10">
                <div className="mt-[120px] card lg:w-[900px] md:w-[600px] w-[350px] px-6 md:px-14 lg:px-32 py-5 md:py-14 bg-gray-400 rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-center">STATUS KESEHATAN KELOMPOK</h1>
                    <h3 className="text-lg md:text-xl font-semibold mt-10 uppercase">Kelompok Remaja (SMP-SMA)</h3>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="w-full border-b-black border-b-2 my-3"></div>

                    <div className="text-survey">
                        <div className="question">
                            <form className="" action="" method="">
                                <div>                                    
                                    <p>a. Kegiatan anak diluar sekolah</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Keagamaan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Olahraga</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Bermain/kumpul dengan teman</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">                                    
                                    <p>b. Bagaimana penggunaan waktu luang anak</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Musik/TV/HP</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Olahraga</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Rekreasi</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Keagamaan</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Lain-lain</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>c. Kebiasaan anak</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Merokok</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Alkohol</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Narkoba</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">                                    
                                    <p>d. Adakah penyakit atau keluhan yang dirasakan remaja saat ini</p>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Batuk, pilek, panas</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Gizi lebih</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Dismenore</label>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">Gatal-gatal</label>
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

export default Remaja;