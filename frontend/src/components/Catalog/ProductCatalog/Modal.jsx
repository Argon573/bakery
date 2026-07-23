const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 animate-in fade-in duration-200"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
        >
            <div
                className="relative w-full max-w-sm lg:max-w-md rounded-3xl bg-amber-100 border border-amber-300/60 p-6 lg:p-8 shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-amber-200/50 text-amber-900 hover:bg-amber-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
                    aria-label="Закрыть"
                >
                    ✕
                </button>

                <div className="text-3xl mb-2" aria-hidden="true">
                    ☎️
                </div>
                <h2 id="order-modal-title" className="text-xl lg:text-2xl font-bold text-amber-950 mb-2">
                    Для заказа позвоните нам!
                </h2>
                <p className="text-sm lg:text-base text-amber-900/80 mb-6">
                    Заказ, доставка и подробная консультация:
                </p>

                <div className="flex flex-col gap-3 w-full mb-4">
                    <a
                        href="tel:+73522440151"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-white font-bold rounded-2xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                    >
                        <span aria-hidden="true">📞</span> 44-01-51
                    </a>

                    <a
                        href="tel:+73522556065"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white/80 hover:bg-white active:scale-[0.98] text-amber-950 font-bold rounded-2xl border border-amber-300/50 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                        <span aria-hidden="true">📞</span> 55-60-65
                    </a>
                </div>

                <button
                    onClick={onClose}
                    className="text-xs font-semibold text-amber-800/60 hover:text-amber-900 underline underline-offset-4 cursor-pointer mt-1 transition-colors focus-visible:outline-none focus-visible:text-amber-900"
                >
                    Понятно, закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;
